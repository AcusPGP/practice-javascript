// For loop
console.log("--For loop--\n");
for (let i = 0; i <= 10; i++) {
     console.log(i);
}
console.log("\n");

// For/in loop
console.log("--For in loop--\n");
var objects = {
     role: "Backend",
     tools: "VSCode",
     languages: "JavaScript"
}
for (var temp in objects) {
     console.log(temp);
     console.log(objects[temp]);
}
var names = ["A", "B", "C"];
for (var temp in names) {
     console.log(names[temp]);
}
console.log("\n");

// For/of loop: can not use for object variable -> solution: transfer object to an array 
console.log("--For of loop--\n");
for (var temp of names) {
     console.log(temp);
}
for (var temp of Object.values(objects)) {
     console.log(temp);
}
console.log("\n");

// While loop
console.log("--While loop--\n");
var i = 0;
while (i < names.length) {
     console.log(names[i]);
     i++;
}
console.log("\n");

// Do while loop
console.log("--Do while loop--\n");
var a = 0;
do {
     console.log(names[a]);
     a++;
} while(a < names.length)
console.log("\n");