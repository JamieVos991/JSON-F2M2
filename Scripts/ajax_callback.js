"use strict";
let debug = true;
let controlScript = "jsonWrite.php";
let jsonFileData = "data.json";

function makeAjaxCall(url, methodType){
   let promiseObj = new Promise(function(resolve, reject){
			let xmlhttp = new XMLHttpRequest();
         xmlhttp.open(methodType, url, true);
         xmlhttp.send();
         xmlhttp.onreadystatechange = function(){
           if (xmlhttp.readyState === 4){
              if (xmlhttp.status === 200){                
                 let serverResponse = xmlhttp.responseText; //server antwoord met string
                 resolve(serverResponse); // wordt via return promiseObj teruggegeven
              } else {
              	reject(xmlhttp.status);
              }
           } else {
                //console.log("xmlhttp processing going on"); // debug
           }
        }
        //console.log("request sent succesfully"); // debug
      });
   return promiseObj;
  }

function errorHandler(statusCode){
    console.log("failed with status", status);
  }
