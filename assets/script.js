// save reference to important DOM Elements
var timeDisplayEl = $('#currentDay');
var containerEL = $('#container')

function init(){
    displayDate();
}

//Display current date
function displayDate(){
    var today = moment().format('dddd, MMMM Do YYYY');
    timeDisplayEl.text(today);
}



init();