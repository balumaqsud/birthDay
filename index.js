const moment = require("moment");

const moment = require("moment"); //moment
// const today = moment().format("[today is: ] YYYY MM DD[th]");
// console.log(today);

let today = moment([2025, 2, 13]);
let birthDate = moment([2000, 7, 25]);

let years = today.diff(birthDate, "years");
birthDate.add(years, "years");

let months = today.diff(birthDate, "months");
birthDate.add(months, "months");

let days = today.diff(birthDate, "days");

console.log(`${years} ${months} ${days}`);
