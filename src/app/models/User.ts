import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

interface UserInterface {
  name: string;
  email: string;
  password_hash: string;
  provider: boolean;
}
class User extends Model {
  id: string;
  name: string;
  email: string;
  password: string;
  password_hash: string;
  provider: boolean;
  static init(sequelize): typeof User {
    //@ts-ignore
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async (user: User) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
