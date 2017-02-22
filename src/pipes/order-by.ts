import { Pipe } from '@angular/core';

import { Post } from '../models/post';

@Pipe({ name: 'orderById' })
export class OrderByPipe {
    static orderByComparator(a:any, b:any): number {
        if(isNaN(a) || isNaN(b)) {
            if(a.toLowerCase() < b.toLowerCase()) return -1;
            if(a.toLowerCase() > b.toLowerCase()) return 1;
        }
        else {
            if(a < b) return -1;
            if(a > b) return 1;
        }

        return 0;
    }

    transform(posts: Post[], order: string = 'asc', property: string = 'id') {
        if(!posts) { return; }

        return posts.sort(function(a: Post, b:Post) {
            let comparison = order == 'asc' 
                    ? OrderByPipe.orderByComparator(a[property], b[property])
                    : -OrderByPipe.orderByComparator(a[property], b[property]);

            return comparison;
        });

    }
}