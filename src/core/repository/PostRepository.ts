import Post from "../entities/Post";
import User from "../entities/User";

export default interface PostRepository {
    create(id:string, title: string, content: string, createdAt: Date, updateAt: Date, author: User) : Promise<boolean>;
    find(id: string) : Promise<Post>;
    //update(post: Post) : Promise<boolean>;
    //delete(post: Post) : Promise<boolean>;

    findManny(options: {authorId: string,}) : Promise<Post[]>;
}