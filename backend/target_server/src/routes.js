import { Router } from "express";
import ClientController from "./App/Controllers/ClientController";

const routes = new Router();

routes.post("/create", ClientController.create);
routes.get("/retrieve", ClientController.retrieve);

export default routes;