let word1 = "машина";
let word2 = "шапка";

let vertical = "";

for(let i = 0; i < word2.length; i++){
    
    if(word1.includes(word2[i])){
        for(let k = 0; k < word1; k++){
            if(word1[k] === word2[i]){
                vertical += (word2 + "\n");
            } else {
                vertical += (word1[k] + "\n");
            }
        }
    }
}

console.log(vertical);