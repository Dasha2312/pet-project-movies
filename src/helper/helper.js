import dayjs from "dayjs";

export function changeDate(date) {
  return date ?  dayjs(date).format('D MMM YYYY') : null
}

export function europDate(date) {
  return date ? dayjs(date).format('DD.MM.YYYY') : null
}

export function europDateTime(date) {
  return date ? dayjs(date).format('DD.MM.YYYY HH:MM') : null
}