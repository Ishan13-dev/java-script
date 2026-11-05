// Declares a constant variable 'fccSentence' and assigns it a string value.
const fccSentence = "freeCodeCamp is a great place to learn web development.";

// Prints an introductory message to the console.
console.log("Here are some examples of the includes() method:");

// '.includes()' is a string method that checks if a specific substring exists within a string.
// It returns a boolean value: 'true' if found, or 'false' if not found.
// Since "freeCodeCamp" is present in 'fccSentence', 'hasFreeCodeCamp' is assigned 'true'.
const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");

// Uses a template literal (backticks ` `) and string interpolation (${hasFreeCodeCamp}) to embed the boolean result ('true') into the output string.
console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);

// Checks if "JavaScript" is inside 'fccSentence'. Since it is not, '.includes()' returns 'false' and stores it in 'hasJavaScript'.
const hasJavaScript = fccSentence.includes("JavaScript");

// Prints the explanation to the console, interpolating the value 'false' where ${hasJavaScript} is placed.
console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);

// '.includes()' is case-sensitive. Even though "freeCodeCamp" is in the sentence, all-lowercase "freecodecamp" does not match the exact capital 'C's.
// Therefore, this returns 'false' and stores it in 'hasLowercaseFCC'.
const hasLowercaseFCC = fccSentence.includes("freecodecamp");

// Prints the explanation showing that 'hasLowercaseFCC' evaluated to 'false'.
console.log(`fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`);

// Declares a new constant 'message' and assigns it the string "Welcome to freeCodeCamp!" (24 characters long, indexed 0 to 23).
const message = "Welcome to freeCodeCamp!";

// Prints an introductory message for the '.slice()' method examples.
console.log("Here are some examples of the slice() method:");

// '.slice(startIndex, endIndex)' extracts a section of a string and returns it as a new string without modifying the original string.
// '11' is the starting index (inclusive, where 'f' in "freeCodeCamp" starts).
// '23' is the ending index (exclusive, stopping right before index 23, which is the '!' character).
// This extracts characters from index 11 through 22 ("freeCodeCamp") and stores them in 'platform'.
const platform = message.slice(11, 23);

// Prints: 'The word "freeCodeCamp" was sliced from the message.'
console.log(`The word "${platform}" was sliced from the message.`);

// Extracts characters starting at index 0 ('W') up to, but not including, index 7 (the space after "Welcome").
// Stores the extracted string "Welcome" in the constant 'greetingWord'.
const greetingWord = message.slice(0, 7);

// Prints: 'The first word is "Welcome".'
console.log(`The first word is "${greetingWord}".`);

// Passing a negative number to '.slice()' counts backward from the end of the string.
// '-1' starts 1 character from the end of 'message' and slices to the very end, extracting the last character ("!").
const endPunctuation = message.slice(-1);

// Prints: 'The ending punctuation mark is a "!"'
console.log(`The ending punctuation mark is a "${endPunctuation}"`);

// Prints the final completion message to the console.
console.log("Workshop complete! You now know how to use includes() and slice().");
