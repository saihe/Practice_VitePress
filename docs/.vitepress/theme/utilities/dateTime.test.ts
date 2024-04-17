import { describe, expect, test } from 'vitest';
import { decimalToTimeString, getDayOfWeek, timeToDecimal } from './dateTime';

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
