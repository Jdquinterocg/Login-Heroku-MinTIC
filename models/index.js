const Sequelize = require('sequelize');
const UserModel = require('./users')

//'database', 'username', 'password'
const sequelize = new Sequelize('CxaYehMevF', 'CxaYehMevF', 'h6F7Snphbg', {
    host: 'remotemysql.com',
    port: '3306',
    dialect: 'mysql'
  });

  const User = UserModel(sequelize, Sequelize);

  sequelize.sync({ force: false })
    .then(()=>{
      console.log('Tablas sincronizadas')
    });

    module.exports = {
      User
    }