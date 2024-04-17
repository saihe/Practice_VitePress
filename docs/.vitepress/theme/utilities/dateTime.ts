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
export const getDayOfWeek = (dateString: string): string => {
  return dayOfWeek[new Date(dateString).getDay()]
}
