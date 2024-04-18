<script setup>
import { timeToDecimal, decimalToTimeString } from '../utilities/dateTime';

const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土']

const workCategories = [
  {code: 0, displayText: ''},
  {code: 1, displayText: '振出'},
  {code: 2, displayText: '法定休出'},
  {code: 3, displayText: '所定休出'},
  {code: 4, displayText: '有休'},
  {code: 5, displayText: '特休'},
  {code: 6, displayText: '振休'},
  {code: 7, displayText: '代休'},
  {code: 8, displayText: '欠勤'},
  {code: 9, displayText: '遅・早'},
  {code: 10, displayText: 'シフト'},
  {code: 11, displayText: '半休'},
]

const attendances = [
  {
    attendanceDate: '2024-02-01',
    workCategory: '',
    workStartedAt: '',
    workFinishedAt: '',
    restStartedAt: '',
    restFinishedAt: '',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-02',
    workCategory: '',
    workStartedAt: '',
    workFinishedAt: '',
    restStartedAt: '',
    restFinishedAt: '',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-03',
    workCategory: '1',
    workStartedAt: '08:00:00',
    workFinishedAt: '17:00:00',
    restStartedAt: '12:00:00:00',
    restFinishedAt: '13:00:00',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-04',
    workCategory: '',
    workStartedAt: '',
    workFinishedAt: '',
    restStartedAt: '',
    restFinishedAt: '',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-05',
    workCategory: '',
    workStartedAt: '',
    workFinishedAt: '',
    restStartedAt: '',
    restFinishedAt: '',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-06',
    workCategory: '',
    workStartedAt: '08:00:00',
    workFinishedAt: '17:00:00',
    restStartedAt: '12:00:00',
    restFinishedAt: '13:00:00',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-07',
    workCategory: '',
    workStartedAt: '08:00:00',
    workFinishedAt: '17:00:00',
    restStartedAt: '12:00:00',
    restFinishedAt: '13:00:00',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-08',
    workCategory: '',
    workStartedAt: '08:00:00',
    workFinishedAt: '17:00:00',
    restStartedAt: '12:00:00',
    restFinishedAt: '13:00:00',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-09',
    workCategory: '',
    workStartedAt: '08:00:00',
    workFinishedAt: '17:00:00',
    restStartedAt: '12:00:00',
    restFinishedAt: '13:00:00',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-10',
    workCategory: '',
    workStartedAt: '',
    workFinishedAt: '',
    restStartedAt: '',
    restFinishedAt: '',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-11',
    workCategory: '',
    workStartedAt: '',
    workFinishedAt: '',
    restStartedAt: '',
    restFinishedAt: '',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-12',
    workCategory: '',
    workStartedAt: '08:00:00',
    workFinishedAt: '17:00:00',
    restStartedAt: '12:00:00',
    restFinishedAt: '13:00:00',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-13',
    workCategory: '',
    workStartedAt: '08:00:00',
    workFinishedAt: '17:00:00',
    restStartedAt: '12:00:00',
    restFinishedAt: '13:00:00',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-14',
    workCategory: '',
    workStartedAt: '08:00:00',
    workFinishedAt: '17:00:00',
    restStartedAt: '12:00:00',
    restFinishedAt: '13:00:00',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-15',
    workCategory: '',
    workStartedAt: '08:00:00',
    workFinishedAt: '17:00:00',
    restStartedAt: '12:00:00',
    restFinishedAt: '13:00:00',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-16',
    workCategory: '',
    workStartedAt: '08:00:00',
    workFinishedAt: '17:00:00',
    restStartedAt: '12:00:00',
    restFinishedAt: '13:00:00',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-17',
    workCategory: '',
    workStartedAt: '',
    workFinishedAt: '',
    restStartedAt: '',
    restFinishedAt: '',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-18',
    workCategory: '',
    workStartedAt: '',
    workFinishedAt: '',
    restStartedAt: '',
    restFinishedAt: '',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-19',
    workCategory: '',
    workStartedAt: '08:00:00',
    workFinishedAt: '17:00:00',
    restStartedAt: '12:00:00',
    restFinishedAt: '13:00:00',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-20',
    workCategory: '',
    workStartedAt: '08:00:00',
    workFinishedAt: '17:00:00',
    restStartedAt: '12:00:00',
    restFinishedAt: '13:00:00',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-21',
    workCategory: '',
    workStartedAt: '08:00:00',
    workFinishedAt: '17:00:00',
    restStartedAt: '12:00:00',
    restFinishedAt: '13:00:00',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-22',
    workCategory: '',
    workStartedAt: '08:00:00',
    workFinishedAt: '17:00:00',
    restStartedAt: '12:00:00',
    restFinishedAt: '13:00:00',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-23',
    workCategory: '',
    workStartedAt: '08:00:00',
    workFinishedAt: '17:00:00',
    restStartedAt: '12:00:00',
    restFinishedAt: '13:00:00',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-24',
    workCategory: '',
    workStartedAt: '',
    workFinishedAt: '',
    restStartedAt: '',
    restFinishedAt: '',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-25',
    workCategory: '',
    workStartedAt: '',
    workFinishedAt: '',
    restStartedAt: '',
    restFinishedAt: '',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-26',
    workCategory: '',
    workStartedAt: '08:00:00',
    workFinishedAt: '17:00:00',
    restStartedAt: '12:00:00',
    restFinishedAt: '13:00:00',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-27',
    workCategory: '',
    workStartedAt: '08:00:00',
    workFinishedAt: '17:00:00',
    restStartedAt: '12:00:00',
    restFinishedAt: '13:00:00',
    workDetail: '何かしら作業'
  },
  {
    attendanceDate: '2024-02-28',
    workCategory: '',
    workStartedAt: '08:00:00',
    workFinishedAt: '17:00:00',
    restStartedAt: '12:00:00',
    restFinishedAt: '13:00:00',
    workDetail: '何かしら作業'
  },
]

