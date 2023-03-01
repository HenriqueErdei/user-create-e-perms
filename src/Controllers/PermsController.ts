import { CreatePermsUserCase } from "../UseCases/CreatePermsUserCase";
import { PermsRepositoriesProps } from "../Repositories/PermsRepositoriesProps";
import { Request, Response } from "express";

const permsRepositoriesProps = new PermsRepositoriesProps();

export class PermsController {
    create(req: Request, res: Response) {
        const { name, user_id, rank} = req.body;

        const perms = permsRepositoriesProps.create({name, user_id, rank});
        return res.status(200).json(perms);
    }

    list(req: Request, res: Response) {
        const lista = permsRepositoriesProps.list();
        return res.status(200).json(lista);
    }

    findById(req: Request, res:Response) {
        const { id } = req.params;

        const perms = permsRepositoriesProps.findById(id);
        return res.status(200).json(perms);
    }
}