import { FilebaseCustomClient } from './FilebaseCustomClient';
export declare class MediaService {
    private readonly fbClient;
    constructor(fbClient: FilebaseCustomClient);
    createObjects(username: any, blogNoteId: any, files: any): Promise<any[]>;
    findAllObjects(username: string, blogNoteId: string): Promise<any>;
    deleteObjects(username: string, blogNoteId: string, fileNames: any): Promise<any>;
    fetchPresignedUrl(username: string, blogNoteId: string, fileName: any): Promise<{
        url: any;
    }>;
}
