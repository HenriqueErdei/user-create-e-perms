import { UserRepositoriesProps } from "../Repositories/UserRepositoriesProps";

export class FindUserByUseCase {
    constructor(private userRepositoriesProps: UserRepositoriesProps) {}

    execute(id: string) {
        const user = this.userRepositoriesProps.findById(id);
        return user;
    }
}