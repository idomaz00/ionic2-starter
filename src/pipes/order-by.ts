import { Pipe } from '@angular/core';

import { Post } from '../models/post';

@Pipe({ name: 'orderById' })
export class OrderByIdPipe {
    transform(posts: Post[]) {
        return posts.sort(function(a: Post, b:Post) {
            if(a.id < b.id) return 1;
            if(a.id > b.id) return -1;
            return 0;
        });
    }
}