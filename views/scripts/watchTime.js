//this will be used to set the timer going for the stop watch
//uses geolocation,window

var timeBegan = null
    , timeStopped = null
    , stoppedDuration = 0
    , started = null;

function start() {
    if (timeBegan === null) {
        timeBegan = new Date();
        navigator.geolocation.getCurrentPosition()
    }

    if (timeStopped !== null) {
        stoppedDuration += (new Date() - timeStopped);
    }
    console.log(stoppedDuration);

    started = setInterval(clockRunning, 10);	
};

function stop() {
    timeStopped = new Date();
    clearInterval(started);
};
function reset() {
    clearInterval(started);
    stoppedDuration = 0;
    timeBegan = null;
    timeStopped = null;
    document.getElementById("display-area").innerHTML = "00:00:00.000";
};

function clockRunning(){
    var currentTime = new Date()
        , timeElapsed = new Date(currentTime - timeBegan - stoppedDuration)
        , hour = timeElapsed.getUTCHours()
        , min = timeElapsed.getUTCMinutes()
        , sec = timeElapsed.getUTCSeconds()
        , ms = timeElapsed.getUTCMilliseconds();

    document.getElementById("display-area").innerHTML = 
        (hour > 9 ? hour : "0" + hour) + ":" + 
        (min > 9 ? min : "0" + min) + ":" + 
        (sec > 9 ? sec : "0" + sec) + "." + 
        (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
};



/*var localStorage = window.localStorage;
var data = localStorage.getItem('watchData');
var start = undefined;
var stop  = undefined;
var timeHstory = [];

function startTime(){
    document.getElementById("timezone").innerHTML = "Wait..";
    navigator.geolocation.getCurrentPosition();
}
function stopTime(){
    document.getElementById("timezone").innerHTML = "Wait..";
    navigator.geolocation.getCurrentPosition();
}

function getData(){
}*/