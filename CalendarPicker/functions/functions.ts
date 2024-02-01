export function GetCurrentYear() {
  const year = new Date().getFullYear();
  return year;
}

export function GetCurrentMonthIndex() {
  const monthIndex = new Date().getMonth();
  return monthIndex;
}

export function GetDaysTable(year: number, monthIndex: number) {
  console.log(year);

  return [1];
}
