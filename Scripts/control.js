"use strict"
let timeDelay = 10000; // time delay refresh data
// uncomment for multi user
let refreshTimer = window.setInterval(ajaxReadJson, timeDelay); // timer get data from server

let Write ={}; // global object
let Write2 = [];
let Receive = []; 
let button1 = document.getElementById("button1"); // bind button

button1.addEventListener('click',function(){
  Write.text = document.getElementById("textInput1").value;// get string from input
  Write.date = Date.now(); // get time stamp
  Write2 = [...Write2, Write]; // add all previous inputs
  let formattedString = JSON.stringify(Write2); // convert to JSON formatted string
  let url = controlScript + "?data=" + formattedString;
  makeAjaxCall(url, "GET").then(ajaxReadJson);
})



function ajaxReadJson(){
  makeAjaxCall(jsonFileData,"POST"). then(processJson); // read data
}

function processJson(jsonString) {
   Receive = JSON.parse(jsonString); //extract to JSON object
   let displayString = "";
   let index = Receive.length-1;
   console.log(Receive[index].text);
    while(index >= 0){
      displayString += index + " Time " + convertDate(Receive[index].date) + "<br>Message<br>" + Receive[index].text + "<br><br>"
      index -= 1;
}
  document.getElementById("output").innerHTML = displayString;
  Write2 = Receive;
 }

function convertDate(date){
  let dateObject = new Date(date);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return dateObject.toLocaleString();
}

function init(){
    ajaxReadJson(); // get JSON string with values from server
}

init(); // start