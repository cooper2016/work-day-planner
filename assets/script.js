// save reference to important DOM Elements
var timeDisplayEl = $('#currentDay');
var containerEl = $('.container');
var spanEl = $('span');
var textAreaEl = $('textarea');
var buttonEl = $('button')

//used to travese span elements
var s = 0;


function init(){
    displayDate();
    setTimeBlockContent();
    findIfPPF();
    lookForDescription();
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

function lookForDescription(){
    for(var i = 0; i < textAreaEl.length; i++){
       
        var id =  textAreaEl[i].id;
         
        var storageId = localStorage.getItem(id);
        console.log(storageId);
        textAreaEl[i].value = storageId;
    }
}



//select save time block to save event in locale storage
function saveDescription(event){  
    var btnClicked = $(event.target);
    var prev;

    //save to local storage using id as ke
    prev = btnClicked.prev();
    localStorage.setItem(prev.attr('id'), prev.val());
}






init();
containerEl.on("click", '.saveBtn' ,saveDescription);
setInterval(findIfPPF,60000);

