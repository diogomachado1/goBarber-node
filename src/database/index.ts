import sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';

import databaseConfig from '../config/database';
import Appointment from '../app/models/Appointment';
import mongoose from 'mongoose';

const models = [User, File, Appointment];

class Database {
  public connection;
  public mongoConnection;
  constructor() {
    this.init();
    this.mongo();
  }

  init(): void {
    //@ts-ignore
    this.connection = new sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      //@ts-ignore
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo(): void {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
    });
  }
}

export default new Database();
