var vacationType = prompt("What type of trip do you want to go on, musical, tropical, or adventurous?");
var groupSize = prompt("How many people are you traveling with?");

let destination = "";
let travelSuggestion = "";
if (vacationType === "musical") {
  destination = "New Orleans";
} else if (vacationType === "tropical") {
  destination = "a beach vacation in Mexico";
} else if (vacationType === "adventurous") {
  destination = "whitewater rafting the Grand Canyon";
}
if (groupSize <= "2") {
  travelSuggestion = "First Class flight";
} else if (groupSize >= "3" && groupSize <= "5") {
  travelSuggestion = "Helicopter";
} else if (groupSize >= "6") {
  travelSuggestion = "Charter Flight";
}
let result =
  "Since you are a group of " +
  groupSize +
  " going on a " +
  vacationType +
  " vacation, " +
  "you should take" + " " + "a" + " " +
  travelSuggestion +
  " " +
  "to " +
  destination +
  ".";

console.log(result);

