
//Lets make a function!
function fancyarray(delim,rev) {
    if ( delim === undefined ) {
        delim = '->';
    }
    // Does the reversing.
    if (rev) {
        var arr = [ "James", "Jill", "Jane", "Jack" ];
        var al = arr.length;
        for (var i = 3; i >= 0;i--) {
            console.log(i,delim,arr[i]);
        }
    }else{
       var arr = [ "James", "Jill", "Jane", "Jack" ];
        var al = arr.length;
        for (var i = 0; i < al;i++) {
            console.log(i,delim,arr[i]);
        } 
    }
}
fancyarray("=>");