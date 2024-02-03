export function GetCurrentYear() {
  const year = new Date().getFullYear();
  return year;
}

export function GetCurrentMonthIndex() {
  const monthIndex = new Date().getMonth();
  return monthIndex;
}

export function GenerateArrForDates(date: any) {
  const firstDayOfMonth = new Date(
    `${date.getFullYear()}-${date.getMonth() + 1}-01`,
  );
  const lastDayOfMonth = new Date(
    `${date.getFullYear()}-${date.getMonth() + 2}-00`,
  );

  const datesArray: Date[] = [];
  let currentDate = firstDayOfMonth;
  while (currentDate <= lastDayOfMonth) {
    datesArray.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return datesArray;
}

export function GetDaysTable(year: number, monthIndex: number) {
  const currentMonthFirstDay = new Date(Date.UTC(year, monthIndex, 1));
  const fisrtWeekDay = currentMonthFirstDay.getUTCDay();

  // array of days for current month
  const currentMonthArr = GenerateArrForDates(currentMonthFirstDay);

  // get previous month
  const previousMonth = new Date(currentMonthFirstDay);
  previousMonth.setUTCDate(0);
  // array of days for previous month, only amount that will be shown
  const previousMonthArr = GenerateArrForDates(previousMonth).slice(
    -(fisrtWeekDay - 1) || -7,
  );

  const nextMonthDays =
    7 * 6 - previousMonthArr.length - currentMonthArr.length;
  const nextMonthDate = new Date(currentMonthFirstDay);
  nextMonthDate.setUTCMonth(currentMonthFirstDay.getUTCMonth() + 1);
  const nextMonthArr = GenerateArrForDates(nextMonthDate).slice(
    0,
    nextMonthDays,
  );

  return [...previousMonthArr, ...currentMonthArr, ...nextMonthArr];
}

export function IsDateToday(date: any) {
  return (
    new Date(date).getMonth() === new Date().getMonth() &&
    new Date(date).getFullYear() === new Date().getFullYear() &&
    new Date(date).getDate() === new Date().getDate()
  );
}

export function IsChosenDate(date: any, chosen: any) {
  return (
    new Date(date).getMonth() === new Date(chosen).getMonth() &&
    new Date(date).getFullYear() === new Date(chosen).getFullYear() &&
    new Date(date).getDate() === new Date(chosen).getDate()
  );
}

export function ParseReturn(chosenDate: any, type: any) {
  const year = new Date(chosenDate).getFullYear();
  const month = new Date(chosenDate).getMonth() + 1;
  const date = new Date(chosenDate).getDate();

  if (type === 'YYYY-MM-DD') {
    return `${year}-${month}-${date}`;
  } else if (type === 'YYYY-DD-MM') {
    return `${year}-${date}-${month}`;
  } else if (type === 'DD-MM-YYYY') {
    return `${date}-${month}-${year}`;
  } else if (type === 'MM-DD-YYYY') {
    return `${month}-${date}-${year}`;
  } else if (type === 'YYYY/MM/DD') {
    return `${year}/${month}/${date}`;
  } else if (type === 'YYYY/DD/MM') {
    return `${year}/${date}/${month}`;
  } else if (type === 'DD/MM/YYYY') {
    return `${date}/${month}/${year}`;
  } else if (type === 'MM/DD/YYYY') {
    return `${month}/${date}/${year}`;
  } else {
    return `${date}-${month}-${year}`;
  }
}
