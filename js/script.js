var vacationType = prompt("What type of trip do you want to go on, musical, tropical, or adventurous?");
var groupSize = prompt("How many people are you traveling with?");

if(vacationType === "musical" && groupSize <= "2"){
var result = "First class";
    console.log("Since you are a group of" + " " + groupSize + " " + "going on a" + " " + vacationType + " " + "vacation," + " " + "you should take" + " " + result + " " + "to New Orleans" + ".");
}
else if (vacationType === "musical" && (groupSize >= "3" && groupSize <= "5")){
    var result = "a Helicopter";
    console.log("Since you are a group of" + " " + groupSize + " " + "going on a" + " " + vacationType + " " + "vacation," + " " + "you should take" + " " + result + " " + "to New Orleans" + ".");
}
else if (vacationType === "musical" && groupSize >= "6"){
    var result = "a Charter Flight";
    console.log("Since you are a group of" + " " + groupSize + " " + "going on a" + " " + vacationType + " " + "vacation," + " " + "you should take" + " " + result + " " + "to New Orleans" + ".");
}

if(vacationType === "tropical" && groupSize <= "2"){
    var result = "First class";
        console.log("Since you are a group of" + " " + groupSize + " " + "going on a" + " " + vacationType + " " + "vacation," + " " + "you should take" + " " + result + " " + "to a beach vacation in Mexico" + ".");
    }
else if (vacationType === "tropical" && (groupSize >= "3" && groupSize <= "5")){
        var result = "a Helicopter";
        console.log("Since you are a group of" + " " + groupSize + " " + "going on a" + " " + vacationType + " " + "vacation," + " " + "you should take" + " " + result + " " + "to a beach vacation in Mexico" + ".");
    }
else if (vacationType === "tropical" && groupSize >= "6"){
        var result = "a Charter Flight";
        console.log("Since you are a group of" + " " + groupSize + " " + "going on a" + " " + vacationType + " " + "vacation," + " " + "you should take" + " " + result + " " + "to a beach vacation in Mexico" + ".");
}

if(vacationType === "adventurous" && groupSize <= "2"){
    var result = "First class";
        console.log("Since you are a group of" + " " + groupSize + " " + "going on an" + " " + vacationType + " " + "vacation," + " " + "you should take" + " " + result + " " + "to a beach vacation in Mexico" + ".");
    }
else if (vacationType === "adventurous" && (groupSize >= "3" && groupSize <= "5")){
        var result = "a Helicopter";
        console.log("Since you are a group of" + " " + groupSize + " " + "going on an" + " " + vacationType + " " + "vacation," + " " + "you should take" + " " + result + " " + "to a beach vacation in Mexico" + ".");
    }
else if (vacationType === "adventurous" && groupSize >= "6"){
        var result = "a Charter Flight";
        console.log("Since you are a group of" + " " + groupSize + " " + "going on an" + " " + vacationType + " " + "vacation," + " " + "you should take" + " " + result + " " + "to a beach vacation in Mexico" + ".");
}
 