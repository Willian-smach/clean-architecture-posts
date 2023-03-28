import User from "../entities/User";
import PostRepository from "../repository/PostRepository";

export default class NewPost {
    postRepo: PostRepository

    constructor(postRepo: PostRepository) {
        this.postRepo = postRepo;
    }

    async exec(title: string, content: string, createAt: Date, updateAt: Date, author: User) {
        
    }
}