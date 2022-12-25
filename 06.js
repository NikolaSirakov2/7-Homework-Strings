let string = "what is this test";
let arr = string.split(" ");
let newString = "";

for(let i = 0; i < arr.length; i++){
    let newWord = arr[i][0].toUpperCase();

        for(let k = 1; k < arr[i].length; k++){
            newWord += arr[i][k];
        }
    
    newString += (newWord + " ");
}

console.log(newString);