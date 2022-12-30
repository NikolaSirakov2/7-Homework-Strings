let word1 = "кораб";
let word2 = "хърду";

function cross(vert, horizon){
    var string = "";
        for(let k = 0; k < vert.length; k++) {
            if(horizon.charAt(0) === vert.charAt(k)) {
                string += horizon + "\n";
            } else {
                string += vert.charAt(k) + "\n"
            }
        }
    return string;
}

console.log(cross(word1, word2));