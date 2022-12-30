let word1 = "носач";
let word2 = "черта";

let vertical = '';

for (let i = 0; i < word2.length; i++) {
  if (word1.includes(word2[i])) {
    for (let k = 0; k < word1.length; k++) {
      if (word1[k] === word2[i]) {
        vertical += word2 + "\n";
      } else {
        vertical += word1[k] + "\n";
      }
    }
    break;
  }
}

if (vertical === '') {
  console.log("Редиците нямат общ знак!");
} else {
  console.log(vertical);
}
