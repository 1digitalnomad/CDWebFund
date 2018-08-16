// this is part 2 of the assignment. Copy/paste the starter code from the platform like seen below 
//and edit the code to make it work.



// function printaverage(array){
//     var sum=0
//     for(var i=0; i<array.length; i++){
//         console.log(i);
        

//     }
// }
// printaverage([1,4,5]);



//1) Analyze an array’s values and return the average of its values.

function printAverage(x){
    var sum = 0;
    for(i=0; i<x.length; i++){
        sum=sum+x[i];
    }
  {
    return sum/x.length;
    }
 }
 y = printAverage([1,2,3]);
 console.log(y); // should log 2

  y = printAverage([2,5,8]);
 console.log(y); // should log 5




//  2.) Create an array with all the odd integers between 1 and 255 (inclusive)
 
 function returnOddArray(){
    var array = [ ]
    for(i=1; i<=255; i++)
    if(i%2==1)
      array.push(i);{
      return(array)
    }

    // your code here
 }
 y = returnOddArray();
 console.log(y); // should log [1,3,5,...,253,255]






 //3.) Square each value in a given array, returning that same array with changed values.

 function squareValue(x){
    var x 
    for (i=0; i< x.length; i++){
      x[i]=x[i]*x[i];
    }
    
      return x;
   }
   y = squareValue([1,2,3]);
   console.log(y); // should log [1,4,9]
     
   y = squareValue([2,5,8]);
   console.log(y); // should log [4,25,64å