var daysUntilMyBirthday = 60;

for (var i = 0; i <= 60; i++) {
    if ( daysUntilMyBirthday == 0 ) {
        console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
        console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
        console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
    }
    else if (daysUntilMyBirthday <= 5 ) {
        console.log(daysUntilMyBirthday + ' days until my birthday!!');
    }
    else if (daysUntilMyBirthday < 30 ) {
        console.log(daysUntilMyBirthday + ' days until my birthday, yay.');
    }
    else {
        console.log(daysUntilMyBirthday + ' days until my birthday, so far away. :( ');
    }
    daysUntilMyBirthday--;
}
