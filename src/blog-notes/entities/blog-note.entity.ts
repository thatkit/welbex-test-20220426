import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Media } from '../../media/entities/media.entity';

@Entity()
export class BlogNote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string; // # Date type

  @Column()
  message: string;

  // @OneToMany(() => Media, (media) => media.blogNote)
  // media: Media[];

  @ManyToOne(() => User, (user) => user.user)
  user: User;

  @Column()
  userId: number;
}
