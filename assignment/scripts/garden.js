// 1 - Create a variable called `plantType` and assign it the value of a plant type (e.g., "Tomato", "Rose", "Lavender")
var plantType = "Aloe";

// 2 - Create a second variable called `plantHeight` and assign it the value of the plant's height in inches (e.g., 12, 24, 36)
var plantHeight = "10in";

// 3 - Create a third variable called `plantLocation` and assign it the value of where the plant is located (e.g., "Backyard", "Balcony", "Indoor")
var plantLocation = "Window";

// 4 - Console log the value of each variable
console.log(plantType);
console.log(plantHeight);
console.log(plantLocation);

// 5 - Create a variable named `isOutdoor` and set it to a boolean value (true or false) indicating whether the plant is outdoors
var isOutDoor = false;

// 6 - Create a variable named `waterFrequency` and set its value to a string describing how often the plant needs watering (e.g., "Daily", "Weekly", "Bi-weekly")
var waterFrequency = "Monthly";

// 7 - Create a variable called `daysSinceLastWatering` and set it to the number of days since the plant was last watered
var daysSinceLastWatering = "24";

// 8 - Create a conditional: if `isOutdoor` is true, console log "Remember to check the weather forecast!"
if(isOutDoor){
    console.log("Remember to check the weather forecast!");
};

// 9 - Write a conditional that console logs "Water the plant" if the value of `daysSinceLastWatering` is greater than or equal to 2,
// and console logs "Do not water the plant yet" if the value is less than 2.
if(daysSinceLastWatering > 2){
    console.log("Water the plant");
}else{
    console.log("Do not water the plant yet");
};

// 10 - Create a variable called `daysToWater` and set it to 7
var daysToWater = 7;

// 11 - Create a while loop that logs "Water the plant" while `daysToWater` is greater than 0,
// and decrements `daysToWater` by 1 in each iteration
var waterThePlant = 0
while(daysToWater > 0){
    console.log("Water the plant");
    daysToWater -= 1;
}

// 12 - Create a for loop that logs "Check for pests" for each day of the week (i.e., 7 times)
var daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
for(let i = 0; i < daysOfTheWeek.length; i++){
    console.log("Check for pests on " + daysOfTheWeek[i] + "!");
}
