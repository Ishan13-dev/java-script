// 1 & 2. Declare the six required variables using 'let' and assign initial string values
let adjective = "grumpy";
let noun = "dragon";
let verb = "coding";
let place = "volcano";
let adjective2 = "giant";
let noun2 = "tacos";

// 3 & 4. Declare firstStory and assemble the exact template using string concatenation
let firstStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";

// 5. Log the first story with the exact required prefix
console.log("First story: " + firstStory);

// 6. Reassign all six variables to new string values (without using 'let' again)
adjective = "sleepy";
noun = "unicorn";
verb = "dancing";
place = "castle";
adjective2 = "sparkly";
noun2 = "marshmallows";

// 7 & 8. Declare secondStory and assemble the same template with the updated variable values
let secondStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";

// 9. Log the second story with the exact required prefix
console.log("Second story: " + secondStory);
