/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
require('dotenv').config();
const AWS = require('aws-sdk');

const s3Client = new AWS.S3({
  endpoint: 'https://s3.filebase.com',
  signatureVersion: 'v4',
});

// s3Client.listBuckets(function (err, data) {
//     if (err) {
//         console.log(err, err.stack);
//     } else {
//         const params = {
//             Body: 'Hello, world!',
//             Bucket: data['Buckets'][0]['Name'],
//             Key: 'exampleobject',
//             ContentType: 'text/plain',
//             Metadata: {
//                 metadata1: 'value1',
//                 metadata2: 'value2',
//             },
//         };
//         s3Client.putObject(params, function (err, data) {
//             if (err) {
//                 console.log(err, err.stack);
//             } else {
//                 console.log(data);
//             }
//         });
//     }
// });

// // @ findAll objects
// s3Client.listObjects({
//     Bucket: 'welbex-test-bucket',
// }, (err, data) => {
//     if (err) return console.log(err);
//     console.log(data)
// });

// @ findOne object
s3Client.getObject({
    Bucket: 'welbex-test-bucket',
    Key: 'Фото 30на40(новый).png'
}, (err, data) => {
    if (err) return console.log(err);
    console.log(data)
});

// @ get url for the media
s3Client.getSignedUrlPromise('getObject', {
    Bucket: 'welbex-test-bucket',
    Key: 'ок ок.png'
})
    .then(url => console.log(url))
    .catch(err => {
        console.log('err:')
        console.log(err)
    })

// # @ UPLOAD from backend (preferably, right from frontend)