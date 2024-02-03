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
        // containerStyles={{backgroundColor: '#FF99FF', borderRadius: 5}} // OK
        // currentMonthStyles={{color: '#FF0000'}} // OK
        // otherMonthsStyles={{color: '#FF0000'}} // OK
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
        // ]} // OK
        // weekDayStyles={{fontWeight: '900', color: '#66226660'}} // OK
        // weekDaysArr={['Mn', 'Tu', 'Wn', 'Th', 'Fr', 'St', 'Sn']} // OK
        // colors={['#fff', '#00ff00']} // OK
        // dateInMonthStyles={{fontWeight: '900', color: '#000'}} // OK
        // dateOutOfMontStyles={{fontWeight: '100', color: '#666'}} // OK
        returnValueType="DD-MM-YYYY"
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
