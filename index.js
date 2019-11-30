const person = ["Lisa", "Kaitlin", "Jan"];

function writeCards(person,event){
  const messArr = [];
  for(let i = 0; i < person.length; i++){
    messArr.push(`Thank you, ${person[i]}, for the wonderful ${event} gift!`);
  }
  return messArr;
}
writeCards(messArr, "surprise");

function countdown(start){
  while (start >= 0) {
    console.log(start);
    start--;
  }
}

countdown(10);