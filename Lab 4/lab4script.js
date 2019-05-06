document.write("<h2>Lab 4 Question 1</h2>");
document.write("ctrl+shift+i");
console.log(760%9);
console.log(("WIF2003 " + "Web Programming")[10]);
console.log("helloworld".length % "him\\".length); 

document.write("<h2>Lab 4 Question 3</h2>");
var x = 10;
var y = "a"
var value = eval(new String(y === "b" || x >= 10)); 
document.write(value); 

document.write("<h2>Lab 4 Question 4</h2>");
var x = 3;
var y = 8;
var value1 = eval(new String(!(x == "3" || x === y) && !(y != 8 && x <= y))); 
document.write(value1); 

document.write("<h2>Lab 4 Question 5</h2>");
var valueA = eval(new String(!"Hello World")); 
document.write("a: "+valueA+"\n"); 
document.write("<br>");
var valueB = eval(new String(!"")); 
document.write("b: "+valueB+"\n"); 
document.write("<br>");
var valueC = eval(new String(!null)); 
document.write("c: "+valueC+"\n"); 
document.write("<br>");
var valueD = eval(new String(!0)); 
document.write("d: "+valueD+"\n"); 
document.write("<br>");
var valueE = eval(new String(!-1)); 
document.write("e: "+valueE+"\n"); 
document.write("<br>");
var valueF = eval(new String(!NaN)); 
document.write("f: "+valueF+"\n"); 

document.write("<h2>Lab 4 Question 6</h2>");
document.write("<h4>while loop:</h4>");
var j=10;
while(j<=40){
if(j%2!=0)
document.write(j+"\n");
j++;
}
document.write("<h4>for loop:</h4>");
var i;
for(i=10; i<=40; i++){
if(i%2!=0)
document.write(i+"\n");
}

document.write("<h2>Lab 4 Question 7</h2>");
document.write("ctrl+shift+i");
array = [1,2,3,4];
array2 = ["a","b"];

function printReverse(list){
for(let i=list.length-1; i>=0; i--){
console.log(list[i]);
}

}

printReverse(array);
printReverse(array2);

document.write("<h2>Lab 4 Question 9</h2>");

var movies = [
{ title: "In Bruges",
  rating: 5,
  hasWatched: true},
{ title: "Frozen",
  rating: 4.5,
  hasWatched: false},
{ title: "Mad Max Fury Road",
  rating: 5,
  hasWatched: true},
{ title: "Les Miserables",
  rating: 4.5,
  hasWatched: false}
];

for(var i = 0; i < movies.length; i++) {
	if(movies[i].hasWatched === true) {
		document.write("You have watched " + movies[i].title + " - " + movies[i].rating + " stars");
                document.write("<br>");
	}
	else {
		document.write("You have not watched " + movies[i].title + " - " + movies[i].rating + " stars");
                document.write("<br>");
	}
}
document.write("<h2>Lab 4 Question 10 </h2>");
function prettyPrint(object){
	for(var i in object)
		document.write(i + ": "+ object[i] + "<br>");
}

prettyPrint({name: "Rusty", species: "dog", breed: "mutt"});

