<script setup lang="ts">
import { useData } from 'vitepress'
import { timeToDecimal, decimalToTimeString } from '../../utilities/dateTime'
import DatePickerWithTextField from '../../components/DatePickerWithTextField'
import TimePickerWithTextField from '../../components/TimePickerWithTextField'

const { isDark } = useData()

const workCategories = [
  {code: '', displayText: ''},
  {code: '1', displayText: '振出'},
  {code: '2', displayText: '法定休出'},
  {code: '3', displayText: '所定休出'},
  {code: '4', displayText: '有休'},
  {code: '5', displayText: '特休'},
  {code: '6', displayText: '振休'},
  {code: '7', displayText: '代休'},
  {code: '8', displayText: '欠勤'},
  {code: '9', displayText: '遅・早'},
  {code: '10', displayText: 'シフト'},
  {code: '11', displayText: '半休'},
]

const attendances = [
  {
    attendanceDate: '2024-02-01',
    workCategory: '3',
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

const calcRestTime = (finishedAt: string, startedAt: string): string => {
  if (!finishedAt || !startedAt) {
    return ""
  }
  return decimalToTimeString(timeToDecimal(finishedAt) - timeToDecimal(startedAt))
}
const calcWorkTime = (workFinishedAt: string, workStartedAt: string, restFinishedAt: string, restStartedAt: string): string => {
  if (!workFinishedAt) {
    return ""
  }
  return decimalToTimeString(timeToDecimal(workFinishedAt) - timeToDecimal(workStartedAt) - (timeToDecimal(restFinishedAt) - timeToDecimal(restStartedAt)))
}

// reference: https://vuetifyjs.com/en/api/v-data-table/#props-headers
const tableHeaders = [
  { title: '勤務日', key: 'attendanceDate', width: '160px', },
  { title: '作業区分', key: 'workCategory', width: '155px', },
  { title: '勤務開始時刻', key: 'workStartedAt', width: '140px', },
  { title: '勤務終了時刻', key: 'workFinishedAt', width: '140px', },
  { title: '休憩時間', key: 'restTime', width: '135px', },
  { title: '勤務時間', key: 'workTime', width: '135px', },
  { title: '作業内容', key: 'workDetail', },
]

// TODO: 各種時間を変更したときに勤務時間も連動して変更されるようにする。v-text-filedにしたときに高さが大きくなってしまった
</script>

<template mt-10>
  <v-form name="attendance" method="post">
    <v-conteiner justify-left>
      <v-row class="d-flex">
        <v-col cols="2">
        <DatePickerWithTextField :initialValue="attendances[0].attendanceDate.substring(0,7)" :viewMode="'months'" />
      </v-col>
      <v-col>
        <v-btn color="primary" @click="() => {
        }">検索</v-btn>
      </v-col>
      </v-row>
    </v-conteiner>
    <v-data-table
      :headers="tableHeaders"
      :items="attendances"
      :items-per-page="-1"
      height="460px"
      density="compact"
      sticky
      :theme="isDark ? 'dark' : 'light'"
    >
      <template #bottom />
      <template #item="{ item }">
        <tr>
          <td class="pl-2 py-0"><DatePickerWithTextField hideIcon :initialValue="item.attendanceDate" /></td>
          <td class="pl-2 py-0">
            <v-select
              v-model="item.workCategory"
              class="mt-5"
              density="compact"
              :items="workCategories"
              item-value="code"
              item-title="displayText"
            />
          </td>
          <td class="pl-2 py-0"><TimePickerWithTextField hideIcon :initialValue="item.workStartedAt" /></td>
          <td class="pl-2 py-0"><TimePickerWithTextField hideIcon :initialValue="item.workFinishedAt" /></td>
          <td class="pl-2 py-0">
            <v-text-field
              class="mt-5"
              density="compact"
              :value="!item.restStartedAt ? null : calcRestTime(item.restFinishedAt, item.restStartedAt)"
            />
          </td>
          <td class="pl-2 py-0">
            <v-text-field
              class="mt-5"
              density="compact"
              :value="!item.workStartedAt ? null : calcWorkTime(item.workFinishedAt, item.workStartedAt, item.restFinishedAt, item.restStartedAt)"
            />
          </td>
          <td class="pl-2 pr-2 py-0">
            <v-textarea
              :model-value="item.workDetail"
              hide-details
              density="compact"
              rows="1"
            />
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-form>
</template>
