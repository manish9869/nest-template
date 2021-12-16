
import * as dotenv from 'dotenv';
dotenv.config();

dotenv.config({ path: `${__dirname}/./../../.env.${process.env.NODE_ENV}` });

const environmentConfiguration = {
  OG_VOUCHERS_DB_HOST: process.env.OG_VOUCHERS_DB_HOST,
  OG_VOUCHERS_DB_PORT: process.env.OG_VOUCHERS_DB_PORT,
  OG_VOUCHERS_DB_USER: process.env.OG_VOUCHERS_DB_USER,
  OG_VOUCHERS_DB_PWD: process.env.OG_VOUCHERS_DB_PWD,
  OG_VOUCHERS_DB_NAME: process.env.OG_VOUCHERS_DB_NAME,
  OGSTACK_CONFIG: process.env.OGSTACK_CONFIG,
  VOUCHER_PORTAL_URL: process.env.VOUCHER_PORTAL_URL,
  VOUCHER_INVITATION_REDEMPTION_PORTAL: process.env.VOUCHER_INVITATION_REDEMPTION_PORTAL,
  NOTIFICATION_SERVICE_ENDPOINT: process.env.NOTIFICATION_SERVICE_ENDPOINT,
  admin_email_id: process.env.admin_email_id,
  SERVICE_SANDBOX: process.env.SERVICE_SANDBOX,
  MODE: process.env.MODE,
  CONFIG_LOCATION: process.env.CONFIG_LOCATION,
  PORT: process.env.PORT,
  APP_URL: process.env.APP_URL,
  APP_ENV : process.env.APP_ENV,
  APP_NAME: process.env.APP_NAME,
};

export default environmentConfiguration;
