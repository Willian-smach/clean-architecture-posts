import { uuid } from "uuidv4";
import DataUserAdapter from "../../adapter/DataUserAdapter";
import User from "../../core/entities/User";
import UserRepository from "../../core/repository/UserRepository";

export default class UserRepositoryMemory implements UserRepository {

    users: any[] = [];

    async create(user: User): Promise<boolean>{
        const data = await {
            id: user.id,
            name: user.name,
            email: user.email
        }
        this.users.push(data);

        return !!data;
    }
    async find(id: string): Promise<User> {
        const userData = await this.users.find(user => user.id === id);
        const user = DataUserAdapter.create(userData.id, userData.name, userData.email);
        if(user) {
            return Promise.resolve(user);
        }
        throw new Error("User not found!");
    }
    
}