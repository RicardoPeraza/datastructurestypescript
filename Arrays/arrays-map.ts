// Import stylesheets
import "./style.css";

//interview exercise 0(n^2)

var array1: string[] = ["a", "b", "c", "x", "w"];
var array2: string[] = ["z", "y", "a"];
//0(n^2)
/*function constainCommonItem(arr1: string[], arr2: string[]): boolean {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(constainCommonItem(array1, array2));

*/
/*
function constainCommonItem(arr1:string[],arr2:string[]):boolean{

let map=new Map();

for(let i=0;i<arr1.length;i++){
  if(!map[i]){
    const item=arr1[i];
    map.set(item,true);
  }

}
console.log(map)

for(let j=0; j<arr2.length;j++){
  if(map.has(arr2[j])){
    return true
  }
}
return false;
}

console.log(constainCommonItem(array1,array2))*/

function changeArrayToObject(array: string[]): object {
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    if (!map[i]) {
      const item = array[i];
      map.set(item, true);
    }
  }
  return map;
}

function constainCommonItem(arr1: string[], arr2: string[]): boolean {
  let map: any = new Map();
  map = changeArrayToObject(arr1);

  for (let i = 0; i < arr2.length; i++) {
    if (map.has(arr2[i])) {
      return true;
    }
  }
  return false;
}

console.log(constainCommonItem(array1,array2));