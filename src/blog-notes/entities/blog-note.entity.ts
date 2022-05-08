import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class BlogNote {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @UpdateDateColumn()
  date: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  message: string;

  @ManyToOne(() => User, (user) => user.user)
  user: User;

  @Column({ nullable: false })
  userId: string;
}
