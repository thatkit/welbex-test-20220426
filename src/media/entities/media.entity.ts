import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BlogNote } from '../../blog-notes/entities/blog-note.entity';

@Entity()
export class Media {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mediaAWSRef: string;

  @ManyToOne(() => BlogNote, (blogNote) => blogNote.media)
  blogNote: BlogNote;
}
