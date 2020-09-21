$(document).ready(function){

// data iniziale Calendario
var date = "2018-02-01";

var momentDate = moment(date);

// template giorni del mio Calendario
var source = $("#day-template").html();
var template = Handlebars.compile(source);

// stampo i giorni del mio Calendario
for (var i = 1; i <= momentDate.daysInMonth(); i++) {


  
}



}
