//creating arrays
array=["apple",5,false];
//printing array
console.log(array);
console.log(array[0]);
//checking type of array elements
console.log(typeof array[0]);
console.log(typeof array[1]);
console.log(typeof array[2]);
//updating values of eleemnts
array[0]="orange";
console.log(array);

console.log(array.length)

//array methods
// adding elemnts 
array.push("pineapple");
console.log(array);
//removing elemnts
array.pop();
console.log(array)
//adding elents from start
array.unshift("pineapple");
console.log(array);
//removing from start
array.shift();
console.log(array);
//adding at cetain index
array.splice(1,0,"newelemnt");
console.log(array);
//remvoing from specific place
array.splice(1,1);
console.log(array);
//finding index of specifi elemtn
console.log(array.indexOf("orange"));
//soritng the array 
names=["jhon","denime","alice"];
console.log(names.sort());
console.log(names);
//reversing the array
array.reverse();
console.log(array);





