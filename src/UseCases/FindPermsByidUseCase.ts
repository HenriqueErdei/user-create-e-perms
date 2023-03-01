import { PermsRepositoriesProps } from "../Repositories/PermsRepositoriesProps";

export class FindPermsByidUseCase {
    constructor(private permsRepositoriesProps: PermsRepositoriesProps) {}

    execute(id: string){
        const perms = this.permsRepositoriesProps.findById(id);
        return perms;
    }
}