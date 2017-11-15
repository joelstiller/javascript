function printRange(start,end,pass) {
    if ( pass == undefined ) {
        pass = 1;
    }
    if ( end == undefined ) {
        end = start;
        start = 0;
    }
    for ( start; start < end;start += pass) {
        console.log(start);
    }
}

printRange(14);