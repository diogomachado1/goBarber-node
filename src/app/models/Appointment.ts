import Sequelize, { Model } from 'sequelize';
import User from './User';

class Appointment extends Model {
  user_id: number;
  date: Date;
  canceled_at: Date;
  provider: User;
  static init(sequelize): typeof Appointment {
    //@ts-ignore
    super.init(
      {
        date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models): void {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.User, { foreignKey: 'provider_id', as: 'provider' });
  }
}

export default Appointment;
