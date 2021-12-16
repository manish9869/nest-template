import getConfiguration from "../environments/environment";

/**
 * Get Host
 */


export const envPORT = () => getConfiguration().PORT;

export const envOG_VOUCHERS_DB_HOST = () => getConfiguration().OG_VOUCHERS_DB_HOST;

export const envOG_VOUCHERS_DB_PORT = () => getConfiguration().OG_VOUCHERS_DB_PORT;

export const envOG_VOUCHERS_DB_USER = () => getConfiguration().OG_VOUCHERS_DB_USER;

export const envOG_VOUCHERS_DB_PWD = () => getConfiguration().OG_VOUCHERS_DB_PWD;

export const envOG_VOUCHERS_DB_NAME = () => getConfiguration().OG_VOUCHERS_DB_NAME;

export const envOGSTACK_CONFIG = () => getConfiguration().OGSTACK_CONFIG;

export const envVOUCHER_PORTAL_URL = () => getConfiguration().VOUCHER_PORTAL_URL;

export const envVOUCHER_INVITATION_REDEMPTION_PORTAL = () => getConfiguration().VOUCHER_INVITATION_REDEMPTION_PORTAL;

export const envNOTIFICATION_SERVICE_ENDPOINT = () => getConfiguration().NOTIFICATION_SERVICE_ENDPOINT;

export const envadmin_email_id = () => getConfiguration().admin_email_id;

export const envSERVICE_SANDBOX =() => getConfiguration().SERVICE_SANDBOX;

export const envMODE = () => getConfiguration().MODE;

export const envCONFIG_LOCATION= () => getConfiguration().CONFIG_LOCATION;

export const APP_URL= () => getConfiguration().APP_URL;

export const APP_ENV= () => getConfiguration().APP_ENV;

export const APP_NAME= () => getConfiguration().APP_NAME;







