// Declares a constant string with leading and trailing whitespace (spaces at the start and end).
const userInput = "   Hello World!   ";
console.log("Original input:");
console.log(userInput);

// '.trim()' removes whitespace from BOTH the beginning and the end of a string, returning "Hello World!".
const cleanedInput = userInput.trim();
console.log("Result of trimming whitespace from both ends:");
console.log(cleanedInput);

// '.trimStart()' removes whitespace ONLY from the beginning (left side) of the string, keeping trailing spaces.
const trimmedStart = userInput.trimStart();
console.log("After using the trimStart() method, leading spaces removed:");
console.log(trimmedStart);

// '.trimEnd()' removes whitespace ONLY from the end (right side) of the string, keeping leading spaces.
const trimmedEnd = userInput.trimEnd();
console.log("After using the trimEnd() method, trailing spaces removed:");
console.log(trimmedEnd);

// '.toUpperCase()' converts every letter in the string to capital letters: "HELLO WORLD!".
const upperCaseInput = cleanedInput.toUpperCase();
console.log("Result of using the toUpperCase() method:");
console.log(upperCaseInput);

// '.toLowerCase()' converts every letter in the string to lowercase letters: "hello world!".
const lowerCaseInput = cleanedInput.toLowerCase();
console.log("Result of using the toLowerCase() method:");
console.log(lowerCaseInput);

// Declares a lowercase string "camelcase" (9 characters long, indexed 0 to 8).
const lowercaseWord = "camelcase";

// 1. 'lowercaseWord.slice(0, 5)' extracts characters from index 0 up to (not including) 5 -> "camel"
// 2. 'lowercaseWord[5].toUpperCase()' accesses index 5 ("c") and capitalizes it -> "C"
// 3. 'lowercaseWord.slice(-3)' counts 3 characters back from the end and slices to the end -> "ase"
// 4. '+' concatenates all three pieces together: "camel" + "C" + "ase" -> "camelCase"
const camelCasedVersion = lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase() + lowercaseWord.slice(-3);
console.log("Camel cased version:");
console.log(camelCasedVersion);
