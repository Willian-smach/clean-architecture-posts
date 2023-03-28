import { uuid } from "uuidv4";
import Post from "../../core/entities/Post";
import PostRepository from "../../core/repository/PostRepository";

export default class PostRepositoryMemory implements PostRepository {

    users: any[] = [
        {
            id: "53e40fd8-d38a-4f1d-b376-cdf6e393e1b3",
            name: "Willian",
            email: "test@test.com",
        }
    ];

    posts = [];

    async create(post: Post): Promise<boolean> {
        const data = await {
            id: uuid(),
            title: post.title,
            content: post.content,
            creatAt: post.createdAt,
            updateAt: post.updateAt,
            author: post.author
        }
        
        this.posts.push(data);
        return !!data;
    }
    async find(id: string): Promise<Post> {
        const postData = await this.posts.find(post => post.id === id);
        //const post = DataUserAdapter.create(userData.id, userData.name, userData.email);
        if(postData) {
            return Promise.resolve(postData);
        }
        throw new Error("Post not found!");
    }
    async findManny(options: { authorId: string; }): Promise<Post[]> {
        const postsData = await this.posts.find(post => post.author.id === options.authorId);
        if(postsData) {
            return Promise.resolve(postsData);
        }
    }
    
}