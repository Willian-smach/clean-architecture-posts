import User from "../core/entities/User";

export default class UserAdapter {
    static create (id: string, name: string, email: string) {
        return new User(id, name, email);
    }
}