$(document).ready(function() {
    var scheduled = ["", "", "", "", "", "", "", "", ""];
    var hour = moment().hour();
    var eventEls = $('div[data-hour]');
    var containerEl = $(".container");
    var scheduledEls = $('textarea');

    // initialize website
    var init = function() {
        var localStorageScheduled = JSON.parse(localStorage.getItem('scheduled'));
        if (scoresLocalStorage !== null) {
            scores = scoresLocalStorage;
        }
    }

    // Updates day and time on scheduler 
    var updateCurrent = function() {
        var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        $("#currentDay").text(currentDay)
    }

    // saves event to local storage
    function saveToStorage() {
        var button = $(this);
        var textBoxDiv = button.siblings().eq(1); 
        var index = parseInt(textBoxDiv.attr('data-hour')) - 9;
        // input of textarea
        var input = textBoxDiv.children().first().val();

        scheduled[index] = input;

        localStorage.setItem("scheduled", JSON.stringify(scheduled));
    }
    
    // initialize website by loading values from local storage
    init();
    // sets the initial time and date
    updateCurrent();
    // updates thee initial time and date every second
    setInterval(updateCurrent, 1000);

    // Sets value of textarea to scheduled events
    scheduledEls.each(function(i, val) {
        $(this).val(scheduled[i]);
    });

    // Sets color of section
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

    // Calls on function to save events to storage when button is clicked
    containerEl.on('click', '.saveBtn', saveToStorage);



}) 