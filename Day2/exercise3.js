let phrase =
  "Love is the best thing in this world. Some found their love and some are still looking for their love";
let pattern = /love/gi;
console.log(
  `How many \"love\" in this phrase: \"${phrase}\": ${
    phrase.match(pattern).length
  }`
);

let because =
  "You cannot end a sentence with because because because is a conjunction";
let pattern2 = /because/gi;
console.log(
  `How many \"because\" in this phrase:\"${because}\": ${
    phrase.match(pattern).length
  }`
);

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
const replaced = sentence.replace(/[%$@&#;!]/g, "");
const splitted = replaced.split(" ");
function count(phraseSplitted) {
  for (let i = 0; i < phraseSplitted.length; i++) {
    let pattern = /phraseSplitted[i]/gi;
    console.log(pattern);
  }
}
count(splitted);

const incomes =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
const regEx = /\d+/;
const paycheck = incomes.match(/\d+/g);
console.log(
  `Total annual income = ${
    12 * parseInt(paycheck[0]) + parseInt(paycheck[1]) + parseInt(paycheck[2])
  }`
);
