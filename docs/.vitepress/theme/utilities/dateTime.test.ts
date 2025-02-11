import { describe, expect, test, it } from 'vitest';
import {
  dateFormatToDispay,
  yearMonthFormatToDisplay,
  timeFormatToDispay,
  decimalToTimeString,
  getDayOfWeek,
  timeToDecimal,
  setTime,
} from './dateTime';

describe('dateTime', () => {
  test('8:30:00 to 85000', () => {
    const src = '8:30:00'
    const want = 85000
    const got = timeToDecimal(src)
    expect(got).toBe(want)
  })
  test('8:45:45 to 87575', () => {
    const src = '8:45:45'
    const want = 87575
    const got = timeToDecimal(src)
    expect(got).toBe(want)
  })
})

describe('decimalToTimeString', () => {
  test('85000 to 08:30:00', () => {
    const src = 85000
    const want = '08:30:00'
    const got = decimalToTimeString(src)
    expect(got).toBe(want)
  })
  test('127575 to 12:45:45', () => {
    const src = 127575
    const want = '12:45:45'
    const got = decimalToTimeString(src)
    expect(got).toBe(want)
  })
})

describe('getDayOfWeek', () => {
  test('2024-02-04 to 月', () => {
    const src = '2024-02-04'
    const want = '月'
    const got = getDayOfWeek(src)
    expect(got).toBe(want)
  })
})

describe('dateFormatToDispay', () => {
  it('should be 2024/01/01', () => {
    const src = new Date('2024/1/1')
    const want = '2024/01/01'
    const got = dateFormatToDispay(src)
    expect(got).toBe(want)
  })
  it('should be 2024/12/31', () => {
    const src = new Date('2024-12-31')
    const want = '2024/12/31'
    const got = dateFormatToDispay(src)
    expect(got).toBe(want)
  })
})

describe('yearMonthFormatToDisplay', () => {
  it('should be 2024/01', () => {
    const src = new Date('2024/1/1')
    const want = '2024/01'
    const got = yearMonthFormatToDisplay(src)
    expect(got).toBe(want)
  })
  it('should be 2024/12', () => {
    const src = new Date('2024-12-31')
    const want = '2024/12'
    const got = yearMonthFormatToDisplay(src)
    expect(got).toBe(want)
  })
})

describe('timeFormatToDispay', () => {
  it('should be 09:00:00', () => {
    const src = new Date('2024/1/1 00:00:00 GMT')
    const want = '09:00:00'
    const got = timeFormatToDispay(src)
    expect(got).toBe(want)
  })
  it('should be 00:00:00', () => {
    const src = new Date('2024-12-31 00:00:00 GMT+9:00')
    const want = '00:00:00'
    const got = timeFormatToDispay(src)
    expect(got).toBe(want)
  })
})

describe('setTime', () => {
  it('should be set 10:00:00', () => {
    const src = new Date('2024/1/1 00:00:00 GMT')
    const want = '10:00:00'
    const got = setTime(src, want)
    expect(got.toLocaleTimeString()).toBe(want)
  })
})
