/* eslint-disable prettier/prettier */
import 'dotenv/config';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const AWS = require('aws-sdk');

const s3Client = new AWS.S3({
  endpoint: 'https://s3.filebase.com',
  signatureVersion: 'v4',
});

export class FilebaseCustomClient {
    readonly Bucket: string = 'welbex-test-bucket';
    Key: string;
    Objects; // # need proper typing

    // @ create/save a new object IN create() & update(:id) Postgres
    // @ access: PUBLIC
    async createObjects(
        username,
        blogNoteTitle,
        files
    ) {
        // console.log('fbClient:', blogNoteTitle);
        return await Promise.all(files.map((file) => {
            return s3Client.putObject({
                Body: file.buffer,
                Bucket: 'welbex-test-bucket',
                Key: `${username}/${blogNoteTitle}/${file.originalname}`,
                ContentType: file.mimetype
            }, (err, data) => {
                if (err) return console.log(err);
                // console.log('fbResponse:', data);
                return data;
            }).promise();
        }));
    }

    // # findAllRelatedObjects IN find(:id) Postgres
    // @ access: PUBLIC
    async findAllRelatedObjects() {}
    
    // # deleteObjects IN update(:id) Postgres
    // @ access: PUBLIC
    async deleteObjects() {}
    
    // @ findAll objects
    // @ access: ADMIN // # only for dev purposes
    async findAllObjects(username, blogNoteTitle) {
        // console.log('fbClient blogNoteTitle:', blogNoteTitle)
        console.log(`${username}/${blogNoteTitle}/`)
        await s3Client.listObjects({
            Bucket: this.Bucket,
            Prefix: `${username}/${blogNoteTitle}/`,
        }, (err, objects) => {
            if (err) return console.log(err);
            this.Objects = objects.Contents;
        }).promise();
        console.log(this.Objects)
        return this.Objects;
    }
}

// // @ findOne object
// s3Client.getObject({
//     Bucket: 'welbex-test-bucket',
//     Key: 'oneMoreTry.png'
// }, (err, data) => {
//     if (err) return console.log(err);
//     console.log(data)
// });

// // @ get url for the media
// s3Client.getSignedUrlPromise('getObject', {
//     Bucket: 'welbex-test-bucket',
//     Key: 'ок ок.png'
// })
//     .then(url => console.log(url))
//     .catch(err => {
//         console.log('err:')
//         console.log(err)
//     })