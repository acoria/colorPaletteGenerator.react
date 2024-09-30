import { error } from "./utils/error";

export const AppConfig = {
  MY_PAYPAL_ME_LINK:
    process.env.REACT_APP_MY_PAYPAL_ME_LINK ??
    error("Error while getting PayPalMe from environment variables"),
};
