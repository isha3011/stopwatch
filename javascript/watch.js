let [seconds, minutes, hours]=[0,0,0];
let displayTime=document.getElementById("display");
let timer=null;

function stopwatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    let hr= hours<10 ? "0" + hours : hours;
    let min= minutes<10 ? "0" + minutes : minutes;
    let sec= seconds<10 ? "0" + seconds : seconds;
    displayTime.innerHTML= hr + ":" + min + ":" + sec ; 
}

function watchstart(){
    if(timer!=null){
        clearInterval(timer);
    }
    timer=setInterval(stopwatch, 1000);
}
function watchstop(){
    clearInterval(timer);
    
}
function watchrestart(){
    clearInterval(timer);
}
