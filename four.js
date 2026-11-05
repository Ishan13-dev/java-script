// Prints the string literal "Hi there!" to the console.
console.log("Hi there!");

// Declares a constant (read-only) variable named 'botName' and assigns it the string "teacherBot".
const botName = "teacherBot";

// Declares a constant 'greeting' using a template literal (enclosed in backticks ` ` instead of quotes).
// '${botName}' is a placeholder (string interpolation) that inserts the value of 'botName' directly into the string.
const greeting = `My name is ${botName}.`;

// Prints the value of 'greeting' to the console: "My name is teacherBot."
console.log(greeting);

// Declares two constant variables, 'subject' and 'topic', and assigns them string values.
const subject = "JavaScript";
const topic = "strings";

// Uses a template literal with two placeholders (${topic} and ${subject}) to build a complete sentence.
const sentence = `Today, you will learn about ${topic} in ${subject}.`;

// Prints the value of 'sentence': "Today, you will learn about strings in JavaScript."
console.log(sentence);

// Creates a template literal explaining the '.length' property and stores it in 'strLengthIntro'.
const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;

// Prints: "Here is an example of using the length property on the word JavaScript."
console.log(strLengthIntro);

// '.length' is a built-in string property that returns the total number of characters in a string.
// "JavaScript" has 10 characters, so this prints 10 to the console.
console.log(subject.length);

// Directly passes a template literal into console.log() without storing it in a variable first.
// Prints: "Here is an example of using the length property on the word strings."
console.log(`Here is an example of using the length property on the word ${topic}.`);

// Accesses the '.length' property of 'topic' ("strings"), which has 7 characters, and prints 7.
console.log(topic.length);

// Prints an introduction for bracket notation indexing: "Here is an example of accessing the first letter in the word JavaScript."
console.log(`Here is an example of accessing the first letter in the word ${subject}.`);

// '[]' (bracket notation) accesses a specific character in a string by its index (position).
// JavaScript uses zero-based indexing, meaning counting starts at 0. 'subject[0]' gets the first character of "JavaScript", printing "J".
console.log(subject[0]);

// Prints: "Here is an example of accessing the second letter in the word JavaScript."
console.log(`Here is an example of accessing the second letter in the word ${subject}.`);

// Index 1 refers to the second character in the string "JavaScript", so this prints "a".
console.log(subject[1]);

// Prints: "Here is an example of accessing the last letter in the word JavaScript."
console.log(`Here is an example of accessing the last letter in the word ${subject}.`);

// Because counting starts at 0, the last character's index is always 1 less than the total length of the string.
// 'subject.length - 1' evaluates to 10 - 1 = 9. 'subject[9]' retrieves the last character ("t") and stores it in 'lastCharacter'.
const lastCharacter = subject[subject.length - 1];

// Prints the value stored in 'lastCharacter': "t"
console.log(lastCharacter);

// Declares a constant 'learningIsFunSentence' and assigns it the string "Learning is fun.".
const learningIsFunSentence = "Learning is fun.";

// Prints an introductory message about finding substrings (smaller strings inside a larger string).
console.log("Here are examples of finding the positions of substrings in the sentence.");

// '.indexOf()' is a string method that searches for a substring and returns the index of its first character.
// "Learning" starts at the very beginning of "Learning is fun.", so this prints 0.
console.log(learningIsFunSentence.indexOf("Learning"));

// The substring "fun" starts at index 12 inside "Learning is fun." (counting letters and spaces starting from 0), so this prints 12.
console.log(learningIsFunSentence.indexOf("fun"));

// '.indexOf()' is case-sensitive. Because "learning" (with a lowercase 'l') does not exist in "Learning is fun.", it returns -1 (meaning "not found").
console.log(learningIsFunSentence.indexOf("learning"));

// Prints the final farewell message to the console.
console.log("I hope you enjoyed learning today.");
