/**
* NOTE: Creates label element for index.ejs
*       with id named "timer" with text for
*       timer table.
*/
var lbl = document.createElement("label");               
lbl.setAttribute("Id", "timer");
var lbltxt = document.createTextNode("Timer: ");
lbl.appendChild(lbltxt);
    
var p = document.createElement("p");

/**
* NOTE: Creates button START and RESET elements 
*       for index.ejs with onclick events for 
*       start() and reset() with text for timer table.
*/
var startbtn = document.createElement("button");
startbtn.setAttribute("onclick", "start()");
startbtn.setAttribute("Id", "startbtn");
var startbtntxt = document.createTextNode(" START ");
startbtn.appendChild(startbtntxt);

var resetbtn = document.createElement("button");
resetbtn.setAttribute("onclick", "reset()");
resetbtn.setAttribute("Id", "resetbtn");
var resetbtntxt = document.createTextNode(" RESET ");
resetbtn.appendChild(resetbtntxt);

/**
* NOTE: Creates table element to display record number
*       time, Timezone with date and time, and longitude
*       and latitude.
*/
var lapssect = document.createElement("table");
lapssect.setAttribute("Id", "lapssection");
var historyTable = document.createTextNode("History Time Table");
lapssect.appendChild(historyTable);
    
document.body.appendChild(lbl);
document.body.appendChild(p);
document.body.appendChild(startbtn);
document.body.appendChild(resetbtn);
var p = document.createElement("p");
document.body.appendChild(p);
document.body.appendChild(lapssect);

//Next time would try to display 00:00:00 for timer
var m=0.0;      //minutes 
var s=0.0;      //seconds
var ms=0.0;     //miliseconds 
var newlap=1;
var started=false;  
var interval;

var timezone = new Date(); // gets current date to display on timer

function timer() {
    document.getElementById("timer").innerHTML="Timer: "+m+":"+s+":"+ms/10;
    ms+=10;
        if(ms==1000){
            s+=1;
            ms=0;
        }
        if(s==60){
            m+=1;
            s=0;
        }
    }

function start(){
    if(started==false){
        navigator.geolocation.getCurrentPosition(function(position) { //uses function to assign lat and long
            document.getElementById("startbtn").innerHTML=" STOP ";
            var laplbl = document.createElement("label");
            laplbl.setAttribute("class","lap");
            var lat = document.createElement("p");
            var long = document.createElement("p");
            lat = position.coords.latitude;
            long = position.coords.longitude;
            var laplbltxt = document.createTextNode("Record Number"+" "+newlap+": "+m+":"+s+":"+ms/10+" | "+"Timezone "+newlap+": "+timezone+" | "+"Latitude: "+lat+" "+"Longitude: "+long);//adds to table
            console.log(lat);
            laplbl.appendChild(laplbltxt);
            var lp = document.createElement("p");
            lapssect.appendChild(lp);
            lapssect.appendChild(laplbl);
            newlap+=1;
            interval=setInterval(timer,10);
            started=true;
        });
            }else{
                clearInterval(interval);
                document.getElementById("startbtn").innerHTML=" RESUME ";
                started=false;
    }
}
    
function reset(){
    var lapsarr=document.getElementById("lapssection").getElementsByClassName("lap");
    var l=lapsarr.length;
    var ps=lapssect.getElementsByTagName("p");
    for(i=0; i<l; i+=1){
        lapssect.removeChild(lapsarr[0]); //Loops through all elements in the <p> element and deletes
    }
        
    for(j=0; j<l; j+=1){
        lapssect.removeChild(ps[0]);
    }
        
    clearInterval(interval);
    m=0;   //minutes
    s=0;   //seconds
    ms=0;  //milliseconds
    newlap=1;
    started=false; 
    document.getElementById("startbtn").innerHTML=" Start ";
    document.getElementById("timer").innerHTML="Timer: ";
}