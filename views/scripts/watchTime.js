var lbl = document.createElement("label");
lbl.setAttribute("Id", "timer");
var lbltxt = document.createTextNode("Timer: ");
lbl.appendChild(lbltxt);
    
var p = document.createElement("p");

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
    
    
var m=0.0;   
var s=0.0;  
var ms=0.0;   
var newlap=1;
var started=false;  
var interval;

var timezone = new Date();

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

/*function newLap() {
        if(started==true){
            var laplbl = document.createElement("label");
            laplbl.setAttribute("class","lap");
            var laplbltxt = document.createTextNode("Lap"+" "+newlap+": "+m+":"+s+":"+ms/10+" "+"Timezone"+": "+timezone);
            laplbl.appendChild(laplbltxt);
            var lp = document.createElement("p");
            lapssect.appendChild(lp);
            lapssect.appendChild(laplbl);
            newlap+=1;
        }
    }*/

function start(){
    if(started==false){        
        document.getElementById("startbtn").innerHTML=" STOP ";
        var laplbl = document.createElement("label");
        var br = document.createElement("br");
        laplbl.appendChild(br);
        laplbl.setAttribute("class","lap");
        var laplbltxt = document.createTextNode("Lap"+" "+newlap+": "+m+":"+s+":"+ms/10+" "+"Timezone"+": "+timezone+" ");
        laplbl.appendChild(laplbltxt);
        var lp = document.createElement("p");
        lapssect.appendChild(lp);
        lapssect.appendChild(laplbl);
        newlap+=1;
        interval=setInterval(timer,10);
        started=true;
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
            lapssect.removeChild(lapsarr[0]);
        }
        
        for(j=0; j<l; j+=1){
            lapssect.removeChild(ps[0]);
        }
        
        clearInterval(interval);
        m=0;    // minute
        s=0;    // second
        ms=0;   // millisecond
        newlap=1;
        started=false; 
        document.getElementById("startbtn").innerHTML=" Start ";
        document.getElementById("timer").innerHTML="Timer: ";
    }