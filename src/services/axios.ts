import { store } from "../app/store";
import axios from "axios";
import { openMessage } from "src/app/message-slice";
import I18n from "src/i18n/i18n";

const baseURL = "https://api.getsongbpm.com/";
const axiosInstance = axios.create({
  baseURL,
  headers: {
    accept: "application/json",
    api_key: "308741fe4dd3b994185e5538eb2211f7",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async () => {
    store.dispatch(
      openMessage({
        header: I18n.t("ERROR.TITLE"),
        content: I18n.t("ERROR.SOMETHING_WENT_WRONG"),
        confirm: I18n.t("OK"),
      })
    );
  }
);

export default axiosInstance;
