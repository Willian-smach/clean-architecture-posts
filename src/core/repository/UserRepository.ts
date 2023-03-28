import User from "../entities/User";

export default interface UserRepository {
    create(id: string, name: string, email: string): Promise<boolean>;
    find(id: string) : Promise<User>;
}