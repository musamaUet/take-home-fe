import { getRequest } from "../config/apiRequests";
import { KEYS } from "../config/keys";

const baseRoute = "/admin/users";
const guardianBaseUrl = `https://content.guardianapis.com/search?api-key=${KEYS.GUARDIAN}`;
export const fetchGuardianNews = async (query) => {
  const { response } = await getRequest(`${guardianBaseUrl}`, {}, query);
  return response;
};

// https://content.guardianapis.com/search?api-key=ad437c61-ba90-4adf-ac2c-85e0e4d24712&currentPage=1&pageSize=3&q=&from-date=2014-01-01

export const fetchUsersListing = async (type, query) => {
  const { data } = await getRequest(`${baseRoute}/${type}/listing`, {}, query);
  return data;
};