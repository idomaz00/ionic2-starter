import { Post } from './post';
import { User } from './user';
import { Comment } from './comment';

export interface AppStore {
    loading: boolean;
    posts: Post[];
    landingPosts: Post[];
    users: User[];
    postComments: Comment[];
}