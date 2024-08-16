import { isEmpty } from "lodash";
import { getRequest } from "../config/apiRequests";
import { KEYS } from "../config/keys";

const guardianBaseUrl = `https://content.guardianapis.com/search?api-key=${KEYS.GUARDIAN}`;
const newsBaseUrl = `https://newsapi.org/v2/everything?apiKey=${KEYS.NEWS}`;

export const fetchGuardianNews = async (query) => {
  const { response } = await getRequest(`${guardianBaseUrl}`, {}, query);
  return response;
};

export const fetchNews = async (query) => {
  if(isEmpty(query.q)) {
    query.q = 'bitcoin';
  }
  const response = await getRequest(`${newsBaseUrl}`, {}, query);
  return response;
};

// https://newsapi.org/v2/everything?q=bitcoin&apiKey=4c9f4fd9f7314413870db593bba4175c&page=1&pageSize=5&from=2024-07-15&to=2024-08-19