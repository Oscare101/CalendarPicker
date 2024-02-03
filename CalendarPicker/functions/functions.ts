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
  console.log('now', currentMonthFirstDay);
  const currentMonthArr = GenerateArrForDates(currentMonthFirstDay);

  // get previous month
  const previousMonth = new Date(currentMonthFirstDay);
  previousMonth.setUTCDate(0);
  // array of days for previous month, only amount that will be shown
  console.log('previous', previousMonth);
  const previousMonthArr = GenerateArrForDates(previousMonth).slice(
    -fisrtWeekDay + 1 || -7,
  );

  const nextMonthDays =
    7 * 6 - previousMonthArr.length - currentMonthArr.length;
  const nextMonthDate = new Date(currentMonthFirstDay);
  nextMonthDate.setUTCMonth(currentMonthFirstDay.getUTCMonth() + 1);
  console.log('next', nextMonthDate);
  const nextMonthArr = GenerateArrForDates(nextMonthDate).slice(
    0,
    nextMonthDays,
  );

  return [...previousMonthArr, ...currentMonthArr, ...nextMonthArr];
}
