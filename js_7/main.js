let user = {name: 'Sasha'};
let x;

console.log(typeof(123));
console.log(typeof('gusdbnisgn'));
console.log(typeof(true));
console.log(typeof(null));
console.log(typeof(user));
console.log(typeof(x));

let a = 10;
let b = 10;

let square = a * b;

console.log(square);

for(let i = 0; i <= 50; i += 10) {
    let a = 10 + i;
    let b = 10 + i;

    let square = a * b;

    console.log(square);
}

nextPrime:
  for (var i = 2; i <= 100; i++) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    console.log( i );
  }