import Sequelize, { Model } from 'sequelize';

class File extends Model {
  id: string;
  name: string;
  path: string;
  static init(sequelize): typeof File {
    //@ts-ignore
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default File;
