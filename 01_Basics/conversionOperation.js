let score = 33;
console.log(typeof score);

score = "hello";
console.log(typeof score);

score = " ";
console.log(typeof score);

score = Number(score);
console.log(typeof score);

score = "22d";
score = Number(score);
console.log(typeof score);
console.log(score);


score = undefined;
console.log(score);
score = true;
console.log(typeof score);
console.log(score);

//score = 1
score = "" //false
score = " " //true
score = Boolean(score)
console.log(typeof score);
console.log(score);

score = 232 //true
score = String(score)
console.log(typeof score);
console.log(score);
