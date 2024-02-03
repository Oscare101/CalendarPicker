/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Calendar from './CalendarPicker/Calendar';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Calendar
      // containerStyles={{backgroundColor: '#000', borderRadius: 5}}
      // currentMonthStyles={{color: '#FFF'}}
      // otherMonthsStyles={{color: '#EEE'}}
      // monthsArr={[
      //   'Jan',
      //   'Feb',
      //   'Mar',
      //   'Apr',
      //   'May',
      //   'June',
      //   'July',
      //   'Aug',
      //   'Sept',
      //   'Oct',
      //   'Nov',
      //   'Dec',
      // ]}
      // weekDayStyles={{fontWeight: '200', color: '#EEE'}}
      // weekDaysArr={['Mon', 'Tue', 'Weds', 'Thu', 'Fri', 'Sat', 'Sun']}
      // colors={['#2d6e3e', '#6fde8d']}
      // dateInMonthStyles={{fontWeight: '500', color: '#FFFFFF'}}
      // dateOutOfMontStyles={{fontWeight: '200', color: '#FFFFFF'}}
      // dateInChosenStyles={{color: '#000000'}}
      // returnValueType="MM/DD/YYYY"
      // onSetDate={(value: any) => {
      //   console.log('set', value);
      // }}
      // onCancel={() => {
      //   console.log('Cancel');
      // }}
      // onConfirm={(value: any) => {
      //   console.log('onConfirm', value);
      // }}
      // cancelButtonStyles={{color: '#FF9999'}}
      // confirmButtonStyles={{color: '#6fde8d'}}
      // cancelButtonTitle="Скасувати"
      // confirmButtonTitle="Підтвердити"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
