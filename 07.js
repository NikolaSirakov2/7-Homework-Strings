let string = "agro hi";
let words = string.split(" ");
let count = words.length;
let longestWord = words[0].length;

for(let i = 1; i < words.length; i++){
    if(words[i].length > words[i-1].length){
        longestWord = words[i].length;
    }
}

console.log(`${count} думи, най-дългата е с ${longestWord} символа.`);