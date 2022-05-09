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
  async createObjects(username, blogNoteId, files) {
    return await Promise.all(
      files.map((file) => {
        return s3Client
          .putObject(
            {
              Body: file.buffer,
              Bucket: this.Bucket,
              Key: `${username}/${blogNoteId}/${file.originalname}`,
              ContentType: file.mimetype,
            },
            (err, objects) => {
              if (err) return console.log(err);
              // console.log('fbResponse:', data);
              return objects;
            },
          )
          .promise();
      }),
    );
  }

  // # @ findAll objects IN findOne(:blogNoteId) Postgres
  // @ access: PRIVATE
  async findAllObjects(username, blogNoteId) {
    await s3Client
      .listObjects(
        {
          Bucket: this.Bucket,
          Prefix: `${username}/${blogNoteId}/`,
        },
        (err, objects) => {
          if (err) return console.log(err);
          this.Objects = objects.Contents;
        },
      )
      .promise();
    return this.Objects;
  }

  // @ deleteObjects IN update(:blogNoteId) or delete(:blogNoteId) Postgres
  // @ access: PRIVATE
  async deleteObjects(username, blogNoteId, fileNames) {
    const Keys = fileNames.map((fileName) => ({
      Key: `${username}/${blogNoteId}/${fileName}`,
    }));
    return await s3Client
      .deleteObjects(
        {
          Bucket: this.Bucket,
          Delete: { Objects: Keys, Quiet: false },
        },
        (err, objects) => {
          if (err) return console.log(err);
        },
      )
      .promise();
  }

  // # @ fetch presigned URLs IN findOne(:blogNoteId) Postgres
  // @ access: PRIVATE
  async fetchPresignedUrl(username, blogNoteId, fileName) {
    const response = await s3Client.getSignedUrlPromise('getObject', {
      Bucket: this.Bucket,
      Key: `${username}/${blogNoteId}/${fileName}`,
    });

    return { url: response };
  }
}

// # need to transform response === omit iwber info
