# Calendar Picker

Bare React Native calendar picker

### Example of components with default properties

![example](./screenshots/example1.jpg)

```tsx
import Calendar from './CalendarPicker/Calendar';

<Calendar />;
```

### Usage

Requires `@react-native-masked-view/masked-view` and `react-native-linear-gradient`

```
npm i @react-native-masked-view/masked-view
npm i react-native-linear-gradient
```

Can be used in Expo project with `@react-native-masked-view/masked-view` and `expo-linear-gradient`

Copy ./CalendarPicker directory and prepare it for usage

```
npm i @react-native-masked-view/masked-view
npm i expo-linear-gradient
```

and replace library in `./components/GradientText.tsx` and `./components/RenderDayItem.tsx`

```
- import LinearGradient from 'react-native-linear-gradient';

+ import LinearGradient from 'expo-linear-gradient';
```

### Properties

| Property            | Type                 | Description                                                                                                                                                   |
| ------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| initialDate         | Object               | Initially selected date. new Date() type                                                                                                                      |
| initialRange        | Object[]             | Initially selected range. new Date() type                                                                                                                     |
| range               | boolean              | Calendar will work for range between two dates                                                                                                                |
| containerStyles     | Object               | Styles that will be propagated to the container of the calendar                                                                                               |
| dateInMonthStyles   | Object               | Styles that will be propagated to the dates title which is in current month calendar                                                                          |
| dateOutOfMontStyles | Object               | Styles that will be propagated to the dates title which is previous or next current month calendar                                                            |
| dateInChosenStyles  | Object               | Styles that will be propagated to the date user choose                                                                                                        |
| weekDayStyles       | Object               | Styles that will be propagated to the week days titles                                                                                                        |
| currentMonthStyles  | Object               | Styles that will be propagated to the current month title                                                                                                     |
| otherMonthsStyles   | Object               | Styles that will be propagated to the previous or next month title                                                                                            |
| colors              | Array                | Colors that will appear to the chosen date as gradient apear                                                                                                  |
| returnValueType     | string               | Formate of date. Default is DD-MM-YYYY                                                                                                                        |
| weekDaysArr         | Array                | Array of week days title. Starts with monday. Default is ['M', 'T', 'W', 'T', 'F', 'S', 'S']                                                                  |
| monthsArr           | Array                | Array of months title. Default is ['January', 'February', 'March', 'April',' May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',] |
| onSetDate           | function => string   | Function after every time user choose date, returns date                                                                                                      |
| onSetRange          | function => string[] | Function after user selects both dates for range                                                                                                              |
| onCancel            | function => ()       | Function after cancel, return nothing                                                                                                                         |
| onConfirm           | function => string   | Function after confirm, returns date                                                                                                                          |
| cancelButtonStyles  | Object               | Styles that will be propagated to the cancel button                                                                                                           |
| confirmButtonStyles | Object               | Styles that will be propagated to the confirm button                                                                                                          |
| cancelButtonTitle   | string               | Title that will be propagated to the cancel button                                                                                                            |
| confirmButtonTitle  | string               | Title that will be propagated to the confirm button                                                                                                           |

### Example of range input

![example](./screenshots/example3.jpg)

```tsx
<Calendar
  onSetRange={(value: any) => {
    console.log('range', value);
  }}
  range={true}
/>
```

### Initial values

Use only `new Date()` format

Initially selected date

```tsx
<Calendar
  onSetDate={(value: any) => {
    console.log('set date', value);
  }}
  initialDate={new Date('2024-02-02')}
/>
```

Initially selected range of dates

```tsx
<Calendar
  onSetRange={(value: any) => {
    console.log('range', value);
  }}
  range={true}
  initialRange={[new Date('2024-02-02'), new Date('2024-02-08')]}
/>
```

### Example of using all styles properties

![example](./screenshots/example2.jpg)

```tsx
<Calendar
  containerStyles={{backgroundColor: '#000', borderRadius: 5}}
  currentMonthStyles={{color: '#FFF'}}
  otherMonthsStyles={{color: '#EEE'}}
  monthsArr={[
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ]}
  weekDayStyles={{fontWeight: '200', color: '#EEE'}}
  weekDaysArr={['Mon', 'Tue', 'Weds', 'Thu', 'Fri', 'Sat', 'Sun']}
  colors={['#2d6e3e', '#6fde8d']}
  dateInMonthStyles={{fontWeight: '500', color: '#FFFFFF'}}
  dateOutOfMontStyles={{fontWeight: '200', color: '#FFFFFF'}}
  dateInChosenStyles={{color: '#000000'}}
  returnValueType="MM/DD/YYYY"
  onSetDate={(value: any) => {
    console.log('set', value);
  }}
  onCancel={() => {
    console.log('Cancel');
  }}
  onConfirm={(value: any) => {
    console.log('onConfirm', value);
  }}
  cancelButtonStyles={{color: '#FF9999'}}
  confirmButtonStyles={{color: '#6fde8d'}}
  cancelButtonTitle="Скасувати"
  confirmButtonTitle="Підтвердити"
/>
```