const calcRestTime = (finishedAt, startedAt) => {
  if (!finishedAt || !startedAt) {
    return ""
  }
  return decimalToTimeString(timeToDecimal(finishedAt) - timeToDecimal(startedAt))
}
const calcWorkTime = (workFinishedAt, workStartedAt, restFinishedAt, restStartedAt) => {
  if (!workFinishedAt) {
    return ""
  }
  return decimalToTimeString(timeToDecimal(workFinishedAt) - timeToDecimal(workStartedAt) - (timeToDecimal(restFinishedAt) - timeToDecimal(restStartedAt)))
}

</script>

<style scoped>
</style>

<template>
  <form name="attendance" method="post">
    <table border="1">
      <tr style="background-color: cornflowerblue;">
        <th>勤務日</th>
        <th>曜日</th>
        <th>作業区分</th>
        <th>勤務開始時刻</th>
        <th>勤務終了時刻</th>
        <th>休憩開始時刻</th>
        <th>休憩終了時刻</th>
        <th>休憩時間</th>
        <th>勤務時間</th>
        <th>作業内容</th>
      </tr>
      <tr v-for="attendance in attendances" :key="attendance.attendanceDate">
        <td><input type="date" name="attendanceDate" :value="attendance.attendanceDate" /></td>
        <td>{{ dayOfWeek[new Date(attendance.attendanceDate).getDay()] }}</td>
        <td>
          <select name="workCategory" v-model="attendance.workCategory">
            <option v-for="c in workCategories" :value="c.code">{{ c.displayText }}</option>
          </select>
        </td>
        <td><input type="time" name="workStartedAt" :value="attendance.workStartedAt" /></td>
        <td><input type="time" name="workFinishedAt" :value="attendance.workFinishedAt" /></td>
        <td><input type="time" name="restStartedAt" :value="attendance.restStartedAt" /></td>
        <td><input type="time" name="restFinishedAt" :value="attendance.restFinishedAt" /></td>
        <td><input type="time" name="restTime" value="1:00:00" /></td>
        <td><input type="time" name="workTime" value="8:00:00" /></td>
        <td><input type="text" name="workDetail" vallue="[池袋] LBN作業" /></td>
      </tr>
    </table>
  </form>
</template>
