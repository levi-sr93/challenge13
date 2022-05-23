import express from "express";
import routes from "./routes";
import 'express-async-errors';
import { Errors } from "./App/middlewares/Errors";
import { proxyLogger } from "./App/middlewares/proxyLogger";
import { changeBodyData } from "./App/middlewares/changeBodyData";

class App {
  constructor(){
    this.server = express();
    this.middleware();
    this.routes();
  }

  middleware(){
    this.server.use(express.json());
    this.server.use(proxyLogger);
    this.server.use(changeBodyData);
    this.server.use(Errors);
  }

  routes(){
    this.server.use(routes);
  }
}

export default new App().server;