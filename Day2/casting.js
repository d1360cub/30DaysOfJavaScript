let num = "10";
console.log(typeof num);
let numInt = parseInt(num);
console.log(numInt); // 10
console.log(typeof numInt);

let numInt2 = Number(num);
console.log(numInt2); // 10
console.log(typeof numInt2);

let numInt3 = +num;
console.log(numInt3); // 10
console.log(typeof numInt3);

let num2 = "9.81";
console.log(typeof num2);
let numFloat = parseFloat(num2);
console.log(numFloat); // 9.81
console.log(typeof numFloat);

let numFloat2 = Number(num2);
console.log(numFloat2); // 9.81
console.log(typeof numFloat2);

let numFloat3 = +num2;
console.log(numFloat3); // 9.81
console.log(typeof numFloat3);

let num3 = 9.81;
let numInt4 = parseInt(num3);
console.log(numInt4); // 9
