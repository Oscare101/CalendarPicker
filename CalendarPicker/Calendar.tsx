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

  function GetDaysTable(year: number, monthIndex: number) {
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    console.log(new Date(year, monthIndex + 1, 1).getDay());

    return [1];
  }

  function RenderDay({item}: any) {
    return <Text style={{color: 'red'}}>{item}</Text>;
  }

  function DaysTable() {
    return (
      <FlatList data={GetDaysTable(year, monthIndex)} renderItem={RenderDay} />
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
