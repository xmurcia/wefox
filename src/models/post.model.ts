export class Post {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    lat: number;
    long: number;
    image?: string;

    constructor(post: {
        id?: number;
        title: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        lat: number;
        long: number;
        image?: string;
    }) {
        this.id = post.id;
        this.title = post.title;
        this.content = post.content;
        this.createdAt = post.createdAt;
        this.updatedAt = post.updatedAt;
        this.lat = post.lat;
        this.long = post.long;
        this.image = post.image;
    }
}
