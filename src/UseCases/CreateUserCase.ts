import { ICreateUser } from "../Interfaces/ICreateUser";
import { UserRepositoriesProps } from "../Repositories/UserRepositoriesProps";

export class CreateUserUseCase {
    constructor(private userRepositoriesProps: UserRepositoriesProps) {}

    execute({ Name, Email, Password}: ICreateUser) {
        const user = this.userRepositoriesProps.create({ Name, Email, Password});
    }
}