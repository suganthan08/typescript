let fruits:string[]=["apple","banana","mango"];

fruits.push("orange");
fruits.unshift("grapes");
console.log("after add:",fruits);

fruits.pop();
fruits.shift();
console.log("after remove:",fruits);

console.log("index of mango:",fruits.indexOf("mango"));
console.log("includes banana?",fruits.includes("banana"));
console.log("length of array:",fruits.length);

fruits.sort();
console.log("sorted:",fruits);