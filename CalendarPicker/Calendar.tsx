import {useState} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  GetCurrentMonthIndex,
  GetCurrentYear,
  GetDaysTable,
} from './functions/functions';
import GradientText from './components/GradientText';
import weekDaysShort from './constants/weekDaysShort';
import montsNames from './constants/montsNames';
import colors from './constants/colors';
import {CalendarProps} from './constants/interfaces';
import styles from './constants/styles';
import {RenderWeekDayItem} from './components/RenderWeekDayItem';
import {RenderDayItem} from './components/RenderDateItem';
import MonthsBlock from './components/MonthsBlock';
import WeekDaysTable from './components/WeekDaysTable';
import DatesTable from './components/DatesTable';
const {width, height} = Dimensions.get('screen');

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
