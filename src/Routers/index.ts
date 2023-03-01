import { Router } from "express";
import { UserController } from "../Controllers/UserController";
import { PermsController } from "../Controllers/PermsController";

const userController = new UserController();
const permsController = new PermsController();

const router = Router();

router.post('/user', userController.create);
router.get('/user', userController.list);
router.get('/user/:id', userController.findById);

router.post('/perms', permsController.create);
router.get('/perms', permsController.list);
router.get('/perms/:id', permsController.findById);



export { router };