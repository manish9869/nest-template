import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';
dotenv.config();
import * as EnvHandler from '../helpers/environment.handler';

export default registerAs('app', () => ({
  name: EnvHandler.APP_NAME() || 'NestJS App',
  env: EnvHandler.APP_ENV() || 'local',
  url: EnvHandler.APP_URL() || 'localhost',
  port: +EnvHandler.envPORT() || 5000,
}));
