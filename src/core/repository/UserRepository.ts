import User from "../entities/User";

export default interface UserRepository {
    create(user: User): Promise<boolean>;
    find(id: string) : Promise<User>;
}