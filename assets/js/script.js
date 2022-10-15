//make sure that the script is incorporated into the html correctly
console.log("script has been imported correctly");

//test that day.js was imported correctly
console.log(dayjs()/*.get('year')*/);
//get the first element with the class container
/*
*  TODO maybe make this a main element instead of div
*  so i can select it easier???
*/
var timeContainer = $(".container")[0];

//got the correct container
console.log(timeContainer);


var header = $(".jumbotron");
console.log(header);

//get the current date element and add
//the dayjs current date to it formatted correctly
var curDay = $("#currentDay")
//curDay.text("date goes here");
curDay.text(getCurrentDate());








/*
this function uses the dayjs() function with no parameters
to get the current data then uses the format function to
format it with the day name the month name and the 
two digit day of the month

https://day.js.org/docs/en/display/format

*/
function getCurrentDate()
{
    var todaysDate = dayjs().format('dddd MMMM DD');
    console.log($`todays date is {todaysDate}`);
    return todaysDate;
}