/**
 * フォーマットが時刻（時:分:秒）の文字列を10進数に変換する
 * @param time .
 * @returns .
 */
export const timeToDecimal = (time: string): number => {
  const group = /([0-9]{0,2}):([0-9]{0,2}):([0-9]{0,2})/.exec(time)
  if (!group || group?.length < 3) {
    return 0
  }
  const h = group[1]
  const m = Number(group[2]) === 0 ? "00" : `${(Number(group[2]) / 60 * 100)}`
  const s = Number(group[3]) === 0 ? "00" : `${(Number(group[3]) / 60 * 100)}`
  return Number(`${h}${m}${s}`)
}

/**
 * 10進数の数字を時刻へ変換する
 * @param decimal .
 * @returns .
 */
export const decimalToTimeString = (decimal: number): string => {
  const str = `${decimal}`
  if (str.length > 5) {
    const h = str.substring(0, 2)
    const m = Number(str.substring(2, 4)) === 0 ? "00" : `${Number(str.substring(2, 4)) * 60 / 100}`
    const s = Number(str.substring(4, 6)) === 0 ? "00" : `${Number(str.substring(4, 6)) * 60 / 100}`
    return `${h}:${m}:${s}`
  }
  const h = str.substring(0, 1)
  const m = Number(str.substring(1, 3)) === 0 ? "00" : `${Number(str.substring(1, 3)) * 60 / 100}`
  const s = Number(str.substring(3, 5)) === 0 ? "00" : `${Number(str.substring(3, 5)) * 60 / 100}`
  return `0${h}:${m}:${s}`
}

const dayOfWeek = ['月', '火', '水', '木', '金', '土', '日']
/**
 * 年月日から曜日を取得する
 * @param dateString 年月日
 * @returns 曜日
 */
export const getDayOfWeek = (dateString: string): string => {
  return dayOfWeek[new Date(dateString).getDay()]
}

/**
 * 日付をyyyy/MM/dd形式の文字列にする
 * @param value 日付
 * @returns 
 */
export const dateFormatToDispay = (value: Date): string => value.toLocaleDateString('japanese', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
})

/**
 * 日付をyyyy/MM形式の文字列にする
 * @param value 日付
 * @returns 
 */
export const yearMonthFormatToDisplay = (value: Date): string => dateFormatToDispay(value).substring(0, 7)

/**
 * 日付をHH24:mm:ss形式の文字列にする
 * @param value 日付
 * @returns 
 */
export const timeFormatToDispay = (value: Date): string => value.toLocaleTimeString('japanese', {
  hourCycle: 'h23',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
})

/**
 * 日付オブジェクトに指定された時刻を設定する
 * @param date 時刻をセットする対象の日付
 * @param timeString 変更予定の時刻
 * @returns 
 */
export const setTime = (date: Date, timeString: string): Date => {
  const splitted = timeString.split(":")
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), Number(splitted[0]), Number(splitted[1]), Number(splitted[2]))
}
