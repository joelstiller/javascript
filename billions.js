var start = .01;
var counter = 1;
while (true) {
    if ( start == Infinity ) {
        console.log('We made ' + start + 'dollars.');
        console.log('It took ' + counter + ' days.')
        break;
    }
    start *= 2;
    counter++;
}