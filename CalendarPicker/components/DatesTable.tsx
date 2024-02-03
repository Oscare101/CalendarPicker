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
          dateInChosenStyles={props.dateInChosenStyles}
          colors={props.colors}
          chosenDate={props.chosenDate}
          setChosenDate={(value: any) => props.setChosenDate(value)}
          setYear={(value: number) => props.setYear(value)}
          setMonthIndex={(value: number) => props.setMonthIndex(value)}
          range={props.range}
          chosenRangeFrom={props.chosenRangeFrom}
          setChosenRangeFrom={(value: any) => props.setChosenRangeFrom(value)}
          chosenRangeTo={props.chosenRangeTo}
          setChosenRangeTo={(value: any) => props.setChosenRangeTo(value)}
        />
      )}
      numColumns={7}
      style={{width: '100%'}}
    />
  );
}
