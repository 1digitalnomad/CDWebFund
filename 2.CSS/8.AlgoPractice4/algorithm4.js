// Given an array and a value Y, count and print the number of array values greater than Y.

// function GreaterThanY(array,y){
//     var counter=0;
//     for(var i=0;i<array.length;i++){
//      if (array[i] > y){
//                counter++;
//     }
//   }
//      console.log(counter);

// }
// GreaterThanY([2,5,6,7],2)


// Given an array, print the max, min and average values for that array.
// function maxMinAvg(arr){
//     var max = arr[0];  //set it to the first value in the array. here we are saying the max is [0] in the array. so we don't eant to start the for loop i to 0 since we already defined the max is [0]. We should start at [1]. //
//     var min = arr[0];
//     var sum = arr[0];

//     for(var i=1; i < arr.length; i++){
//         sum+=arr[i];
//       if(arr[i]>max){ //is array [i] greater than the current max? Yes or no. Talk like a computer.
//         max = arr[i];// you replace whatever is in the var max = array [0]
//     }else if(arr[i]<min){ // is array [i] less than the min? Yes or no. 
//         min = arr[i];
//     }
//   }
//          console.log(min,max,sum);
// }
// maxMinAvg([2,4,7,3,9]);



// Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

// function replaceNegNum(arr){
  
//   for(i=0; i<arr.length;i++){
//   if(arr[i]<0){
//   arr[i] ='Dojo';
//     }
//   }
//       return arr;

// }

// replaceNegNum([2,-4,5,-7]);
// console.log(replaceNegNum([2,-4,5,-7]));



// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].

function removeVals(arr){
  for()

  arr.pop()


}
return


removeVals([20,30,40,50,60,70],2,4);
console.log()