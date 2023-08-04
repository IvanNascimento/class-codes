var x, y;

x = 20;
y = 4;

console.log("Start");
console.log(`X: ${x}`);
console.log(`Y: ${y}`);

// Code start here =============

x = x + y;
y = x - y;
x = x - y;

// Code ends here  =============

console.log("End");
console.log(`X: ${x}`);
console.log(`Y: ${y}`);
