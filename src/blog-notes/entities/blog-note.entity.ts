import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BlogNote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string; // # Date type

  @Column()
  message: string; // # Blob type for images and videos

  @Column()
  author: string;
}
