import { uuid } from "uuidv4";
import UserRepositoryMemory from "../../infra/repository/UserRepositoryMemory";
import NewUser from "./NewUser";

test("Should be create a new user", async () => {
    const userRepositoryMemory = new UserRepositoryMemory();
    const newUser = new NewUser(userRepositoryMemory);
    const aNewUser = await newUser.exec("Willian", "teste@test.com");
    expect(aNewUser).toBe(true);
});