// Write TypeScript code!
//reverse string

//let str="Hi my name is Andrei"
let str = "Andrei";

function reverse(str: string): string[] {
  let arrayOfLeters: string[] = [];

  for (let i = str.length - 1; 0 <= i; i--) {
    arrayOfLeters.push(str[i]);
  }

  return arrayOfLeters;
}

console.log(reverse(str));