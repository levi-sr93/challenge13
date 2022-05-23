import express from "express";
import { whiteList } from "./App/middlewares/whiteList";
import routes from "./routes";

class App {
  constructor(){
    this.server = express();
    this.middleware();
    this.routes();
  }

  middleware(){
    this.server.use(express.json());
    this.server.use(whiteList)
  }

  routes(){
    this.server.use(routes);
  }
}

export default new App().server;