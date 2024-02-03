/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import Calendar from './CalendarPicker/Calendar';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Calendar
        onSetDate={(value: any) => {
          console.log('set date', value);
        }}
        initialDate={new Date('2024-02-02')}
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
