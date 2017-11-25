var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);
// newArray is [1, -3, 0.5]

function numbersOnly (inarr) {
    outarr = [];
    for (var i = 0;i < inarr.length;i++) {
        if ( typeof inarr[i] === "number" ) {
            outarr.push(inarr[i]);
        }
    }
    return outarr;
}

console.log(newArray);