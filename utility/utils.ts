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

export function getTimeTableDays(Temporal: any){
  const today = Temporal.Now.plainDateISO();

  switch(today.dayOfWeek){
    case 1: {
      return [
        {...getDay(today), current: true},
        getDay(today.add({days: 1})),
        getDay(today.add({days: 2})),
        getDay(today.add({days: 3})),
        getDay(today.add({days: 4}))
      ];
      break;
    }

    case 2: {
      return [
        getDay(today.subtract({days: 1})),
        {...getDay(today), current: true},
        getDay(today.add({days: 1})),
        getDay(today.add({days: 2})),
        getDay(today.add({days: 3}))
      ];
      break;
    }

    case 3: {
      return [
        getDay(today.subtract({days: 2})),
        getDay(today.subtract({days: 1})),
        {...getDay(today), current: true},
        getDay(today.add({days: 1})),
        getDay(today.add({days: 2}))
      ];
      break;
    }

    case 4: {
      return [
        getDay(today.subtract({days: 3})),
        getDay(today.subtract({days: 2})),
        getDay(today.subtract({days: 1})),
        {...getDay(today), current: true},
        getDay(today.add({days: 1}))
      ];
      break;
    }

    case 5: {
      return [
        getDay(today.subtract({days: 4})),
        getDay(today.subtract({days: 3})),
        getDay(today.subtract({days: 2})),
        getDay(today.subtract({days: 1})),
        {...getDay(today), current: true},
      ];
      break;
    }

    case 6: {
      return [
        getDay(today.add({days: 2})),
        getDay(today.add({days: 3})),
        getDay(today.add({days: 4})),
        getDay(today.add({days: 5})),
        getDay(today.add({days: 6})),
      ];
      break;
    }

    case 7: {
      return [
        getDay(today.add({days: 1})),
        getDay(today.add({days: 2})),
        getDay(today.add({days: 3})),
        getDay(today.add({days: 4})),
        getDay(today.add({days: 5})),
      ];
      break;
    }

    default: {
      return "no such timetable";
      
    }
  }

 
}
