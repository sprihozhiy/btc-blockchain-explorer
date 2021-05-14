export function currentUTCDate() {
  const date = new Date();
  const currentDate = `${date.getUTCFullYear()}0${
    date.getUTCMonth() + 1
  }${date.getUTCDate()}`;
  return currentDate;
}

export function unixToDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const utc_timestamp = date.toLocaleString("en-US", { timeZone: "PST" });
  return utc_timestamp;
}

export function makeStringShort(str) {
  return `${str.slice(0, 10)}...`;
}
