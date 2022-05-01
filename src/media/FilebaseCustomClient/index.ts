/* eslint-disable prettier/prettier */
import 'dotenv/config';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const AWS = require('aws-sdk');

const s3Client = new AWS.S3({
  endpoint: process.env.AWS_ENDPOINT,
  signatureVersion: 'v4',
});

export class FilebaseCustomClient {
    readonly Bucket: string = process.env.AWS_BUCKET;
    Objects; // # need proper typing
    DeletedObjects;

    // @ save objects IN create() or update(:blogNoteId) Postgres
    // @ access: PRIVATE
    async createObjects(
        username,
        blogNoteTitle,
        files
    ) {
        // console.log('fbClient:', blogNoteTitle);
        return await Promise.all(files.map((file) => {
            return s3Client.putObject({
                Body: file.buffer,
                Bucket: this.Bucket,
                Key: `${username}/${blogNoteTitle}/${file.originalname}`,
                ContentType: file.mimetype
            }, (err, objects) => {
                if (err) return console.log(err);
                // console.log('fbResponse:', data);
                return objects;
            }).promise();
        }));
    }
    
    // # @ findAll objects IN findOne(:blogNoteId) Postgres 
    // @ access: PRIVATE
    async findAllObjects(username, blogNoteTitle) {
        // console.log('fbClient blogNoteTitle:', blogNoteTitle)
        // console.log(`${username}/${blogNoteTitle}/`)
        await s3Client.listObjects({
            Bucket: this.Bucket,
            Prefix: `${username}/${blogNoteTitle}/`,
        }, (err, objects) => {
            if (err) return console.log(err);
            this.Objects = objects.Contents;
        }).promise();
        // console.log(this.Objects)
        return this.Objects;
    }

    // @ deleteObjects IN update(:blogNoteId) or delete(:blogNoteId) Postgres
    // @ access: PRIVATE
    async deleteObjects(username, blogNoteTitle, fileNames) {
        const Keys = fileNames.map(({ fileName }) => ({
            Key: `${username}/${blogNoteTitle}/${fileName}`,
        }));
        // console.log('Keys:', Keys);
        return await s3Client.deleteObjects({
            Bucket: this.Bucket,
            Delete: { Objects: Keys, Quiet: false },
        }, (err, objects) => {
            if (err) return console.log(err);
            // console.log('fbResponse:', objects);
            // return objects;
        }).promise();
    }

    // # @ fetch presigned URLs IN findOne(:blogNoteId) Postgres 
    // @ access: PRIVATE
    async fetchPresignedUrl(username, blogNoteTitle, fileName) {
        return await s3Client.getSignedUrlPromise('getObject', {
            Bucket: this.Bucket,
            Key: fileName
        }).promise();

            // .then(url => console.log(url))
            // .catch(err => {
            //     console.log('err:')
            //     console.log(err)
            // })
    }
}

// # need to transform response === omit iwber info