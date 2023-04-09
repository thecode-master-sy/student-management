import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill';

export function checkEmpty(value: string) {
  if (value === "") {
    return false;
  } else {
    return true;
  }
}

export function validate(value: string, rule: RegExp) {
  if (rule.test(value)) {
    return true;
  }

  return false;
}

export function protect(string: string) {
  const specialChars: any = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;",
    "`": "&#x60;",
    "=": "&#x3D;",
  };

  return string.replace(/[&<>"'`=\/]/g, function (char) {
    return specialChars[char];
  });
}

export function isActiveLink(href: string, currentPathname: string): boolean {
  if (href === '/') {
      return href === currentPathname
  }

  return currentPathname.startsWith(href)
}

export function getMonth(monthIsoFormat:number){
  const monthArray = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  
  let monthInWords;

  monthArray.forEach((month, index) => {
    if(monthIsoFormat === index + 1){
      monthInWords = month;
    }
  })

  return monthInWords;
}

export function getWeekDay(dayIsoFormat:number) {
  switch(dayIsoFormat){
    case 1: {
      return "Monday";
      break;
    }

    case 2: {
      return "Tuesday";
      break;
    }

    case 3: {
      return "Wednesday";
      break;
    }

    case 4: {
      return "Thursday";
      break;
    }

    case 5: {
      return "Friday";
      break;
    }

    case 6: {
      return "Saturday";
      break;
    }

    case 7: {
      return "Sunday";
      break;
    }

    default: {
      return "no such day";
    }
  }
}

export function getDay(isoFormat:any){
  const day = Temporal.PlainDate.from(isoFormat);

  const date = day.day;

  const weekDay = getWeekDay(day.dayOfWeek);

  const month = getMonth(day.month);

  
  return {
    date: date,
    weekDay: weekDay,
    month: month
  }
}

export function getTimeTableDays(Temporal: any, options?:any){
  const today = Temporal.Now.plainDateISO();

  const monday = getMonday(today);

  const TimeTableArray = [getDay(monday)];

  for(let i = 1; i <= 8; i++){
    const day = getDay(monday.add({days: i}));

    if(!(day.weekDay == 'Sunday' || day.weekDay == 'Saturday')){
      TimeTableArray.push(day);
    }
 
  }

  return TimeTableArray;
}

export  function getMonday(currentDay:any){
    const Monday = Temporal.PlainDate.from(currentDay.add({days: -currentDay.dayOfWeek + 1}))

    return Monday;
}

export function percentToDeg(value:number, [min, max]:[min?:number, max?:number]) {
  const minValue = min ? min : 0;

  console.log("min:"+ minValue)

  let maxValue = 360;
  

  if(max) {
    if(max <= 360) {
      maxValue = max
    }
  }
  
  let degree = (value * (maxValue/100)) + minValue;


  return degree;

}

export function percentToRad(value:number){
  const min = radToDeg(-(Math.PI * 3/4));
  const max = radToDeg(2 * (Math.PI * 3/4));

  const deg = percentToDeg(value, [min, max]);

  const rad = degToRad(deg);

  return rad;
}

export function radToDeg(value:number) {
    const deg = (value * 180)/Math.PI;

    return deg
}

export function degToRad(value: number) {
    const rad = value * (Math.PI/180);

    return rad;
}