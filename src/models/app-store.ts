import { Post } from './post';

export interface AppStore {
    posts: Post[];
    landingPosts: Post[];
}