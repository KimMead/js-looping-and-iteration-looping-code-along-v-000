// Code your solutions in this file
const names = ["Ada", "Brendan", "Ali"]
function writeCards(name) {
  for (let i = 0; i < names.length; i++) {
  console.log('Thank you, ${name}, for the wonderful birthday gift.');
}
return names;
}

function countdown(){
  let countdown = 10;
  while (countdown > 0) {
    console.log(countdown++);
  }
}

const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
// 
//   return gifts;
// }

let countup = 0;
while (countup < 10) {
  console.log(countup++);
}
