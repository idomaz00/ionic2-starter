import { Post } from './post';
import { Album } from './album';

export interface AppStore {
    loading: boolean;
    posts: Post[];
    landingPosts: Post[];
    albums: Album[];
}