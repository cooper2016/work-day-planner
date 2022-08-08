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
        
        //check to see if the time is before current time
        if(id < currentTime){
           //set text area class to past
            textAreaEl[i].classList.add('past');
        //check to see if the time is equal to the current hour
        }else if(id === currentTime){
            //set text area class to present
            textAreaEl[i].classList.add('present');
        }else {
            //Set all others to future
            textAreaEl[i].classList.add('future');
        }

    }

}

//select save time block to save event in locale storage
function save(event){  
    event.preventdefault();

    //get contents from text area 

    //save to local storage using id as key







}

//have saved events banner come down





init();

setInterval(findIfPPF,60000);

