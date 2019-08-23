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
        url: {
          type: Sequelize.VIRTUAL,
          get(): string {
            return `${process.env.APP_URL}/files/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default File;
