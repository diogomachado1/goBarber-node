import sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';

import databaseConfig from '../config/database';

const models = [User, File];

class Database {
  public connection;
  constructor() {
    this.init();
  }

  init(): void {
    //@ts-ignore
    this.connection = new sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      //@ts-ignore
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
