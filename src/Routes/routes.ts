import { Router } from 'express';
import userController from '../Controller/userController';

const routes = Router();

routes.post("/user", userController.create);
routes.get("/user", userController.find);
routes.delete("/user", userController.delete);
routes.put("/user", userController.update);


export default routes;