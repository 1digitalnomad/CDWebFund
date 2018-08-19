// Return the given array, after setting any negative values to zero.  For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].

// function negZero(array){
//     for(i=0;i< array.length;i++){
//         if(array[i]<0){
//         array[i]=0
//     }
//     }
//     return array;
// }
// negZero([3,5,-7,-13]);
// console.log(negZero([3,5,-7,-13]));

// Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  For example moveForward( [1,2,3]) should return [2,3,0].

// function moveForward(array){
//     for(i=0; i<array.length;i++){
//     if(array[i]<5){
//       array[3]= 0
//     }
//  }
//      array.splice(0,1);
 
//  return array;
//  }
//  moveForward([2,5,10]);
//  console.log(moveForward([2,5,10]));
 


// Given an array, return an array with values in a reversed order.  For example, returnReversed([1,2,3]) should return [3,2,1].

// function returnReversed(array){

// var max = [0];
//     for(i=1;i<array.lenght; i++){
//     if(array[i]<max){
//         array[i]=array[2]
//     }
// }



// return array;
// }

// returnReversed([70,71,72]);
// console.log(returnReversed(array));

// Create a function that changes a given array to list each original element twice, retaining original order.  Have the function return the new array.  For example repeatTwice( [4,”Ulysses”, 42, false] ) should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].