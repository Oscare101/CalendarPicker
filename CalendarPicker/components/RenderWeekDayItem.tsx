import {Text, View} from 'react-native';
import styles from '../constants/styles';

export function RenderWeekDayItem(props: any) {
  return (
    <View
      style={{
        width: `${100 / 7}%`,
        aspectRatio: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={[styles.weekDay, {...props.weekDayStyles}]}>
        {props.item}
      </Text>
    </View>
  );
}
