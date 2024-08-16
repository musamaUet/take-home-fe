import { isEmpty } from "lodash";
import { getRequest } from "../config/apiRequests";
import { KEYS } from "../config/keys";

const guardianBaseUrl = `https://content.guardianapis.com/search?api-key=${KEYS.GUARDIAN}`;
const newsBaseUrl = `https://newsapi.org/v2/everything?apiKey=${KEYS.NEWS}`;
const nytBaseUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${KEYS.NEW_YORK}`

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

export const fetchNewYorkNews = async (query) => {
  const { response } = await getRequest(`${nytBaseUrl}`, {}, query);
  return response;
};

// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=8JyMb8fTq4D0A4G1Jq2hOEM90I53czMd&page=1&page-size=10&offset=10