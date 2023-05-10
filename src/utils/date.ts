import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export function formatDateHour(format:string) {
    const date = dayjs().format(format) //2022-12-25
    const dateTimeFormat = new Date(date) // 2022-12-25 23:55
    return dayjs(dateTimeFormat)
  }

export function getDayOfWeek(date: string) {
    return dayjs(date).day()
  }
  
  export function formatDate(date: Date, format: string) {
    return dayjs(date).format(format)
  }
  
  export function formatDateUTC(date: Date, format: string) {
    return dayjs(date).utc().format(format)
  }
  
  export function dateToString(date: Date) {
    return dayjs(date).format('YYYY-MM-DD').toString()
  }
  
  export function toDate(date: Date) {
    return dayjs(date).toDate()
  }
  
  export function startOfDay() {
    return dayjs().utc().startOf('D').toDate()
  }
  
  export function endOfDay() {
    return dayjs().utc().endOf('D').toDate()
  }