import { uuid } from "uuidv4";
import UserRepositoryMemory from "../../infra/repository/UserRepositoryMemory";
import NewUser from "./NewUser";

test("Should be create a new user", async () => {
    const userRepositoryMemory = new UserRepositoryMemory();
    const newUser = new NewUser(userRepositoryMemory);
    let id = uuid();
    const aNewUser = await newUser.exec(id, "Willian", "teste@test.com");
    console.log(await newUser.find(id));
    expect(aNewUser.res).toBe(true);
});