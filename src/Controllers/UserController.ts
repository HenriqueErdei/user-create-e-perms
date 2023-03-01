import { CreateUserUseCase } from "../UseCases/CreateUserCase";
import { UserRepositoriesProps } from "../Repositories/UserRepositoriesProps";
import { Request, Response } from "express";

const userRepositoriesProps = new UserRepositoriesProps();

export class UserController {
    create(req: Request, res: Response) {
        const { Name, Email, Password } = req.body;

        const user = userRepositoriesProps.create({Name, Email, Password});
        return res.status(200).json(user);
    }

    list(req: Request, res: Response) {
        const lista = userRepositoriesProps.list();
        return res.status(200).json(lista);
    }

    findById(req: Request, res: Response) {
        const { id } = req.params;

        const user = userRepositoriesProps.findById(id);
        return res.status(200).json(user);
    }
}