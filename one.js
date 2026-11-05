// 'console' is a built-in global object representing the terminal or browser debugging console.
// '.' (dot notation) accesses a property or method belonging to the 'console' object.
// 'log' is a method (function) that prints messages to the console screen.
// '()' (parentheses) execute the 'log' method and hold the argument being passed into it.
// '"Hi there!"' is a string literal (text data enclosed in double quotes).
// ';' (semicolon) marks the end of a JavaScript statement.
console.log("Hi there!");

// Prints a second string literal to the console on a new line.
console.log("I am excited to talk to you.");

// 'let' is a keyword used to declare a block-scoped variable whose value can be changed (reassigned) later.
// 'bot' is the identifier (name) of the variable. Because no value is assigned yet, its default value is 'undefined'.
let bot;

// '=' is the assignment operator. It stores the string value on the right ("teacherBot") into the variable on the left ('bot').
bot = "teacherBot";

// Declares a new mutable variable named 'botLocation' using 'let' and initializes it with the string "the universe" in a single step.
let botLocation = "the universe";

// Prints the introductory string literal to the console.
console.log("Allow me to introduce myself.");

// 'const' is a keyword used to declare a constant (read-only) variable that cannot be reassigned to a new value later.
// 'botIntroduction' is the constant's name (written in camelCase).
// '+' is the string concatenation operator, which joins strings and variable values together into one combined string.
// This joins "My name is ", the current value of 'bot' ("teacherBot"), and "." to store "My name is teacherBot.".
const botIntroduction = "My name is " + bot + ".";

// Passes the variable 'botIntroduction' into console.log(), which prints its stored value: "My name is teacherBot."
console.log(botIntroduction);

// Declares a constant 'botLocationSentence' and concatenates "I live in ", the value of 'botLocation' ("the universe"), and ".".
const botLocationSentence = "I live in " + botLocation + ".";

// Prints the value stored in 'botLocationSentence': "I live in the universe."
console.log(botLocationSentence);

// Reassigns the 'bot' variable to a new string ("professorBot"), overwriting "teacherBot".
// This is allowed because 'bot' was originally declared with 'let', not 'const'.
bot = "professorBot";

// Declares a constant 'nicknameIntroduction' using the newly updated value of 'bot' ("professorBot").
const nicknameIntroduction = "My nickname is " + bot + ".";

// Prints the value of 'nicknameIntroduction': "My nickname is professorBot."
console.log(nicknameIntroduction);

// Reassigns the 'bot' variable a second time, changing its value from "professorBot" to "awesomeTeacherBot".
bot = "awesomeTeacherBot";

// Declares a constant 'newNicknameGreeting' and concatenates the text with the latest value of 'bot' ("awesomeTeacherBot").
const newNicknameGreeting = "I love my nickname but I wish people would call me " + bot + ".";

// Prints the value of 'newNicknameGreeting': "I love my nickname but I wish people would call me awesomeTeacherBot."
console.log(newNicknameGreeting);

// Declares a constant named 'favoriteSubject' and assigns it the string literal "Computer Science".
const favoriteSubject = "Computer Science";

// Declares a constant 'favoriteSubjectSentence' and concatenates "My favorite subject is ", 'favoriteSubject', and ".".
const favoriteSubjectSentence = "My favorite subject is " + favoriteSubject + ".";

// Prints the value of 'favoriteSubjectSentence': "My favorite subject is Computer Science."
console.log(favoriteSubjectSentence);

// Prints the final farewell string literal to the console.
console.log("Well, it was nice to talk to you. Have a nice day!");
