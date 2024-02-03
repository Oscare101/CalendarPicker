import {Dimensions, StyleSheet} from 'react-native';
import colors from './colors';
const {width, height} = Dimensions.get('screen');

export default StyleSheet.create({
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
  monthTitle: {
    fontSize: width * 0.05,
    color: colors.month,
  },
  monthChange: {
    fontSize: width * 0.04,
    color: colors.monthChange,
    fontWeight: '200',
  },

  changeButton: {
    fontWeight: '300',
    fontSize: width * 0.05,
  },

  weekDay: {
    fontSize: width * 0.04,
    color: colors.weekDay,
  },

  dateInMonth: {
    color: colors.dateInOfMonth,
    fontSize: width * 0.04,
  },
  dateoutOfMonth: {
    color: colors.dateOutOfMonth,
    fontSize: width * 0.04,
  },
});
