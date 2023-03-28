import PostAdapter from "../../adapter/PostAdapter";
import Post from "../../core/entities/Post";
import User from "../../core/entities/User";
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

    async create(id: string, title: string, content: string, createdAt: Date, updateAt: Date, author: User): Promise<boolean> {
        const data = await {
            id: id,
            title: title,
            content: content,
            creatAt: createdAt,
            updateAt: updateAt,
            author: author
        }
        
        this.posts.push(data);
        return !!data;
    }
    async find(id: string): Promise<Post> {
        const postData = await this.posts.find(post => post.id === id);
        const post = PostAdapter.create(postData.id, postData.title, postData.content, postData.creatAt, postData.update, postData.author);
        if(post) {
            return Promise.resolve(post);
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