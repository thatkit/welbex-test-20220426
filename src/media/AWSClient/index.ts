/* eslint-disable prettier/prettier */
import 'dotenv/config';
// import fs from 'fs';
const fs = require('fs');
const AWS = require('aws-sdk');

// # this should be used on the frontend side
const encodeBase64 = file => {
    const binData = fs.readFileSync(file);
    const base64Str = new Buffer(binData, 'base64');
    // const base64Str = Buffer.from(binData).toString('base64');
    // console.log(base64Str);
    fs.writeFileSync('text.txt', base64Str)
    return base64Str;
}
const testBuffer = encodeBase64('wow.png');

type ContentType = 'image/jpg'
    | 'image/png'
    | 'image/jpeg'
    | 'image/jpg'
    | 'image/svg'
    | 'image/gif'
    | 'video/mp4';

const s3Client = new AWS.S3({
  endpoint: 'https://s3.filebase.com',
  signatureVersion: 'v4',
});

export class FilebaseCustomClient {
    readonly Bucket: string = 'welbex-test-bucket';
    Key: string;
    ContentType: ContentType;
    Objects; // # need proper typing

    // @ create/save a new object
    async createObject(bufferedMedia) {
        await s3Client.putObject({
            Body: testBuffer,
            Bucket: 'welbex-test-bucket',
            Key: 'testimg',
            ContentType: 'image/png'
        }, (err, data) => {
            if (err) return console.log(err);
            console.log(data);
        }).promise();
    }

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

// // @ UPLOAD from backend (preferably, right from frontend)

// // runPutObject(encodeBase64('vov.mp4'))

// // # What about videos and other image formats?