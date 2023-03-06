console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);

let num = "10";
console.log(`Type of var num: ${typeof num}`);
console.log(`Type of number 10: ${typeof 10}`);
if (typeof num !== typeof 10) {
  num = parseInt(num);
}
console.log(`New type of var num: ${typeof num}`);

let ninePointEight = parseFloat(9.8);
if (ninePointEight !== 10) {
  ninePointEight = Math.round(ninePointEight);
}
console.log(`New ninepointeight= ${ninePointEight}`);

console.log(
  `on is found in python? ${"python".includes(
    "on"
  )}, on is found in jargon? ${"python".includes("on")}`
);

console.log(
  `jargon in found in: \´I hope this course is not full of jargon\´: ${"I hope this course is not full of jargon".includes(
    "jargon"
  )}`
);

console.log(
  `Randon number between 0 and 100: ${Math.floor(Math.random() * 101)}`
);

let random50To100 = Math.floor(Math.random() * 101);
while (random50To100 < 50) {
  random50To100 = Math.floor(Math.random() * 101);
}
console.log(`Randon number between 50 and 100: ${random50To100}`);

console.log(
  `Randon number between 0 and 255: ${Math.floor(Math.random() * 256)}`
);

let random0To100 = Math.floor(Math.random() * 10);
console.log(
  `JavaScript char at ${random0To100 + 1} position is: ${"JavaScript".charAt(
    random0To100
  )}`
);

console.log(" 1\t1\t1\t1\t1");
console.log(" 2\t1\t2\t4\t8");
console.log(" 3\t1\t3\t9\t27");
console.log(" 4\t1\t4\t16\t64");
console.log(" 5\t1\t5\t25\t125");

console.log(
  `You cannot end a sentence with because because because is a conjunction. Deleting because because because: ${"You cannot end a sentence with because because because is a conjunction".substr(
    30,
    24
  )}`
);
