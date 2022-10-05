$(document).ready(function() {
    var updateCurrent = function() {
        var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        $("#currentDay").text(currentDay)
    }

    updateCurrent();
    setInterval(updateCurrent, 1000);



}) 