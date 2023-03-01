import { PermsRepositoriesProps } from "../Repositories/PermsRepositoriesProps";

export class ListUserUserCase {
    constructor(private permsRepositoriesProps: PermsRepositoriesProps) {}

    execute() {
        const lista = this.permsRepositoriesProps.list();
        return lista;
    }
}