import { User } from 'src/users/entities/user.entity';
export declare class BlogNote {
    id: string;
    date: string;
    title: string;
    message: string;
    user: User;
    userId: string;
}
