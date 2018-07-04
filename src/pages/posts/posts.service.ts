import { Injectable } from '@angular/core';
import { Post } from '../../models/post.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../../constants';

@Injectable()
export class PostsService {

    constructor(public http: HttpClient) { }

    getPosts() {
        return this.http.get(API_URL)
            .pipe(
                map((posts: Array<any>) => {
                    const postArray = [];
                    posts.forEach(post => {
                        postArray.push(new Post(post));
                    });
                    return postArray;
                })
            );
    }

    getPost(id: number) {
        return this.http.get(`${API_URL}/${id}`)
            .pipe(map((post: any) => new Post(post)));
    }

    createPost(post: Post) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post(API_URL, { post }, { headers });
    }

    deletePost(id: number) {
        return this.http.delete(`${API_URL}/${id}`);
    }

    updatePost(post: Post) {
        return this.http.put(`${API_URL}/${post.id}`, post);
    }

}
