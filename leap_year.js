// Years divisible by 4 are leap years,
// but years divisible by 100 are not leap years,
// but years divisible by 400 are leap years.

function isLeapYear(year) {
    // TODO
   let divisibleBy4 = year % 4;
   let divisibleBy100 = year % 100;
   let divisibleBy400 = year % 400;
   
   if (divisibleBy4 === 0) {
     if (divisibleBy100 === 0 && divisibleBy400 !== 0) return false;
     return true;
  } else {
    return false;
  }
  }
let check = isLeapYear(1600);
console.log(check)
