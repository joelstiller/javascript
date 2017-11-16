// Slot function
function doSlot (quarters) {
    var bank = quarters;
    for (var i = 0; i < quarters;i++) {
        var roll = Math.random() * 100;
        var fixed_roll = Math.floor(roll);
        if ( fixed_roll == 1 ) {
            bank *= 2;
            return("You won " + bank + " Quarters!");
        }
        bank--;
        if ( bank == 0 ) {
            return("You're out of money. :(")
        }
    }
}

console.log(doSlot(20));