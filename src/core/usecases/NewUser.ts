import { uuid } from "uuidv4";
import User from "../entities/User";
import UserRepository from "../repository/UserRepository";

export default class NewUser {
    public userRepo: UserRepository;

    constructor(userRepo: UserRepository) { this.userRepo = userRepo; }
    
    find(id: string) {
        return this.userRepo.find(id);
    }

    async exec(name: string, email: string) {
        if(email.includes("@test.com")) {
            const user = new User(uuid(), name, email);

            return await this.userRepo.create(user);
        }
        throw Error("Please use legal email");
    }
}