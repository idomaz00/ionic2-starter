import { Post } from './post';
import { User } from './user';
import { Comment } from './comment';
import { Album } from './album';
import { Photo } from './photo';

export interface AppStore {
    loading: boolean;
    posts: Post[];
    landingPosts: Post[];
    users: User[];
    postComments: Comment[];
    albums: Album[];
    favourites: Album[];
    photo: Photo;
}