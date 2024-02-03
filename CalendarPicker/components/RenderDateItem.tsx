import {Text, TouchableOpacity, View} from 'react-native';
import GradientText from './GradientText';
import styles from '../constants/styles';
import colors from '../constants/colors';
import {IsChosenDate, IsDateToday} from '../functions/functions';
import LinearGradient from 'react-native-linear-gradient';

export function RenderDayItem(props: any) {
  const today = IsDateToday(props.item);
  const inMonth = new Date(props.item).getMonth() === props.monthIndex;
  const isChosenDate =
    IsChosenDate(props.item, props.chosenDate) ||
    IsChosenDate(props.item, props.chosenRangeFrom) ||
    IsChosenDate(props.item, props.chosenRangeTo);

  const gradientColors = props.colors
    ? props.colors.length > 1
      ? props.colors
      : [...props.colors, ...props.colors]
    : [colors.color1, colors.color2];

  function OnPreviousMonth() {
    if (props.monthIndex) {
      props.setMonthIndex(props.monthIndex - 1);
    } else {
      props.setMonthIndex(11);
      props.setYear(props.year - 1);
    }
  }

  function OnNextMonth() {
    if (props.monthIndex < 11) {
      props.setMonthIndex(props.monthIndex + 1);
    } else {
      props.setMonthIndex(0);
      props.setYear(props.year + 1);
    }
  }

  function OnSetRange() {
    if (!props.chosenRangeFrom && !props.chosenRangeTo) {
      props.setChosenRangeFrom(props.item);
    } else if (props.chosenRangeFrom && !props.chosenRangeTo) {
      if (
        new Date(props.item).getTime() ===
        new Date(props.chosenRangeFrom).getTime()
      ) {
        return false;
      }
      if (
        new Date(props.chosenRangeFrom).getTime() >
        new Date(props.item).getTime()
      ) {
        props.setChosenRangeTo(props.chosenRangeFrom);

        props.setChosenRangeFrom(props.item);
      } else {
        props.setChosenRangeTo(props.item);
      }
    } else {
      props.setChosenRangeFrom(props.item);
      props.setChosenRangeTo();
    }
  }

  function OnSetDate() {
    if (props.range) {
      OnSetRange();
    } else {
      props.setChosenDate(props.item);
    }

    if (
      new Date(props.item).getMonth() === props.monthIndex - 1 ||
      (props.monthIndex === 0 && new Date(props.item).getMonth() === 11)
    ) {
      OnPreviousMonth();
    } else if (
      new Date(props.item).getMonth() === props.monthIndex + 1 ||
      (props.monthIndex === 11 && new Date(props.item).getMonth() === 0)
    ) {
      OnNextMonth();
    }
  }

  const gradient = (
    <GradientText
      onPress={OnSetDate}
      colors={gradientColors}
      style={[
        inMonth
          ? [styles.dateInMonth, props.dateInMonthStyles]
          : [styles.dateoutOfMonth, props.dateOutOfMontStyles],
      ]}>
      {new Date(props.item).getDate()}
    </GradientText>
  );

  const text = (
    <Text
      style={
        isChosenDate
          ? [styles.dateInMonth, props.dateInChosenStyles]
          : inMonth
          ? [styles.dateInMonth, props.dateInMonthStyles]
          : [styles.dateoutOfMonth, props.dateOutOfMontStyles]
      }>
      {new Date(props.item).getDate()}
    </Text>
  );

  return (
    <View
      style={{
        width: `${100 / 7}%`,
        aspectRatio: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        style={{
          height: '100%',
          aspectRatio: 1,
          borderRadius: 100,
          overflow: 'hidden',
        }}
        activeOpacity={0.8}
        onPress={OnSetDate}>
        <LinearGradient
          colors={isChosenDate ? gradientColors : ['#00000000', '#00000000']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={{
            flex: 1,
            width: '100%',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {today && !isChosenDate ? gradient : text}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
