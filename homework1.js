let entryValue = prompt("Введите значение");
let changeToNum = +entryValue;

if (changeToNum) {
  if (changeToNum % 2 === 0) {
    console.log("Вы ввели четное число");
  } else {
    console.log("Вы ввели нечетное число");
  }
} else {
  console.log("Упс, кажется вы ошиблись");
}
