import 'dotenv/config';
export declare class FilebaseCustomClient {
    readonly Bucket: string;
    Objects: any;
    DeletedObjects: any;
    createObjects(username: any, blogNoteId: any, files: any): Promise<any[]>;
    findAllObjects(username: any, blogNoteId: any): Promise<any>;
    deleteObjects(username: any, blogNoteId: any, fileNames: any): Promise<any>;
    fetchPresignedUrl(username: any, blogNoteId: any, fileName: any): Promise<{
        url: any;
    }>;
}
