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
  monthButton: {
    paddingVertical: width * 0.02,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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

  //

  buttonsBlock: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: width * 0.03,
  },
  cancelButton: {
    fontSize: width * 0.05,
    color: colors.cancel,
  },
  confirmButton: {
    fontSize: width * 0.05,
    color: colors.confirm,
  },
});
