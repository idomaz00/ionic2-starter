import { Post } from './post';

export interface AppStore {
    loading: boolean;
    posts: Post[];
    landingPosts: Post[];
}