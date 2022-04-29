export class CreateBlogNoteDto {
  id: number;
  date: string; // # Date type
  message: string; // # Blob type for images and videos
  userId: number;
}
