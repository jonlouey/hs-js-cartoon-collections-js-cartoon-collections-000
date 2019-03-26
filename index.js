// 1. Create a function that will accept an array called "dwarves"
// 2. Create an empty array variable to house a modefied list (list_of_dwarves)
// 3. Loop through "dwarves" array. 
// 4. Add a number and a period in front of each name
// 5. Return back the new array (list_of_dwarves)

function dwarfRollCall(dwarves) {
  var list_of_dwarves = ""; 
  for (var i = 0; i < dwarves.length; i++){
    list_of_dwarves += `${i + 1}. ${dwarves[i]} `
  }
  return list_of_dwarves; 
} 

// 1. Create a function that accpets an array.
// 2. Create a variable that will house the updated array. 
// 3. Loop through planeteerCalls array. 
// 4. Modify text in planteerCalls by making all characters capitalized and adding an exclamation mark to each string. 
// 5. Push the modified text to new variable (elements)  
// 6. Return elements 



function summonCaptainPlanet(planeteerCalls){
  var elements = []; 
  for(var list = 0; list < planeteerCalls.length; list++){
  elements.push(`${planeteerCalls[list]}`.toUpperCase() + "!") 
  }
  return elements; 
}

// 1. Create function that accepts an Array.
// 2. Create an array where we can input true and false text created in steps 3, 4, and 5. 
// 3. Review each item in the array to count its length. 
// 4. If any of the items in the array are longer than 4 characters return true. 
// 5. Else return false 
// 6. Review array and return true if "true" can be found in the array https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes. 

function longPlaneteerCalls(words) {
  var short_long = []
  for(var r = 0; r < words.length; r++){
    if (words[r].length > 4) { 
    short_long.push("true")
  }
    else{
    short_long.push("false")
  }
}
return(short_long.includes("true"));
}

// 1. Create a function that accepts an array called "food". 
// 2. Review each item in the array <-- For loop 
// 3. If Cheddar, Gouda, or Camembert 
// 4. Else "No Cheese"
// NOTE: Why did the below not work? 

/*function findTheCheese (foods) {
   for(var c = 0; c < foods.length; c++) {
     if(foods[c] === 'cheddar' || foods[c] === 'gouda' || foods[c] === 'camembert') {
         return foods[c];
       } 
     else {
       return 'no cheese!';
     } 
 }
}*/

function findTheCheese (foods) {
   for(var c = 0; c < foods.length; c++) {
     if(foods[c] === 'cheddar' || foods[c] === 'gouda' || foods[c] === 'camembert') {
         return foods[c];
       } 
    }
     if(foods[c] !== 'cheddar' || foods !== 'gouda' || foods !== 'camembert') {
       return 'no cheese!';
     } 
 }
