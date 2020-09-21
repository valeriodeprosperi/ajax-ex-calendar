$(document).ready(function(){

// data iniziale Calendario
var date = "2018-02-01";

var momentDate = moment(date);

// template giorni del mio Calendario
var source = $("#day-template").html();
var template = Handlebars.compile(source);

// stampo i giorni del mio Calendario
for (var i = 1; i <= momentDate.daysInMonth(); i++) {

var dateCompleteMoment = momentDate;

var context = {
  "day": i,
  "month": momentDate.format("MMMM"),
  "dateComplete": momentDate.format(YYYY-MM-DD)
};

var html= template(context);

$("days").append(html);

dateCompleteMoment.add(1, "day");

}


// chimata ajax
$.ajax(
    {
      "url": " https://flynn.boolean.careers/exercises/api/holidays",
      "data" : {
        "year" : 2018,
        "month" : 0,
      },
      "method": "GET",
      "success": function (data) {
        var resp = data.response;
        printHolidays(resp);
      },
      error: function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errore);
      }
    }
  );

});





});
