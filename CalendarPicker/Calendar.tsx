import {useState} from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import {GetCurrentMonthIndex, GetCurrentYear} from './functions/functions';
const {width, height} = Dimensions.get('screen');

const colors = {
  black: '#000000',
  BG: '#eeeeee',
};

interface CaledarProps {
  backgroundColor?: `#${string}`;
  style?: any;
}

const weekDaysShort = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export default function Calendar(props: CaledarProps) {
  const [year, setYear] = useState<number>(GetCurrentYear());
  const [monthIndex, setMonthIndex] = useState<number>(GetCurrentMonthIndex());

  function GenerateArrForDates(date: any) {
    const firstDayOfMonth = new Date(
      `${date.getFullYear()}-${date.getMonth() + 1}-01`,
    );
    const lastDayOfMonth = new Date(
      `${date.getFullYear()}-${date.getMonth() + 2}-00`,
    );

    const datesArray: Date[] = [];
    let currentDate = firstDayOfMonth;
    while (currentDate <= lastDayOfMonth) {
      datesArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return datesArray;
  }

  function GetDaysTable(year: number, monthIndex: number) {
    const currentMonthFirstDay = new Date(`${year}-${monthIndex + 1}-01`);
    const fisrtWeekDay = currentMonthFirstDay.getDay();
    // array of days for current month
    const currentMonthArr = GenerateArrForDates(currentMonthFirstDay);
    // get previous month
    const previousMonth = currentMonthFirstDay;
    previousMonth.setDate(0);
    // array of days for previous month, only amount that will be shown
    const previousMonthArr = GenerateArrForDates(previousMonth).slice(
      -fisrtWeekDay + 1,
    );

    const nextMonthDays =
      7 * 6 - previousMonthArr.length - currentMonthArr.length;
    const nextMonthDate = new Date(currentMonthFirstDay);
    nextMonthDate.setMonth(currentMonthFirstDay.getMonth() + 1);
    const nextMonthArr = GenerateArrForDates(nextMonthDate).slice(
      0,
      nextMonthDays,
    );
    return [...previousMonthArr, ...currentMonthArr, ...nextMonthArr];
  }

  function RenderWeekDay({item}: any) {
    return (
      <View
        style={{
          width: `${100 / 7}%`,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#666'}}>{item}</Text>
      </View>
    );
  }

  function RenderDay({item}: any) {
    const today =
      new Date(item).getMonth() === new Date().getMonth() &&
      new Date(item).getFullYear() === new Date().getFullYear() &&
      new Date(item).getDate() === new Date().getDate();
    return (
      <View
        style={{
          width: `${100 / 7}%`,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: today
              ? '#FF3333'
              : new Date(item).getMonth() === monthIndex
              ? '#000000'
              : '#666',
          }}>
          {new Date(item).getDate()}
        </Text>
      </View>
    );
  }

  function WeekDaysTable() {
    return (
      <FlatList
        data={weekDaysShort}
        renderItem={RenderWeekDay}
        numColumns={7}
        style={{width: '100%'}}
      />
    );
  }

  function DaysTable() {
    return (
      <FlatList
        data={GetDaysTable(year, monthIndex)}
        renderItem={RenderDay}
        numColumns={7}
        style={{width: '100%'}}
      />
    );
  }

  return (
    <View
      style={[
        styles.calendarBlock,
        // {backgroundColor: props.backgroundColor || colors.black},
        {...props.style},
      ]}>
      <Text style={[styles.yearTitle]}>{year}</Text>
      <Text style={[styles.yearTitle]}>{monthIndex}</Text>
      <WeekDaysTable />
      <DaysTable />
    </View>
  );
}

const styles = StyleSheet.create({
  calendarBlock: {
    width: width * 0.8,
    // height: height * 0.5,
    backgroundColor: colors.BG,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.05,
  },
  yearTitle: {
    fontSize: width * 0.07,
    color: colors.black,
  },
});
