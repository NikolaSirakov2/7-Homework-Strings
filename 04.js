let names = "Anna Dosewa Asenowa, Iwo Peew Peew";
let arr = names.split(", ");

let sumOne = 0;
let sumTwo = 0;

for(let k = 0; k < arr[0].length; k++){
    sumOne += arr[0].charCodeAt(k);
}

for(let k = 0; k < arr[1].length; k++){
    sumTwo += arr[1].charCodeAt(k);
}

if (sumOne > sumTwo){
    console.log(arr[0]);
} else if (sumTwo > sumOne){
    console.log(arr[1]);
} else {
    console.log("There ASCII sums are the same.");
}