import { uuid } from "uuidv4";
import DataUserAdapter from "../../adapter/UserAdapter";
import Post from "../entities/Post";
import User from "../entities/User";
import PostRepository from "../repository/PostRepository";

export default class NewPost {
    postRepo: PostRepository

    constructor(postRepo: PostRepository) {
        this.postRepo = postRepo;
    }

    find(id: string) {
        return this.postRepo.find(id);
    }

    async exec(id: string, title: string, content: string, createdAt: Date, updateAt: Date, author: User) {
        if(!title){
            throw new Error("Title is required!!");
        }
        if(!content){
            throw new Error("Content is required!!");
        }
        if(!createdAt){
            throw new Error("CreatedAt is required!!");
        }
        if(!author){
            throw new Error("Author is required!!");
        }
        return await this.postRepo.create(id, title, content, createdAt, updateAt, author);
    }
}