let x = "";

switch (typeof x) {
  case "number":
    console.log("Тип х число");
    break;
  case "string":
    console.log("Тип х строка");
    break;
  case "boolean":
    console.log("Тим х boolean");
    break;
  default:
    console.log("Тип x не определен");
}
