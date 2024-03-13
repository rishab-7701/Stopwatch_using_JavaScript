// creating an array for storing seconds minutes and hours of a stopwatch

let [seconds,minutes,hours] = [0,0,0];
let displayTime =document.getElementById("displayTime");


// function which will work the stopwatch
//the idea is initially all hours,minutes,seconds will start from 00
// as soon as seconds reach to 60 it will increase the count of minutes by 1 and reset its value to zero
// same goes for minutes as soon as it reaches to 60 mins it will increase the value of hours by 1 and reset its value to zero

function stopwatch(){ // we need to execute this func every sec
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    
    let h = hours < 10 ? "0"+ hours :hours;
    let m = minutes < 10 ? "0"+ minutes :minutes;
    let s = seconds < 10 ? "0"+ seconds :seconds;

    displayTime.innerHTML = h + ":" + m + ":" + s;
}

// so for executing the function stopwatch we will use the javascript method known as setInterval 
// which does the same repeated task after every fixed interval in milliseconds


let timer = null; // variable to keep track of the time in stopwatch

function watchStart(){
    // this if condition checks if the timer is already running so we will clear its execution before starting our stopwatch
    if(timer!==null){
        clearInterval(timer); // stops the previous execution of the function
    }
    timer = setInterval(stopwatch,1000);
    // the above line will execute the function stopwatch after every second as 1000 milliseconds is defined
} // this function is the start the stopwatch

let start = document.querySelector('.buttons img:nth-of-type(2)');
// console.log(start.src);
// console.dir(start);

start.addEventListener('click',function()
{
    watchStart();
});

// function the stop the stop watch

function watchStop(){
    clearInterval(timer); // stops the current execution of the function
}

function watchReset(){
    clearInterval(timer);
    [seconds,minutes,hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
}

let stop = document.querySelector( '.buttons img:first-child' );

stop.addEventListener('click',function(){
     watchStop();
     saveData();
});

let reset = document.querySelector('.buttons img:last-child');

reset.addEventListener('click',function(){
    watchReset();
});

//function saveData() and showData() helps you to save and show the  data in local storage
function saveData(){
    localStorage.setItem("time",displayTime.innerHTML);
}

function showData(){
    displayTime.innerHTML=localStorage.getItem("time");
}

showData()