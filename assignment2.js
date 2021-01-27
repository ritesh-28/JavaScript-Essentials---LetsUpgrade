// LetsUpgrade JavaScript Essential - Assignmet 2
// Pandey Ritesh Kumar (riteshkumar.dp@somaiya.edu)


/********** QUESTION 1 **********/ 

const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
console.log(clothes[0]);
// ANSWER : Undefined
/* when length of array clothes is reduced to 0, it deletes all the elements of the array. Hence, clothes[0] is undefined */


/********** QUESTION 2 **********/ 
var arr = [1, 3, 6, 8, 2, 10];
var i, sum = 0;
for (i=0; i<arr.length; i++) {
    sum = sum +arr[i];
}
console.log(sum);