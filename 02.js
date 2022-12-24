let word1 = "Interesting";
let word2 = "Homework";

let firstPart1 = word1.slice(0, 5);
let secondPart1 = word2.slice(0, 5);

let firstPart2 = word1.substring(5);
let secondPart2 = word2.substring(5);

let new1 = secondPart1 + firstPart2;
let new2 = firstPart1 + secondPart2;

if(new1.length > new2.length){
    console.log(new1.length);
} else if(new2.length > new1.length){
    console.log(new2.length);
} else {
    console.log("They got the same length.");
}

console.log(new1);
console.log(new2);