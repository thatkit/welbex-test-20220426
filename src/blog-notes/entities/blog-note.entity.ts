import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Media } from '../../media/entities/media.entity';

@Entity()
export class BlogNote {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @UpdateDateColumn()
  date: string;

  @Column({ nullable: false, unique: true })
  title: string;

  @Column({ nullable: false })
  message: string;

  @OneToMany(() => Media, (media) => media.blogNote)
  media: Media[];

  @ManyToOne(() => User, (user) => user.user)
  user: User;

  @Column({ nullable: false })
  userId: string;
}
