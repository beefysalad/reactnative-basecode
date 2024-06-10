export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // getMonth() returns 0-11
  const day = date.getDate().toString().padStart(2, "0"); // getDate() returns 1-31
  return `${year}-${month}-${day}`;
};

export const formatTime = (date: Date | undefined) => {
  if (date === undefined) return;
  date = new Date(date);
  let hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  let ampm = "am";
  if (hour == 0) {
    hour = 12;
  } else if (hour > 12) {
    hour -= 12;
    ampm = "pm";
  }
  const dateString = `${String(hour).padStart(2, "0")}:${String(
    minute
  ).padStart(2, "0")}:${String(second).padStart(2, "0")} ${ampm}`;
  console.log(dateString);
  return dateString;
};
