var myVar;
var time;

function loading() {
  myVar = setTimeout(showPage, 2000);
  time =  setTimeout(showTime, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loading").style.display = "block";   
}

function showTime() {
  document.getElementById("timer").style.display = "block";   
}