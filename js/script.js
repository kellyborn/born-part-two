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

/*if groupSize <= "2";
let result = "First Class";*/


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


var groupSize = prompt("How many people are you traveling with?");

if(vacationType === "musical" && groupSize <= "2"){
    console.log("Since you are a group of" + " " + groupSize + " " + "going on a" + " " + vacationType + " " + "vacation," + " " + "you should take" + " " + result + " " + "to New Orleans" + ".");
}
else if(vacationType === "musical" && groupSize === "4"){
    console.log("Since you are a group of" + " " + groupSize + " " + "going on a" + " " + vacationType + " " + "vacation," + " " + "you should take" + " " + result + ".");
}





