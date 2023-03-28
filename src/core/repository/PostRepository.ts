import Post from "../entities/Post";

export default interface PostRepository {
    create(post: Post) : Promise<boolean>;
    find(id: string) : Promise<Post>;
    //update(post: Post) : Promise<boolean>;
    //delete(post: Post) : Promise<boolean>;

    findManny(options: {authorId: string,}) : Promise<Post[]>;
}