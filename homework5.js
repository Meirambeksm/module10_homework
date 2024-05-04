let arr = ["Cat", "Dog", "Horse", "Cow", "Tiger"];

// lenght of arr:
console.log(arr.length);

// using forEach (самый оптимальный):
arr.forEach((element) => console.log(element));

// using filter
let newArr1 = arr.filter(function (element) {
  console.log(element);
});

// using map
let newArr2 = arr.map(function (element) {
  console.log(element);
});
