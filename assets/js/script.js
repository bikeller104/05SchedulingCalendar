//get the first element with the class container
/*
*  TODO maybe make this a main element instead of div
*  so i can select it easier???
*/
var timeContainer = $(".container")[0];

// var timeBody =$("body").children()[1];
// console.log(timeBody);
//get the current date element and add
//the dayjs current date to it formatted correctly
var curDay = $("#currentDay");
//curDay.text("date goes here");
curDay.text(getCurrentDate());

var today = dayjs().format("DD/MM/YYYY");
console.log(today);
for(let i = 9; i < 24; ++i)
{
        let time = dayjs().hour(i);
        console.log(`${i}: ${time} `);
        let timefrom = time.fromNow();
        console.log(timefrom);
        if(timefrom.includes('sec')) console.log("current time is now")
        if(timefrom.includes('ago') ) console.log("time has past");
        if(timefrom.includes('in')) console.log('time has yet to come');
}
    createTimeSlotEl('9 am').appendTo(timeContainer);
    //timeContainer.on('click', handleSaveClick);
    
//this must go after adding all the elements to the time container

//console.log(timeContainer);


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
    //console.log($`todays date is {todaysDate}`);
    return todaysDate;
}

function createTimeSlotEl(time)
{
    var el = $('<p>');
    el.text(time);
    el.addClass("hour");
    console.log(el);

    var textArea = $("<textarea>");

    var saveButton = $("<p>");
    //saveButton.addClass(saveBtn);
    saveButton.text("save")

    var container = $("<div>");
    container.addClass("row");
    container.addClass("present");


    container.append(el);
    container.append(textArea);
    container.append(saveButton);
       
    return container;
    //return el;
    // var timeSlot = $('div');
    // timeSlot.addClass("row");
    // var hour = $('p').text = time;
    // //using text area instead of input allows
    // //it to use the built in style for text area
    // var textInput = $('textarea');

    // var saveButton = ('div');
    // saveButton.text('Save');

}