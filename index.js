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
