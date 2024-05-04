let arr1 = [1, 1, 1, 1, 1];
let arr2 = [10, 5, 5, 8, 9];
let check = true;

// проверить массив, где все элементы одинаковые:
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] !== arr1[0]) {
    check = false;
    break;
  }
}
console.log(check);

// проверить массив, где все элементы разные:
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] !== arr2[0]) {
    check = false;
    break;
  }
}
console.log(check);
