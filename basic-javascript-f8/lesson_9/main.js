// For loop
console.log("--For loop--\n");
for (let i = 0; i <= 10; i++) {
     console.log(i);
}
console.log("\n");

// For/in loop
console.log("--For in loop--\n");
var names = ["A", "B", "C"];
for (var temp in names) {
     console.log(names[temp]);
}

// For/of loop
console.log("--For of loop--\n");
for (var temp of names) {
     console.log(temp);
}

// While loop
console.log("--While loop--\n");
var i = 0;
while (i < names.length) {
     console.log(names[i]);
     i++;
}

// Do while loop
console.log("--Do while loop--\n");
var a = 0;
do {
     console.log(names[a]);
     a++;
} while(a < names.length)
