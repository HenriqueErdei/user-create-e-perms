import { UserRepositoriesProps } from "../Repositories/UserRepositoriesProps";

export class ListUserUserCase {
    constructor(private userRepositoriesProps: UserRepositoriesProps) {}

    execute() {
        const lista = this.userRepositoriesProps.list();
        return lista;
    }
}