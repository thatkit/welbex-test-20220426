/* eslint-disable prettier/prettier */
import 'dotenv/config';
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
    async createObject(file) {
        console.log('fbClient:', file)
        const response = await s3Client.putObject({
            Body: file.buffer,
            Bucket: 'welbex-test-bucket',
            Key: file.originalname, // # need a modified version
            ContentType: file.mimetype
        }, (err, data) => {
            if (err) return console.log(err);
            console.log('fbResponse:', data);
        }).promise();

        return response;
    }

    // # findAllRelatedObjects IN find(:id) Postgres
    // @ access: PUBLIC
    async findAllRelatedObjects() {}
    
    // # deleteObjects IN update(:id) Postgres
    // @ access: PUBLIC
    async deleteObjects() {}
    
    // @ findAll objects
    // @ access: ADMIN // # only for dev purposes
    async findAllObjects() {
        await s3Client.listObjects({
            Bucket: this.Bucket,
        }, (err, objects) => {
            if (err) return console.log(err);
            this.Objects = objects.Contents;
        }).promise();
        console.log(this.Objects[0])
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