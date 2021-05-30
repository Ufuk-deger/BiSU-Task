module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "020508",
    DB: "bisudb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };