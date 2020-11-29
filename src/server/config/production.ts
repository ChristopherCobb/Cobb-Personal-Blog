export default {
  mysql: {
    connectionLimit: 10,
    host: process.env.DB_HOST,
    //   port: 3306,
    user: process.env.DB_USER,
    database: process.env.DB_BLOGS,
    password: process.env.DB_PASS,
  },
  auth: {
    secret: process.env.SECRET,
  },
};

