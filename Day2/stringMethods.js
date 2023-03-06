let js = "JavaScript";
console.log(js.length); // 10
let firstName = "Asabeneh";
console.log(firstName.length); // 8
let string = "JavaScript";
let firstLetter = string[0];

console.log(firstLetter); // J

let secondLetter = string[1]; // a
let thirdLetter = string[2];
let lastLetter = string[9];

console.log(lastLetter); // t

let lastIndex = string.length - 1;

console.log(lastIndex); // 9
console.log(string[lastIndex]); // t

console.log(string.toUpperCase()); // JAVASCRIPT
console.log(firstName.toUpperCase()); // ASABENEH
let country = "Finland";
console.log(country.toUpperCase()); // FINLAND
let string2 = "JavasCript";
console.log(string2.toLowerCase()); // javascript
let firstName2 = "Asabeneh";
console.log(firstName2.toLowerCase()); // asabeneh
let country2 = "Finland";
console.log(country2.toLowerCase()); // finland

console.log(string.substr(4, 6)); // Script (deprecated)
console.log(country.substr(3, 4)); // substr method is deprecated, not completely eliminated yet

console.log(string.substring(0, 4)); // Java
console.log(string.substring(4, 10)); // Script
console.log(string.substring(4)); // Script
console.log(country.substring(0, 3)); // Fin
console.log(country.substring(3, 7)); // land
console.log(country.substring(3)); // land

let string3 = "30 days of javascript";
console.log(string3.split()); // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string3.split(" ")); // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]
console.log(firstName.split()); // Change to an array -> ["Asabeneh"]
console.log(firstName.split("")); // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]
let countries = "Finland, Sweden, Norway, Denmark, and Iceland";
console.log(countries.split(",")); // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(", ")); //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland" ]

let string4 = "   30 Days Of JavaScript   ";
console.log(string4);
console.log(string4.trim(" "));
let firstName3 = " Asabeneh ";
console.log(firstName3);
console.log(firstName3.trim()); // still removes spaces at the beginning and the end of the string

console.log(string3.includes("Days")); // false - it is case sensitive!
console.log(string3.includes("days")); // true
console.log(string3.includes("Script")); // false
console.log(string3.includes("script")); // true
console.log(string3.includes("java")); // true
console.log(string3.includes("Java")); // false
console.log(country.includes("fin")); // false
console.log(country.includes("Fin")); // true
console.log(country.includes("land")); // true
console.log(country.includes("Land")); // false

console.log(string3.replace("javascript", "Python")); // 30 Days Of Python
console.log(country.replace("Fin", "Green")); // Greenland

console.log(string3.charAt(0)); // 3
let lastIndex2 = string3.length - 1;
console.log(string3.charAt(lastIndex2)); // t

console.log(string3.charCodeAt(3)); // d ASCII number is 100
console.log(string3.charCodeAt(lastIndex2)); // t ASCII is 116

let string5 = "30 Days Of JavaScript";
console.log(string5.indexOf("D")); // 3
console.log(string5.indexOf("Days")); // 3
console.log(string5.indexOf("days")); // -1
console.log(string5.indexOf("a")); // 4
console.log(string5.indexOf("JavaScript")); // 11
console.log(string5.indexOf("Script")); //15
console.log(string5.indexOf("script")); // -1

let string6 =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(string6.lastIndexOf("love")); // 67
console.log(string6.lastIndexOf("you")); // 63
console.log(string6.lastIndexOf("JavaScript")); // 38

let days = "30";
console.log(days.concat("Days", "Of", "JavaScript")); // 30DaysOfJavaScript
let sufix = "Fin";
console.log(sufix.concat("land")); // Finland

let phrase = "Love is the best to in this world";
console.log(phrase.startsWith("Love")); // true
console.log(phrase.startsWith("love")); // false
console.log(phrase.startsWith("world")); // false
console.log(country.startsWith("Fin")); // true
console.log(country.startsWith("fin")); // false
console.log(country.startsWith("land")); //  false

console.log(phrase.endsWith("world")); // true
console.log(phrase.endsWith("love")); // false
console.log(phrase.endsWith("in this world")); // true
console.log(country.endsWith("land")); // true
console.log(country.endsWith("fin")); // false
console.log(country.endsWith("Fin")); //  false

console.log(string6.search("love")); // 2
console.log(string6.search(/javascript/gi)); // 7

let loveNorLove =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(loveNorLove.match("love")); // ['love', index: 2, input: 'I love JavaScript. If you do not love JavaScript what else can you love.', groups: undefined]
let pattern = /love/gi;
console.log(loveNorLove.match(pattern)); // ["love", "love", "love"]
let txt =
  "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge";
let regEx = /\d+/;
/* d with escape character means d not a normal d instead acts a digit
  + means one or more digit numbers,
  if there is g after that it means global, search everywhere.*/
console.log(txt.match(/\d+/)); // [ '2019', index: 3, input: 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge', groups: undefined]
console.log(txt.match(/\d+/g)); // ["2019", "30", "2020"]

let toRepeat = "love";
console.log(toRepeat.repeat(10)); // lovelovelovelovelovelovelovelovelovelove
