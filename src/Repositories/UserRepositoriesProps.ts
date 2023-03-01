import { User } from "../Entities/User";
import { ICreateUser } from "../Interfaces/ICreateUser";

export class UserRepositoriesProps {
    private user: User [] = [];

    constructor() {
        this.user = [];
    }

    create({Name, Email, Password}: ICreateUser) {
        const user = new User();

        Object.assign(user, {
            Name,
            Email,
            Password,
        });

        this.user.push(user);
        return user;
    }

    list() {
        return this.user;
    }

    findById(id: string) {
        const idUser = this.user.filter(i => i.id == id);
            return idUser;
    }
}

