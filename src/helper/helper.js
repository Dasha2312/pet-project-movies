import dayjs from "dayjs";

export function changeDate(date) {
  return date ?  dayjs(date).format('D MMM YYYY') : null
}