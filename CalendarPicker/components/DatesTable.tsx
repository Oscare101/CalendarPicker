import {FlatList} from 'react-native';
import {RenderDayItem} from './RenderDateItem';
import {GetDaysTable} from '../functions/functions';

export default function DatesTable(props: any) {
  return (
    <FlatList
      data={GetDaysTable(props.year, props.monthIndex)}
      renderItem={(item: any) => (
        <RenderDayItem
          item={item.item}
          monthIndex={props.monthIndex}
          year={props.year}
          dateInMonthStyles={props.dateInMonthStyles}
          dateOutOfMontStyles={props.dateOutOfMontStyles}
          colors={props.colors}
        />
      )}
      numColumns={7}
      style={{width: '100%'}}
    />
  );
}
