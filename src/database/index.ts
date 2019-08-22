import sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

class Database {
  public connection;
  constructor() {
    this.init();
  }

  init(): void {
    //@ts-ignore
    this.connection = new sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
