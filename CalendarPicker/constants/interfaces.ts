interface ArryaWithLength7 {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
}

interface ArryaWithLength12 {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
}

export interface CalendarProps {
  containerStyles?: any;
  dateInMonthStyles?: any;
  dateOutOfMontStyles?: any;
  weekDayStyles?: any;
  currentMonthStyles?: any;
  otherMonthsStyles?: any;
  colors?: string[];
  returnValueType?:
    | 'YYYY-MM-DD'
    | 'YYYY-DD-MM'
    | 'DD-MM-YYYY'
    | 'MM-DD-YYYY'
    | 'YYYY/MM/DD'
    | 'YYYY/DD/MM'
    | 'DD/MM/YYYY'
    | 'MM/DD/YYYY';
  weekDaysArr?: ArryaWithLength7;
  monthsArr?: ArryaWithLength12;
}
