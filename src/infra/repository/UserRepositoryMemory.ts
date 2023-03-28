import { uuid } from "uuidv4";
import UserAdapter from "../../adapter/UserAdapter";
import User from "../../core/entities/User";
import UserRepository from "../../core/repository/UserRepository";

export default class UserRepositoryMemory implements UserRepository {

    users: any[] = [];

    async create(id: string, name: string, email: string): Promise<boolean>{
        const data = await {
            id: id,
            name: name,
            email: email
        }
        this.users.push(data);

        return !!data;
    }
    async find(id: string): Promise<User> {
        const userData = await this.users.find(user => user.id === id);
        const user = UserAdapter.create(userData.id, userData.name, userData.email);
        if(user) {
            return Promise.resolve(user);
        }
        throw new Error("User not found!");
    }
    
}