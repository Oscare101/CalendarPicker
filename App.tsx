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
        // containerStyles={{backgroundColor: '#FF99FF', borderRadius: 5}}
        // colors={['#fff', '#00ff00']}
        // dateInMonthStyles={{fontWeight: '900', color: '#000'}}
        // dateOutOfMontStyles={{fontWeight: '100', color: '#666'}}
        // weekDayStyles={{fontWeight: '900', color: '#66226660'}}
        returnValueType="DD-MM-YYYY"
        // weekDaysArr={['','','','','','','']}
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
