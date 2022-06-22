import moment from "moment";

export const checkEventPathForClass = (path: any, selector: any) => {
  for (let i = 0; i < path.length; i++) {
    if (path[i].classList && path[i].classList.contains(selector)) {
      return true;
    }
  }

  return false;
};

export const formatDate = (d: any) => {
  let day = d.getDate();
  if (day < 10) {
    day = "0" + day;
  }

  let month = d.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }

  let year = d.getFullYear();

  return day + "/" + month + "/" + year;
};

export const getPrevMonth = (
  month: number,
  year: number,
  setMonth: (m: number) => void,
  setYear: (y: number) => void
) => {
  if (month > 0 && month <= 11) {
    setMonth(month - 1);
  } else if (month <= 0) {
    setMonth(11);
    setYear(year - 1);
  }
};

export const getNextMonth = (
  month: number,
  year: number,
  setMonth: (m: number) => void,
  setYear: (y: number) => void
) => {
  if (month >= 0 && month < 11) {
    setMonth(month + 1);
  } else if (month >= 11) {
    setMonth(0);
    setYear(year + 1);
  }
};

export const getNextYear = (year: number, setYear: (y: number) => void) => {
  setYear(year + 1);
};

export const getPrevYear = (year: number, setYear: (y: number) => void) => {
  if (year > 0) {
    setYear(year - 1);
  }
};

export const getDecade = (year: number, setDecade: (d: number[]) => void) => {
  const decade = [];
  const dec = year % 10;
  const start = year - dec;
  const end = start + 10;

  for (let i = start; i < end; i++) {
    decade.push(i);
  }

  setDecade(decade);
};

export const calculateDecade = (
  start: number,
  end: number,
  setDecade: (d: number[]) => void
) => {
  const decade = [];

  for (let i = start; i <= end; i++) {
    decade.push(i);
  }
  setDecade(decade);
};

export const getPrevDecade = (
  decade: number[],
  setDecade: (d: number[]) => void
) => {
  if (decade[0] > 0) {
    calculateDecade(decade[0] - 10, decade[decade.length - 1] - 10, setDecade);
  }
};

export const getNextDecade = (
  decade: number[],
  setDecade: (d: number[]) => void
) => {
  calculateDecade(decade[0] + 10, decade[decade.length - 1] + 10, setDecade);
};

export const getDaysInMonth = (
  year: number,
  month: number,
  setDays: (d: number[]) => void
) => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(date.getDate());
    date.setDate(date.getDate() + 1);
  }
  setDays(days);
};

export const firstDayOfMonth = (
  date: Date,
  setBlanks: (b: string[]) => void
) => {
  const firstDay = moment(date).startOf("month").format("d");
  const blanks = [];
  for (let i = 0; i < Number(firstDay); i++) {
    blanks.push(" ");
  }
  setBlanks(blanks);
};
