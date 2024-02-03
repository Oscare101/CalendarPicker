import {Text, View} from 'react-native';
import GradientText from './GradientText';
import styles from '../constants/styles';
import colors from '../constants/colors';
import {IsDateToday} from '../functions/functions';

export function RenderDayItem(props: any) {
  const today = IsDateToday(props.item);
  const inMonth = new Date(props.item).getMonth() === props.monthIndex;

  const gradient = (
    <GradientText
      onPress={() => {}}
      colors={
        props.colors
          ? props.colors.length > 1
            ? props.colors
            : [...props.colors, ...props.colors]
          : [colors.color1, colors.color2]
      }
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
        inMonth
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
      {today ? gradient : text}
    </View>
  );
}
