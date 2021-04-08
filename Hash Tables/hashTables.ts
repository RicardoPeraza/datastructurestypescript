
// Write TypeScript code!
//hast tables
//given an array = [2,5,1,2,3,5,1,2,4]
//i should return 2
//given an array = [2,1,1,2,3,5,1,2,4]
//i should return 1
//given an array = [2,3,4,5]
//i should return undefined

//naive
/*
function fistRecurringCharacter(input: number[]):number {
  for (let i = 0; i < input.length; i++) {
    for (let j =i+1; j < input.length; j++) {
        if(input[i]=== input[j]){
         return input[i];
        }
    }
  }
  return undefined;
}

 let arr1:number[]=[2,5,1,2,3,5,1,2,4];

 console.log(fistRecurringCharacter(arr1));*/

//hash tables o(n)

function fistRecurringCharacter(input: number[]): number {
  let map = {};

  for (let i = 0; i <= input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map);
  }

  return undefined;
}
