let num = 10;
num = "test";
console.log(num);

function add(n1, n2) {
  return n1 + n2;
}

console.log(add(10, 20));
console.log(typeof add(10, 20));
console.log(add(10, "20"));
console.log(typeof add(10, "20"));

function displayData(name = "Un", age, country) {
  return `${name}, ${age}, ${country}`;
}
console.log(displayData("Ali"));

