let string = "12345432";

let part1 = "";
let part2 = "";

for(let i = 0; i <string.length/2; i++){
    part1 += string[i];
}

for(let k = string.length-1; k > string.length/2 - 1; k--){
    part2 += string[k];
}

if(part1 === part2){
    console.log("да.");
} else {
    console.log("не.");
}