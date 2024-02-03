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
        onSetDate={(value: any) => {
          console.log('set', value);
        }}
        onCancel={() => {
          console.log('Cancel');
        }}
        onConfirm={(value: any) => {
          console.log('onConfirm', value);
        }}
        onSetRange={(value: any) => {
          console.log('range', value);
        }}
        range={true}
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
