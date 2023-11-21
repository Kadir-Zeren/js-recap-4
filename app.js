for (let i = 0; i <= 100; i++) {
  console.log(`${i}-Hello Js`);
}

const n = prompt("enter your number");
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
  console.log(sum);
}
console.log(`SUM: ${sum}`);

const number = prompt("How many number:?");

for (let sayac = 1; sayac <= number; sayac++) {
  const randomNumber = Math.round(Math.random() * 100);
  console.log(`${sayac}. your number's : ${randomNumber}`);
}
