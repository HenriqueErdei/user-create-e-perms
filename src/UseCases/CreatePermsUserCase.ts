import { ICreatePerms } from "../Interfaces/ICreatePerms";
import { PermsRepositoriesProps } from "../Repositories/PermsRepositoriesProps";

export class CreatePermsUserCase {
    constructor(private permsRepositoriesProps: PermsRepositoriesProps) {}

    execute({name, user_id, rank}: ICreatePerms) {
        const perms = this.permsRepositoriesProps.create({name, user_id, rank});
    }
}