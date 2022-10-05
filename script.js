$(document).ready(function() {
    // Updates day and time on scheduler 
    var updateCurrent = function() {
        var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        $("#currentDay").text(currentDay)
    }

    // sets the initial time and date
    updateCurrent();
    // updates thee initial time and date every second
    setInterval(updateCurrent, 1000);



}) 