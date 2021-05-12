export function currentUTCDate() {
  const date = new Date();
  const currentDate = `${date.getUTCFullYear()}0${
    date.getUTCMonth() + 1
  }${date.getUTCDate()}`;
  return currentDate;
}
