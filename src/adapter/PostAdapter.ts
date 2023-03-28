import Post from "../core/entities/Post";
import User from "../core/entities/User";

export default class PostAdapter {
    static create (id: string, title: string, content: string, createAt: Date, updateAt: Date, author: User) {
        return new Post(id, title, content, createAt, updateAt, author);
    }
}