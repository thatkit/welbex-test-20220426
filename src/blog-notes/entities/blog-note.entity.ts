import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Media } from '../../media/entities/media.entity';

@Entity()
export class BlogNote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string; // # Date type

  @Column()
  message: string;

  @OneToMany(() => Media, (media) => media.blogNote)
  media: Media[];

  @Column()
  author: string;
}
