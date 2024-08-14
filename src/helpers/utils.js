import moment from "moment"

let debounceTimeout;
export const debounce = (func, time) =>
  new Promise((resolve) => {
    if (debounceTimeout) clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(async () => {
      resolve(await func());
    }, time);
  });

export const  DatetimeFormater = (date) => moment(date).format("DD MMMM YYYY, hh:mm A")