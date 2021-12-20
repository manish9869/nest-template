import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';
dotenv.config();
import * as EnvHandler from '../helpers/environment.handler';

export default registerAs('db', () => ({
  host: EnvHandler.envOG_VOUCHERS_DB_HOST() || 'localhost',
  port: EnvHandler.envOG_VOUCHERS_DB_PORT() || 3306,
  username: EnvHandler.envOG_VOUCHERS_DB_USER() || 'root',
  password: EnvHandler.envOG_VOUCHERS_DB_PWD() || 'root',
  database: EnvHandler.envOG_VOUCHERS_DB_NAME() || 'test env'
  
}));
