for (let i = 25; i >= 0; i--) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// ---------------

for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}
// ---------------
for (let i = 20; i >= 0; i--) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// ---------------
// starting values
let z = 0;
let x = 1;

console.log(z);
console.log(x);

// now generate the next 8 values
for (let i = 2; i < 10; i++) {
  const next = z + x;
  console.log(next);
  z = x;
  x = next;
}
// ---------------
for (let n = 1; n <= 3; n++) {
  console.log(`--- Table for ${n} ---`);
  for (let m = 1; m <= 10; m++) {
    console.log(`${n} x ${m} = ${n * m}`);
  }
  console.log(); // blank line between tables
}
// ---------------
for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}
