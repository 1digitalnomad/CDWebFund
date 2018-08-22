// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

// function return255(arr){
//     var array = [];
//      for(var x=1; x<=arr; x++){
//          array.push(x); 
//        }
//        {
//            return array;
//        }
//    }
   
//      y=return255(255);
//    console.log(y);
 


// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

// function evenNum(even){
//     var sum = 0;
//         for(var x=1; x<=even; x++){
//             if(x % 2 === 0){
//                 sum+=x;
//             }
    
//     }
//     return sum;
//     }
//     y = evenNum(4);
//     console.log(y);





// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

// function oddOne(sum){
//     var odd = 0;
//      for(var x=1; x<=sum; x++){
//      if(x % 2===1){
//          odd+=x;
//      } 
//  }
//  return odd;
//  }
//  y = oddOne(5000);
//  console.log(y);


// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

// function array(arr){
//     var sum = 0;
//     for(var x=0; x<arr.length; x++){
//         sum += arr[x];
//     }
//     return sum;
// }
// x = array([5,3,100.-7]);
// console.log(x);

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

// function array(arr){
//     var max = [0];
    
//     for(var x=1; x<arr.length;x++){
//         if(arr[x]>max){
//             max=arr[x];
//         }
//     }
//     return max;
    
//     }
    
//     x = array([4,5,25,10,2]);
//     console.log(x);

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

// function avg(find){
//     var sum = 0;
//     for(var x=0; x<find.length; x++){
//         sum=sum + [x];
//     }
//     return sum/find.length;
// }

// y = avg([3,5,4,22]);
// console.log(y);


// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

// function array(odd){
//     var odds = [0];
//     for(var x=0;x<=odd;x++){
//         if(x % 2 ===1){
//             odds.push(x);
//         }

//     }
// return odds;
// }
//   odd=array(50);
//   console.log(odd);

// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

// function array(y){
    
//     var counter = 0;
//     for(var x=0; x < y.length; x++){
//         if(y[x] > 30) {
//             counter++;
//         }
//     }
//     return counter;
// }
// y = array([4,47,34,77,99]);
// console.log(y);


// Squares - Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

// function squareoff(arr){

//     for(var x=0; x <arr.length; x++){
//       arr[x] = arr[x] * arr[x];
      
//     }
//       return arr;
//       }
  
//   y = squareoff ([3,5,4]);
//   console.log(y);

// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

// function negZero(arr){
//    for(var x=0;x<arr.length;x++){
//        if(arr[x]<0){
//            arr[x]=0;
//        }
//    }
// return arr;
// }


// z = negZero([-4,78,-33,9]);
// console.log(z);


// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

// function minMaxAvg(find){
//     var max = find [0];
//     var min = find [0];
//     var sum = 0;
    
//     for(var x=1;x<find.length;x++){
//         sum=sum+find[x];
//         if(find[x]>max){
//             max = find[x];
//         }
//         else if(find[x]<min){
//             min=find[x];
//         }
//           }
    
//     return [max,min,sum/find.length];
//     }
    
//     z = minMaxAvg([30,45,20,100,80,4]);
//     console.log(z);


// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

// function swap(arr){
// var temp = arr[arr.length-1]; //this is a container of information. remember that.
// arr[arr.length-1] = arr[0];
// arr[0]=temp;
// console.log(arr);

// }
// var num = [2,4,5,7];
// y = swap(num);
// console.log(y);

// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function string(arr){
 
    for (var x = 0; x < arr.length; x++){
          if(arr[x] < 0){
              arr[x]="Dojo";
          }
         
      }
      console.log(arr);
    return arr;
  }
  
  
  string([-3,-4,7]);
  console.log(string([-3,-4,7]));