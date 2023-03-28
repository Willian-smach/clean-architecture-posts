import { uuid } from "uuidv4";
import User from "../entities/User";
import UserRepository from "../repository/UserRepository";

export default class NewUser {
    public userRepo: UserRepository;

    constructor(userRepo: UserRepository) { this.userRepo = userRepo; }
    
    find(id: string) {
        return this.userRepo.find(id);
    }

    async exec(id: string, name: string, email: string) {
        if(email.includes("@test.com")) {
            const createdUser = await this.userRepo.create(id, name, email);
            return {
                res: createdUser        
            }
        }
        throw Error("Please use legal email");
    }
}