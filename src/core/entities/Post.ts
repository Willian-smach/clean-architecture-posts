import User from "./User";

export default class Post {
    id: string;
    title: string = "";
    content: string = '';
    createdAt: Date = new Date();
    updateAt: Date = new Date();
    author: User | null = null;
    

    constructor(id: string, title: string, content: string, createdAt: Date, updateAt: Date, author: User) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.createdAt = createdAt;
        this.updateAt = updateAt;
        this.author = author;
    }
}