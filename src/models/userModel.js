import Sequelize from 'sequelize';
import database from '../infra/database/database.js';

const User = database.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  street: {
    type: Sequelize.STRING,
    allowNull: false
  },
  neighborhood: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  bio: {
    type: Sequelize.STRING,
    allowNull: false
  },
  photo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

(async () => {
  await User.sync();
})();

export default User;
