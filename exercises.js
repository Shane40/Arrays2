// QUESTION 1
// Define a function max() that takes 
// two numbers as arguments and returns 
// the largest of them. Use the 
// if-then-else construct available 
// in JavaScript.

function max (a, b) {
   if (a > b ) {
            console.log (a);
    } else {
    		console.log (b);
    	}};

    	max(6, 8);


// // QUESTION 2
// // Define a function maxOfThree() that 
// // takes three numbers as arguments and 
// // returns the largest of them.

// function maxOfThree(){
//     //...
// }

function maxofThree (x, y, z) {
   if (x > y && x > z ) {
            console.log (x);
    } else if (y > x && y > z ) {
    	console.log (y);     
    } else {
    		console.log (z);
    	}};

maxofThree(6, 100, 10);

// // QUESTION 3
// // Write a function that takes a 
// // character (i.e. a string of length 1) 
// // and returns true if it is a vowel, 
// // false otherwise.

var vowels = ["a", "e", "i", "o", "u"];
function isVowel(char){
    for(var i = 0; i < vowels.length; i++){
        if(char === vowels[i]){
            return true;
         }
    }
    return false;

};
isVowel();


// // QUESTION 4 
// // Write a function translate() that
// //  will translate a text into 
// //  "rÃ¶varsprÃ¥ket". That is, double
// //   every consonant and place an 
// //   occurrence of "o" in between. 
// //   For example, translate("this is fun")
// //   should return the string "tothohisos 
// //   isos fofunon".

function rovarspraket(phrase){
    //...
}

//UGH!!!!!!!!!!!!!!!!!!!!!!!

// // QUESTION 5
// // Define a function sum() and a 
// // function multiply() that sums and 
// // multiplies (respectively) all the 
// // numbers in an array of numbers. For 
// // example, sum([1,2,3,4]) should 
// // return 10, and multiply([1,2,3,4]) 
// // should return 24.
// // ---------------------

	
var array = [1,2,3,4,5,6,7,8,9,10];
	var total = 0;
	var sum = function (){
		array.forEach(function(x){
			total += x; // use "this" when something that's changing
			console.log(total);
			});
};
sum();

function mult (){

}
	
var array = [1,2,3,4,5,6,7,8,9,10];
	var total = 1;
	var mult = function (){
		array.forEach(function(x){
			total *= x; // use "this" when something that's changing
			console.log(total);
			});
};
mult();


// // QUESTION 6
// // Define a function reverse() that 
// // computes the reversal of a string. 
// // For example, reverse("jag testar") 
// // should return the string "ratset gaj".
// // ---------------------
var array = [];
function reverse(){
	array.reverse ();
	array.push ();
};
reverse("jesus");

function reverse (){
	return.reverse("jesus");
};

// // QUESTION 7
// // Write a function findLongestWord() 
// // that takes an array of words and 
// // returns the length of the longest one.
// // ---------------------

// function findLongestWord(words){
//     //...
// }

// // QUESTION 8
// // Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// //

// function filterLongWords(words, i){
//     //...
// }

// // QUESTION 9
// // Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// // ---------------------

// function charFreq(string){
//     //...
// }