function touchEvent() {
        clearTimeout(rectangleTimeout);

    $('#rectangle').css('background-color', 'blue');
    rectangleTimeout = setTimeout(resetRectColor, 700);
//    console.log("event : touch");
    timestamp_callback();

}

function drinkEvent() {
        clearTimeout(rectangleTimeout);

    $('#rectangle').css('background-color', 'red');


    var dureeEvent = (musicNinjaEvents[nextEvent].eventEnd - musicNinjaEvents[nextEvent].eventStart) * 1000;

    rectangleTimeout = setTimeout(resetRectColor, dureeEvent);
 //   console.log("event : drink");

    timestamp_callback();

}

function holdEvent() {
        clearTimeout(rectangleTimeout);

    $('#rectangle').css('background-color', 'green');

    var dureeEvent = (musicNinjaEvents[nextEvent].eventEnd - musicNinjaEvents[nextEvent].eventStart) * 1000;

    rectangleTimeout = setTimeout(resetRectColor, dureeEvent);
    //     console.log("event : hold");

    timestamp_callback();

}

function resetRectColor() {
    $('#rectangle').css('background-color', 'black');

    clearTimeout(rectangleTimeout);

}

function timestamp_callback() {
    var nextEventTimer = clearTimeout(timerNextEvent);

    current_time = player.getCurrentTime();
    //alert(current_time);


    for (var i = nextEvent; i < musicNinjaEvents.length; i++) {
        if (musicNinjaEvents[i].eventStart > current_time) {

            remaining_time = (musicNinjaEvents[i].eventStart - current_time) * 1000;
            nextEvent = i;
            break;
        }
    }


    if (musicNinjaEvents[nextEvent].eventType == 'touch') {

        nextEventTimer = setTimeout(touchEvent, remaining_time);

    } else if (musicNinjaEvents[nextEvent].eventType == 'drink') {

        nextEventTimer = setTimeout(drinkEvent, remaining_time);

    } else if (musicNinjaEvents[nextEvent].eventType == 'hold') {

        nextEventTimer = setTimeout(holdEvent, remaining_time);

    }

    console.log(musicNinjaEvents[nextEvent].eventType);
}
