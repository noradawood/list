//last pro variables
var timeArray = [];
var lapHr = document.getElementById("h");
var lapMin = document.getElementById("m");
var lapSec = document.getElementById("s");
//countup timer variables
var myHours = document.getElementById("hours");
var myMinutes = document.getElementById("minutes");
var mySeconds = document.getElementById("seconds");
//boolean flags for buttons
var timerOff = 1;
//padding function that ensure the nums are two digits and add '0' to single digit
function pad(num) {
  numStr = num.toString();
  if (numStr.length < 2) {
    return "0" + numStr;
  } else {
    return numStr; //returns num
  }
}

var totalSeconds = 0;
var currentSecs, currentMins, currentHrs;
//function that sets the time
function setTime() {
  ++totalSeconds;
  currentSecs = pad(totalSeconds % 60); //ex totsecs=30 then 30%60=30
  currentMins = pad(parseInt((totalSeconds / 60) % 60)); //ex total seconds 70/60=1.167%60 due to paresInt its 1
  currentHrs = pad(parseInt(totalSeconds / 3600) % 24);
  mySeconds.innerHTML = currentSecs;
  myMinutes.innerHTML = currentMins;
  myHours.innerHTML = currentHrs;
}
function set() {
  if (timerOff === 1) {
    my_int = setInterval(function() {
      setTime(myHours, myMinutes, mySeconds);
    }, 1000);
    timerOff = 0; // to ensure that set isn't triggered when false
  }
}

function stop() {
  if (timerOff === 0) {
    clearInterval(my_int);
    timerOff = 1; //reset to default (true)
  } else if (timerOff === 1) {
    set();
  }
}
var doIt=1;
function done() {
  clearInterval(my_int);
  mySeconds.innerHTML = "00";
  myMinutes.innerHTML = "00";
  myHours.innerHTML ="00";
  timerOff = 1;
  lapSec.innerHTML = currentSecs;
  lapMin.innerHTML = currentMins;
  lapHr.innerHTML = currentHrs;
  totalSeconds = 0;
  console.log(document.getElementById("s").innerHTML);
  console.log(document.getElementById("m").innerHTML);
  console.log(document.getElementById("h").innerHTML);
  console.log(document.getElementById("text").value);
  timeArray.push({
    time:
      document.getElementById("h").innerHTML +
      ":" +
      document.getElementById("m").innerHTML +
      ":" +
      document.getElementById("s").innerHTML,
    text: document.getElementById("text").value
  });

  console.log(timeArray);
  var arr = "<ul>";
  timeArray.forEach(function(timeArrayElement) {
    arr +=
      "<li>" +
      timeArrayElement.text  + " " +
      timeArrayElement.time 
      "</li>";
  });
  arr += "</ul>";
  document.getElementById("listcontainer").innerHTML = arr;
}

