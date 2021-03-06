/* eslint-disable global-require */
import Logger from './middlewares/Logger';
import { server } from './config/config';
import { connection } from './config/db/standart.connection';

const app = require('./app').default;

app.listen(server.port, server.host, async () => {
  await connection.sync({ force: server.env ? true : false });
  Logger.info('Server running', { port: server.port, mode: server.env });
});
