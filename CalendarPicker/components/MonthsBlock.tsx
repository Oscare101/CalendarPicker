import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../constants/styles';
import montsNames from '../constants/montsNames';

export default function MonthsBlock(props: any) {
  const months = props.monthsArr || montsNames;

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

  return (
    <View style={styles.titleBlock}>
      <TouchableOpacity onPress={OnPreviousMonth} style={styles.monthButton}>
        <Text style={[styles.monthChange, {...props.otherMonthsStyles}]}>
          {months[props.monthIndex - 1] || months[11]}
        </Text>
      </TouchableOpacity>
      <Text style={[styles.monthTitle, {...props.currentMonthStyles}]}>
        {props.year} {months[props.monthIndex]}
      </Text>
      <TouchableOpacity
        onPress={OnNextMonth}
        style={[styles.monthButton, {justifyContent: 'flex-end'}]}>
        <Text style={[styles.monthChange, {...props.otherMonthsStyles}]}>
          {months[props.monthIndex + 1] || months[0]}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
