import { getRequest, putRequest } from "../config/apiRequests";

const baseRoute = "/admin/users";

export const fetchUsers = async (type, query) => {
  const { data } = await getRequest(`${baseRoute}/${type}/list`, {}, query);
  return data;
};

export const fetchUsersListing = async (type, query) => {
  const { data } = await getRequest(`${baseRoute}/${type}/listing`, {}, query);
  return data;
};

export const editUser = async (id, data) => {
  return await putRequest(`${baseRoute}/edit/${id}`, data);
};