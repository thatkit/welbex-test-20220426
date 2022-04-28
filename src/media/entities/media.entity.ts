import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BlogNote } from '../../blog-notes/entities/blog-note.entity';

@Entity()
export class Media {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  fileName: string;

  // @ManyToOne(() => BlogNote, (blogNote) => blogNote.media)
  // blogNote: BlogNote;
}
