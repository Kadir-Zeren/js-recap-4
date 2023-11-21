// for (let i = 0; i <= 100; i++) {
//   console.log(`${i}-Hello Js`);
// }

// const n = prompt("enter your number");
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum += i;
//   console.log(sum);
// }
// console.log(`SUM: ${sum}`);

// const number = prompt("How many number:?");

// for (let sayac = 1; sayac <= number; sayac++) {
//   const randomNumber = Math.round(Math.random() * 100);
//   console.log(`${sayac}. your number's : ${randomNumber}`);
// }
// let i = 1;
// while (i < 10) {
//   console.log(i);
//   i++;
// }
// console.log("bye");

// let not = prompt("lütfen 0-100 arasinda bir not giriniz");

// while (not < 0 || not > 100) {
//     console.log("Not 0'dan küçük veya 100'den büyük olamaz");
//     not = prompt("lütfen 0-100 arasinda bir not giriniz");
// }
// console.log("Notunuz:", not);

// let not = prompt("lütfen 0-100 arasinda bir not giriniz");

// do {
//   not = prompt("lütfen 0-100 arasinda bir not giriniz");
//   if (not < 0 || not > 100) {
//     alert("Not 0'dan kücük veya 100'den büyük olamaz ");
//   }
// } while (not < 0 || not > 100);
// console.log("Notunuz:", not);

let not = prompt("lütfen 0-100 arasinda bir not giriniz");
for (; not < 0 || not > 100; ) {
  alert("Not 0'dan küçük veya 100'den büyük olamaz");
  not = prompt("lütfen 0-100 arasinda bir not giriniz");
}
console.log("Notunuz:", not);
