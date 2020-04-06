var vacationType = prompt("What type of trip do you want to go on, musical, tropical, or adventurous?");
var vacationType = ["musical", "tropical", "adventurous"];

var groupSize = prompt("How many people are you traveling with?");
var groupSize = [(groupSize <= "2"), (groupSize >= "3" && groupSize <= "5")];



/*if (vacationType.indexOf("musical")){
    console.log("yes");
}
 
//single line comments//
/*multi-line commnets*/

var vacationType = prompt("What type of trip do you want to go on, musical, tropical, or adventurous?");
if(vacationType === "musical"){
    alert("Great! You chose" + " " + vacationType + ".");
}
else if (vacationType === "tropical"){
    alert("Great! You chose" + " " + vacationType + ".");
}
else if (vacationType === "adventurous"){
    alert("Great! You chose" + " " + vacationType + ".");
}
else {
    alert("Sorry," + " " + vacationType + " " + "is not an option.");
}
var groupSize = prompt("How many people are you traveling with?");
if (groupSize <= "2" && vacationType === "musical"){
var result = "First class";
    console.log("Since you are a group of" + " " + groupSize + " " + "going on a" + " " + vacationType + " " + "vacation," + " " + "you should take" + " " + result + " " + "to New Orleans" + ".");
}
else if (groupSize >= "3" && vacationType === "musical");
var result = "a Helicopter";
    console.log("Since you are a group of" + " " + groupSize + " " + "going on a" + " " + vacationType + " " + "vacation," + " " + "you should take" + " " + result + " " + "to New Orleans" + ".");



/*if groupSize <= "2";
let result = "First Class";


var result

var result = "First Class";
if(groupSize <= "2"){
}

var result = "a Helicopter";
if (groupSize < "4"){
}

var result = "a Charter Flight";
if (groupSize > "6"){
}

/*else if (groupSize <= "4"){
    var result = "Helicopter";
}*/

/*var result = "a Helicopter";
if (groupSize >= "3");


var x = 3;
var y = 5;

var result = "Helicopter";
if (groupSize (x < 3 && y < 5) ){
}*/



/*
if(vacationType === "musical" && groupSize <= "2"){
    console.log("Since you are a group of" + " " + groupSize + " " + "going on a" + " " + vacationType + " " + "vacation," + " " + "you should take" + " " + result + " " + "to New Orleans" + ".");
}
else if(vacationType === "musical" && groupSize === "4"){
    console.log("Since you are a group of" + " " + groupSize + " " + "going on a" + " " + vacationType + " " + "vacation," + " " + "you should take" + " " + result + ".");
}*/*/





