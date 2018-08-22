// Biggie Size - Given an array, write a function that changes all positive numbers in the array to "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

// function pos(array) {
//     for(var x=0; x < array.length; x++){
//          if(array[x]>0){
//              array[x] = 'big';
//          }
//     }
// return array;
// }

// y = pos([-2,10,30,70,-1]);
// console.log(y);



// Print Low, Return High - Create a function that takes array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

// function printLowHigh(array) {
//     var max = array[0];
//     var min = array[0];

//     for (var x=1; x<array.length; x++){
//         if(array[x]>max){
//             max =  array[x];
//         }
//         else if(array[x]<min){
//             min = array [x];
//         }
//     }
//   console.log(min);
// return max;
// }

// y = printLowHigh([4,7,11,23]);
// console.log(y);


// Print One, Return Another - Build a function that takes array of numbers.  The function should print second-to-last value in the array, and return first odd value in the array.
// function another(array) {
//     var odd = 0;
//     var temp = 0;
//     for(var x=0; x <array.length; x++){
      
//         if(array[x] % 2 ===1){
//             odd = array[x];
//         }
//        temp = array[array.length-2];
//     }
//     console.log(temp);
//     return odd;
// }


// y = another([4,7,9,10,22,24,30]);
// console.log(y);


// Double Vision - Given array, create a function to return a new array where each value in the original has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing original.
// function doubleVision(arr) {
    
//     for(var x=0; x < arr.length; x++){
//         arr[x] = arr[x] * arr[x];
      
//     }
//    return arr; 
// }

// doubleVision([3,7,10]);
// console.log(doubleVision([3,7,10]));


// Count Positives - Given array of numbers, create function to replace last value with number of positive values.  Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

// function countPos(array) {
    
//     var sum =0;
    
//     for(var x=1; x<array.length; x++){
//         if(array[x]>0){
//             sum+=array[x];
//         }
//     }
//   return sum;
// }

// countPos([-3,4,5,6]);
// console.log(countPos([-3,4,5,6]));



// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!"
function array(arr) {
   var pos = 0;

    for(var x=0; x<arr.length; x++){
            if(arr[x] % 2 ===1)

    }

}
console.log
console.log 
}

array([30,4,90,3,7,4,2,8]);


// Increment the Seconds - Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc).  Afterward. console.log each array value and return arr.



// Previous Lengths - You are passed an array containing strings.  Working within that same array, replace each string with a number - the length of the string at previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4].




// Add Seven to Most - Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.



// Reverse Array - Given an array, write a function that reverses values, in-place.  Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).



// Outlook: Negative - Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].



// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array elements are "food", then print "I'm hungry" once.



// Swap Toward the Center - Given array, swap first and last, third and third-to-last, etc.  Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].



// Scale the Array - Given an array arr and a number num, multiply all values in arr by num, and return the changed array arr.  For example, scaleArray([1,2,3],3) should return [3,6,9].