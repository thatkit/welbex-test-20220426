"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilebaseCustomClient = void 0;
require("dotenv/config");
const AWS = require('aws-sdk');
const s3Client = new AWS.S3({
    endpoint: process.env.AWS_ENDPOINT,
    signatureVersion: 'v4',
});
class FilebaseCustomClient {
    constructor() {
        this.Bucket = process.env.AWS_BUCKET;
    }
    createObjects(username, blogNoteId, files) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Promise.all(files.map((file) => {
                return s3Client
                    .putObject({
                    Body: file.buffer,
                    Bucket: this.Bucket,
                    Key: `${username}/${blogNoteId}/${file.originalname}`,
                    ContentType: file.mimetype,
                }, (err, objects) => {
                    if (err)
                        return console.log(err);
                    return objects;
                })
                    .promise();
            }));
        });
    }
    findAllObjects(username, blogNoteId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield s3Client
                .listObjects({
                Bucket: this.Bucket,
                Prefix: `${username}/${blogNoteId}/`,
            }, (err, objects) => {
                if (err)
                    return console.log(err);
                this.Objects = objects.Contents;
            })
                .promise();
            return this.Objects;
        });
    }
    deleteObjects(username, blogNoteId, fileNames) {
        return __awaiter(this, void 0, void 0, function* () {
            const Keys = fileNames.map((fileName) => ({
                Key: `${username}/${blogNoteId}/${fileName}`,
            }));
            return yield s3Client
                .deleteObjects({
                Bucket: this.Bucket,
                Delete: { Objects: Keys, Quiet: false },
            }, (err, objects) => {
                if (err)
                    return console.log(err);
            })
                .promise();
        });
    }
    fetchPresignedUrl(username, blogNoteId, fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield s3Client.getSignedUrlPromise('getObject', {
                Bucket: this.Bucket,
                Key: `${username}/${blogNoteId}/${fileName}`,
            });
            return { url: response };
        });
    }
}
exports.FilebaseCustomClient = FilebaseCustomClient;
//# sourceMappingURL=index.js.map