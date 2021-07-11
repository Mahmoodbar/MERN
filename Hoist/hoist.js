///// (1)
// console.log(hello);                                   
// var hello = 'world';  
///////////(interpreter)
// var hello;
//  console.log(hello);
//  hello = 'world';

///// (2)
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
///////////(interpreter)
//  var needle;
//  test();
//  function test(){
//  var needle; 
//  console.log(needle);
//  needle = ' magnet';
// }
//  needle = ' haystack';

///// (3)
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
///////////(interpreter)
// var brendan;
// function print(){
// var brendan;
// console.log (brendan);
// brendan = ' only okay';
// }
// brendan = 'super cool';
// console.log(brendan);

///// (4)
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
///////////(interpreter)
// var food; 
// eat ();
// function eat (){
// var food; 
// food = 'half chicken';
// console.log (food);
// }

// food='chicken';
// console.log (food);



///// (5)
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

///////////(interpreter)

// mean();
// console.log(food);
// var mean = function (){
// var food;
// console.log(food);
// food='fish';

// }
// console.log(food);


///// (6)
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
///////////(interpreter)
// var genre;
// rewind();
// function rewind(){
//     var genre;
//     genre="rock";
//     console.log(genre);
//     
//     genre="r&b";
//     console.log(genre);
    
// }
// genre="disco";
// console.log(genre);


///// (7)
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
///////////(interpreter)
// var dojo;
// learn();
// function learn(){
//     var dojo;
//     dojo = "seatle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo);


