/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  authorName: string;

  @Column()
  password: string;
}