// Declares a constant variable 'originalString' and assigns it the string "I love cats.".
const originalString = "I love cats.";

// Prints the heading and the value of 'originalString' to the console.
console.log("Original string:");
console.log(originalString);

// '.replace(searchValue, newValue)' searches a string for the FIRST occurrence of 'searchValue' ("cats")
// and returns a new string where that match is replaced with 'newValue' ("dogs").
// Note: 'originalString' itself remains unchanged because strings in JavaScript are immutable.
const replacedString = originalString.replace("cats", "dogs");

// Prints the heading and the newly created string: "I love dogs."
console.log("After using the replace() method:");
console.log(replacedString);

// Declares a constant 'exampleSentence' containing the word "cats" twice.
const exampleSentence = "I love cats and cats are so much fun!";

// Prints the heading and 'exampleSentence' to the console.
console.log("Original sentence:");
console.log(exampleSentence);

// '.replaceAll(searchValue, newValue)' replaces EVERY occurrence of "cats" with "dogs",
// whereas '.replace()' would have only replaced the very first "cats".
const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");

// Prints the heading and the updated sentence: "I love dogs and dogs are so much fun!"
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

// Declares a constant 'learningSentence' and assigns it "I love learning!".
const learningSentence = "I love learning!";

// Prints the heading and 'learningSentence' to the console.
console.log("Original learning sentence:");
console.log(learningSentence);

// This line uses method chaining (calling one method directly on the result of another):
// 1. '"love ".repeat(3)' repeats the string "love " (with a trailing space) 3 times -> "love love love "
// 2. '.trimEnd()' removes the extra trailing whitespace at the very end -> "love love love"
// 3. The final result "love love love" is stored in the constant 'repeatedLove'.
const repeatedLove = "love ".repeat(3).trimEnd();

// Prints the value of 'repeatedLove': "love love love"
console.log(repeatedLove);

// Uses a template literal (backticks ` `) and string interpolation (${repeatedLove})
// to insert "love love love" into the sentence -> "I love love love learning."
const newSentence = `I ${repeatedLove} learning.`;

// Prints the final assembled sentence: "I love love love learning."
console.log(newSentence);
