import moment from "moment";
import inquirer from "inquirer";

// let today = moment([2025, 2, 13]);
// let birthDate = moment([2000, 7, 25]);

inquirer
  .prompt([
    {
      type: "input",
      name: "date",
      message: "what is the date of your birthday?: in YYYY MM DD",
    },
  ])
  .then((answer) => {
    let date = answer.date.split(" ");
    let bDay = moment(date.join("-", "YYYY-MM-DD"));
    let today = moment();
    let differ = moment.duration(today.diff(bDay));
    console.log(`${differ.years()} ${differ.months()} ${differ.days()}`);
  })
  .catch((err) => {
    console.log(err);
  });

// function toNumbers(list) {
//   let numbers = [];
//   for (let i = 0; i < list.length; i++) numbers.push(parseInt(list[i]));
//   return numbers;
// }
