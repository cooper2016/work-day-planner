// save reference to important DOM Elements
var timeDisplayEl = $('#currentDay');
var containerEl = $('#container');
var spanEl = $('span');
var textAreaEl = $('textarea');

//used to travese span elements
var s = 0;


function init(){
    displayDate();
    setTimeBlockContent();
    findIfPPF();
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
    }
}



//color code timeblocks based on past preset and future
function findIfPPF(){
    //get current time
    currentTime = moment().format('H');

    currentTime = Number(currentTime);

    for(var i = 0; i < textAreaEl.length; i++){
        var id =  Number(textAreaEl[i].id);

        if(id < currentTime){
            textAreaEl[i].classList.add('past');
        }else if(id = currentTime){
            textAreaEl[i].classList.add('present');
        }else {
            textAreaEl[i].classList.add('future');
        }


    }


    // textAreaEl.each(function(index){
    //     index = 0;
        







    
    // })
    
    //check to see if the time is before current time

    //set text area class to past

    //check to see if the time is equal to the current hour

    //set text area class to present

    //check to see if the time is in the future

    //set text area class to future
    
}

//select save time block to save event in locale storage

//have saved events banner come down





init();

