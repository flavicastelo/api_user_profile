import Sequelize from 'sequelize';
import dotenv from "dotenv";

dotenv.config();
const password = process.env.DBPASS;

const database = new Sequelize("profile_user",
"root",
password, {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
    freezeTableName: true,
  }
});

database.authenticate()
  .then(() => {
    console.log('Banco de dados conectado com sucesso!');
  })
  .catch((error) => {
    console.error('Falha ao conectar ao banco de dados:', error);
  });

export default database;


