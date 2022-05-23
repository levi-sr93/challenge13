import { Router } from "express";
import ClientController from "./App/Controllers/ClientController";

const routes = new Router();

routes.post("/api/create", ClientController.create);
routes.get("/api/retrieve", ClientController.retrieve);

export default routes;