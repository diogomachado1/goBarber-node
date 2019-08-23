import Sequelize, { Model } from 'sequelize';
import User from './User';
import { isBefore, subHours } from 'date-fns';

class Appointment extends Model {
  user_id: number;
  provider_id: number;
  user: User;
  provider: User;
  date: Date;
  canceled_at: Date;
  static init(sequelize): typeof Appointment {
    //@ts-ignore
    super.init(
      {
        date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
        past: {
          type: Sequelize.VIRTUAL,
          get() {
            return isBefore(this.date, new Date());
          },
        },
        cancelable: {
          type: Sequelize.VIRTUAL,
          get() {
            return isBefore(new Date(), subHours(this.date, 2));
          },
        },
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
