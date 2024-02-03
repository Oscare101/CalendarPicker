import {FlatList} from 'react-native';
import {RenderWeekDayItem} from './RenderWeekDayItem';
import weekDaysShort from '../constants/weekDaysShort';

export default function WeekDaysTable(props: any) {
  return (
    <FlatList
      data={props.weekDaysArr || weekDaysShort}
      renderItem={(item: any) => (
        <RenderWeekDayItem
          item={item.item}
          weekDayStyles={props.weekDayStyles}
        />
      )}
      numColumns={7}
      style={{width: '100%'}}
    />
  );
}
