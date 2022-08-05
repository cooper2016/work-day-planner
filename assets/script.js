// save reference to important DOM Elements
var timeDisplayEl = $('#currentDay');
var containerEL = $('#container')

function init(){
    displayDate();
}

//Display current date at the top of the planner
function displayDate(){
    var today = moment().format('dddd, MMMM Do YYYY');
    timeDisplayEl.text(today);
}

//standard business hour time blocks displayed below


//color code timeblocks based on past preset and future

//Can type into time block to create an event

//select save time block to save event in locale storage

//make saved events banner come down





init();


// //array of times 

// times = [
//     '9 am', 
//     '10 am',
//     '11 am', 
//     '12 pm', 
//     '1 pm', 
//     '2 pm', 
//     '3 pm', 
//     '4 pm',
//     '5 pm'
// ]