import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BlogNote } from '../../blog-notes/entities/blog-note.entity';

@Entity()
export class Media {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: false })
  fileName: string;

  @ManyToOne((type) => BlogNote, (blogNote) => blogNote.media)
  blogNote: BlogNote;

  @Column({ nullable: false })
  blogNoteId: string;
}
