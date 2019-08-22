import express, { Application } from 'express';
import routes from './routes';

import './database';

class App {
  public server: Application;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    this.server.use(express.json());
  }

  routes(): void {
    this.server.use(routes);
  }
}

export default new App().server;
