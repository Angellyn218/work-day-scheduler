$(document).ready(function() {
    var scheduled = ["", "", "", "", "", "", "", "", ""];

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
    var containerEl = $(".container");

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

    //figure out

    function saveToStorage() {
        var button = $(this);
        var textBoxDiv = button.siblings().eq(1); 
        var index = parseInt(textBoxDiv.attr('data-hour')) - 9;
        var input = textBoxDiv.children().first().val(); // value of text box

        scheduled[index] = input;

        localStorage.setItem("scheduled", JSON.stringify(scheduled));
    }

    containerEl.on('click', '.saveBtn', saveToStorage);



}) 