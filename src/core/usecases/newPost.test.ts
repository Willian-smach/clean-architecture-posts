import { uuid } from "uuidv4";
import UserAdapter from "../../adapter/UserAdapter";
import PostRepositoryMemory from "../../infra/repository/PostRepositoryMemory";
import NewPost from "./NewPost";

test("Should be create a new post", async () => {
    const postRepositoryMemory = new PostRepositoryMemory();
    const newPost = new NewPost(postRepositoryMemory);
    let id = uuid();
    const user = UserAdapter.create("53e40fd8-d38a-4f1d-b376-cdf6e393e1b3", "Willian", "test@test.com");
    const post = await newPost.exec(id, "Post teste", "Isso é só um teste", new Date("2023-03-28"), new Date("2023-03-28"), user);
    console.log(await newPost.find(id));
    expect(post).toBe(true);
});