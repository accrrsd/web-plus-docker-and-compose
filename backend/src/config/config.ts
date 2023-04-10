export default () => ({
  port: parseInt(process.env.PORT) || 3000,
  jwtSecret: 'jwt_secret',

  db: {
    type: 'postgres',

    database: process.env.POSTGRES_DB || 'kupipodariday',
    username: process.env.POSTGRES_USER || 'student',
    password: process.env.POSTGRES_PASSWORD || 'student',

    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT) || 5432,

    autoLoadModels: true,
  },
});
