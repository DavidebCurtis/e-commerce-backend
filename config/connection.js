require("dotenv").config();

const Sequelize = require("sequelize");

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, null, {
      host: "localhost",
      dialect: "mysql",
      dialectOptions: {
        decimalNumbers: true,
        socketPath: "/tmp/mysql.sock",
      },
    });

module.exports = sequelize;
