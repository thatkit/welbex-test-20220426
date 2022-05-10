import { MediaService } from './media.service';
export declare class MediaController {
    private readonly mediaService;
    constructor(mediaService: MediaService);
    findAllObjects(req: any, blogNoteId: any): Promise<any>;
    fetchPresignedUrl(req: any, params: any): Promise<{
        url: any;
    }>;
}
