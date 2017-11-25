var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
     ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
    }

for ( var i in users ) {
    var count = 1;
    for (var item in users[i]) {
        var first = users[i][item].first_name;
        var last = users[i][item].last_name;
        var fullname = first + last;
        var charcount = fullname.length;
        console.log(count,"-",first,last,"-", charcount);
        count++;
    }
}