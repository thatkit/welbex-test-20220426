/* eslint-disable prettier/prettier */
import { BlogNote } from "src/blog-notes/entities/blog-note.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column({ unique: true })
  username: string;
  
  @Column({ nullable: false })
  password: string;
  
  @OneToMany(() => BlogNote, (blogNote) => blogNote.user)
  user: BlogNote[];
}