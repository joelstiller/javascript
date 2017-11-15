var HOUR = 12;
var MINUTE = 12;
var PERIOD = "AM";
var daynight;
var thirty;
if ( PERIOD == "AM" ) {
    daynight = "in the morning.";
}else{
    daynight = "in the evening.";
}
if ( HOUR == 12 && PERIOD == 'AM' && MINUTE == 0 ) {
    thirty = "midnight!";
}else if ( HOUR == 12 && PERIOD == 'PM' && MINUTE == 0 ) {
    thirty = "noon!";
}else {
    if ( MINUTE >= 45 ) {
        thirty = "three quarters past";
    }else if ( MINUTE >= 30 ) {
        thirty = "half past";
    }else if ( MINUTE >= 15 ) {
        thirty = "quarter past";
    }else{
        thirty = "5 after";
    }
}
console.log("It is", thirty, HOUR, daynight);