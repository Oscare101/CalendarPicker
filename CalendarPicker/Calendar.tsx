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
const {width, height} = Dimensions.get('screen');

export default function Calendar(props: CalendarProps) {
  const [year, setYear] = useState<number>(GetCurrentYear());
  const [monthIndex, setMonthIndex] = useState<number>(GetCurrentMonthIndex());

  function RenderWeekDay({item}: any) {
    return (
      <View
        style={{
          width: `${100 / 7}%`,
          aspectRatio: 1.5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={[{color: '#666'}, {...props.weekDayStyles}]}>{item}</Text>
      </View>
    );
  }

  function RenderDay({item}: any) {
    const today =
      new Date(item).getMonth() === new Date().getMonth() &&
      new Date(item).getFullYear() === new Date().getFullYear() &&
      new Date(item).getDate() === new Date().getDate();
    const inMonth = new Date(item).getMonth() === monthIndex;
    return (
      <View
        style={{
          width: `${100 / 7}%`,
          aspectRatio: 1.5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {today ? (
          <GradientText
            onPress={() => {}}
            colors={
              props.colors.length > 1
                ? props.colors
                : [...props.colors, ...props.colors]
            }
            style={[
              {fontWeight: '900', fontSize: width * 0.04},
              inMonth ? props.dateInMonthStyles : props.dateOutOfMontStyles,
            ]}>
            {new Date(item).getDate()}
          </GradientText>
        ) : (
          <Text
            style={[
              {
                color: inMonth ? '#000000' : '#666',
                fontSize: width * 0.04,
              },
              inMonth ? props.dateInMonthStyles : props.dateOutOfMontStyles,
              ,
            ]}>
            {new Date(item).getDate()}
          </Text>
        )}
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
        {...props.blockStyles},
      ]}>
      <View style={styles.titleBlock}>
        <TouchableOpacity
          onPress={() => {
            if (monthIndex) {
              setMonthIndex(monthIndex - 1);
            } else {
              setMonthIndex(11);
              setYear(year - 1);
            }
          }}>
          <Text style={styles.changeButton}>
            {montsNames[monthIndex - 1] || montsNames[11]}
          </Text>
        </TouchableOpacity>
        <Text style={[styles.title]}>
          {year} {montsNames[monthIndex]}
        </Text>
        <TouchableOpacity
          onPress={() => {
            if (monthIndex < 11) {
              setMonthIndex(monthIndex + 1);
            } else {
              setMonthIndex(0);
              setYear(year + 1);
            }
          }}>
          <Text style={styles.changeButton}>
            {montsNames[monthIndex + 1] || montsNames[0]}
          </Text>
        </TouchableOpacity>
      </View>

      <WeekDaysTable />
      <DaysTable />
    </View>
  );
}

const styles = StyleSheet.create({
  calendarBlock: {
    width: width * 0.9,
    backgroundColor: colors.BG,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.05,
  },
  titleBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '4%',
  },
  title: {
    fontSize: width * 0.05,
    color: colors.black,
  },
  changeButton: {
    fontWeight: '300',
    fontSize: width * 0.05,
  },
});
