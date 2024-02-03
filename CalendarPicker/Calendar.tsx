import {useEffect, useState} from 'react';
import {View} from 'react-native';
import {
  GetCurrentMonthIndex,
  GetCurrentYear,
  ParseReturn,
} from './functions/functions';
import {CalendarProps} from './constants/interfaces';
import styles from './constants/styles';
import MonthsBlock from './components/MonthsBlock';
import WeekDaysTable from './components/WeekDaysTable';
import DatesTable from './components/DatesTable';
import ButtonsBlock from './components/ButtonsBlock';

export default function Calendar(props: CalendarProps) {
  const [year, setYear] = useState<number>(GetCurrentYear());
  const [monthIndex, setMonthIndex] = useState<number>(GetCurrentMonthIndex());
  const [chosenDate, setChosenDate] = useState<any>(); // range false
  const [chosenRangeFrom, setChosenRangeFrom] = useState<any>(); // range true
  const [chosenRangeTo, setChosenRangeTo] = useState<any>(); // range true

  useEffect(() => {
    if (chosenDate && props.onSetDate) {
      props.onSetDate(ParseReturn(chosenDate, props.returnValueType));
    }
  }, [chosenDate]);

  useEffect(() => {
    if (chosenRangeFrom && props.onSetDate) {
      props.onSetDate(ParseReturn(chosenRangeFrom, props.returnValueType));
    }
  }, [chosenRangeFrom]);

  useEffect(() => {
    if (chosenRangeTo && props.onSetDate) {
      props.onSetDate(ParseReturn(chosenRangeTo, props.returnValueType));
    }
  }, [chosenRangeTo]);

  useEffect(() => {
    if (chosenRangeFrom && chosenRangeTo && props.onSetRange) {
      props.onSetRange([
        ParseReturn(chosenRangeFrom, props.returnValueType),
        ParseReturn(chosenRangeTo, props.returnValueType),
      ]);
    }
  }, [chosenRangeFrom, chosenRangeTo]);

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
        dateInChosenStyles={props.dateInChosenStyles}
        colors={props.colors}
        chosenDate={chosenDate}
        setChosenDate={(value: any) => setChosenDate(value)}
        setYear={(value: number) => setYear(value)}
        setMonthIndex={(value: number) => setMonthIndex(value)}
        range={props.range}
        chosenRangeFrom={chosenRangeFrom}
        setChosenRangeFrom={(value: any) => setChosenRangeFrom(value)}
        chosenRangeTo={chosenRangeTo}
        setChosenRangeTo={(value: any) => setChosenRangeTo(value)}
      />
      <ButtonsBlock
        cancelButtonStyles={props.cancelButtonStyles}
        confirmButtonStyles={props.confirmButtonStyles}
        cancelButtonTitle={props.cancelButtonTitle}
        confirmButtonTitle={props.confirmButtonTitle}
        onCancel={() => {
          if (props.onCancel) {
            props.onCancel();
          }
        }}
        onConfirm={() => {
          if (props.range) {
            if (chosenRangeFrom && chosenRangeTo && props.onSetRange) {
              props.onSetRange([
                ParseReturn(chosenRangeFrom, props.returnValueType),
                ParseReturn(chosenRangeTo, props.returnValueType),
              ]);
            }
          } else {
            if (props.onConfirm && chosenDate) {
              props.onConfirm(ParseReturn(chosenDate, props.returnValueType));
            }
          }
        }}
      />
    </View>
  );
}
