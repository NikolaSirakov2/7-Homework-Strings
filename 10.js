let string = "Hipopotamus";
let newString = "";

for(let i = 0; i < string.length; i++){
    let code = string.charCodeAt(i);
    newString += String.fromCharCode(code + 5);
}

console.log(newString);