// save reference to important DOM Elements
var timeDisplayEl = $('#currentDay');
var containerEl = $('#container')
var spanEl = $('span')

//used to travese span elements
var s = 0;


function init(){
    displayDate();
    timeBlock();
}

//Display current date at the top of the planner
function displayDate(){
    var today = moment().format('dddd, MMMM Do YYYY');
    timeDisplayEl.text(today);
}


//array of times 

times = [
    '9 AM', 
    '10 AM',
    '11 AM', 
    '12 PM', 
    '1 PM', 
    '2 PM', 
    '3 PM', 
    '4 PM',
    '5 PM'
]

//standard business hour time blocks displayed below
//  done in html can be done in js 

function setTimeBlockContent(){
   for(var i = 0; i < times.length; i++){
       spanEl[s].textContent = times[i];
       s++;  
       console.log(spanEl)  
    }
}

function setTextAreaColor(){
    
}



//color code timeblocks based on past preset and future
function findIfPPF(){
    //get current time

    //
    
}

//Can type into time block to create an event

//select save time block to save event in locale storage

//make saved events banner come down





init();

