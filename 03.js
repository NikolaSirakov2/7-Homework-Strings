let stringOne = "Gorilla";
let stringTwo = "Godzilla";

if(stringOne.length > stringTwo.length){
    console.log("First string is bigger than second.");
} else if (stringTwo.length > stringOne.length){
    console.log("Second string is bigger than first.");
} else {
    console.log("This two strings have the same length.");
}

for(let i = 0; i < stringOne.length; i++){
    if(stringOne[i] !== stringTwo[i]){
        console.log(`${i+1} ${stringOne[i]}-${stringTwo[i]}`);
    }
}