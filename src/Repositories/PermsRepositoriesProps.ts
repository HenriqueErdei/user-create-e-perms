import { Perms } from "../Entities/Perms";
import { ICreatePerms } from "../Interfaces/ICreatePerms";

export class PermsRepositoriesProps {
    private perms: Perms [] = [];

    constructor() {
        this.perms = [];

    }

    create({name, user_id, rank}: ICreatePerms) {
        const perms = new Perms();

        Object.assign(perms, {
            name,
            user_id,
            rank,
        });

        this.perms.push(perms);
        return perms;
    }

    list() {
        return this.perms;
    }

    findById(id:string) {
        const idPerms = this.perms.filter(i => i.id == id);
        return idPerms;
    }
}