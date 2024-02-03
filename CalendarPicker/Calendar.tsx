import {useState} from 'react';
import {View} from 'react-native';
import {GetCurrentMonthIndex, GetCurrentYear} from './functions/functions';
import {CalendarProps} from './constants/interfaces';
import styles from './constants/styles';
import MonthsBlock from './components/MonthsBlock';
import WeekDaysTable from './components/WeekDaysTable';
import DatesTable from './components/DatesTable';

export default function Calendar(props: CalendarProps) {
  const [year, setYear] = useState<number>(GetCurrentYear());
  const [monthIndex, setMonthIndex] = useState<number>(GetCurrentMonthIndex());
  const [chosenDate, setChosenDate] = useState<any>();

  return (
    <View style={[styles.calendarBlock, {...props.containerStyles}]}>
      <MonthsBlock
        year={year}
        monthIndex={monthIndex}
        monthsArr={props.monthsArr}
        setYear={(value: number) => setYear(value)}
        setMonthIndex={(value: number) => setMonthIndex(value)}
        currentMonthStyles={props.currentMonthStyles}
        otherMonthsStyles={props.otherMonthsStyles}
      />
      <WeekDaysTable
        weekDayStyles={props.weekDayStyles}
        weekDaysArr={props.weekDaysArr}
      />
      <DatesTable
        year={year}
        monthIndex={monthIndex}
        dateInMonthStyles={props.dateInMonthStyles}
        dateOutOfMontStyles={props.dateOutOfMontStyles}
        colors={props.colors}
      />
    </View>
  );
}
