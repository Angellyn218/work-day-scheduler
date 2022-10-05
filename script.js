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

    var hour = moment().hour();
    var eventEls = $('div[data-hour]');

    eventEls.each(function(i, val) {
        var curr = parseInt($(this).attr('data-hour'));
        if (curr < hour) {
            $(this).attr('class', 'col-md-10 past');
        } else if (curr === hour) {
            $(this).attr('class', 'col-md-10 present');
        } else {
            $(this).attr('class', 'col-md-10 future');
        }
    });



}) 