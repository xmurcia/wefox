export class Post {
    id?: number;
    title: string;
    content: string;
    createdAt?: string;
    updatedAt?: string;
    lat?: number;
    long?: number;
    image_url?: string;

    constructor(post: {
        id?: number;
        title: string;
        content: string;
        created_at?: string;
        updated_at?: string;
        lat?: number;
        long?: number;
        image_url?: string;
    }) {
        this.id = post.id;
        this.title = post.title;
        this.content = post.content;
        this.createdAt = post.created_at;
        this.updatedAt = post.updated_at;
        this.lat = post.lat;
        this.long = post.long;
        this.image_url = post.image_url;
    }
}
