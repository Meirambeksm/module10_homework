let map = new Map();

map.set(1, "number");
map.set("apple", "string");
map.set(false, "boolean");

console.log(map);

map.forEach((value, key) => {
  console.log(`Ключ — ${key}, значение — ${value}`);
});
