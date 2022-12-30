let a = 5;
let b = 6;

let arr = [5,6]

function swap(arr){
    // arr = [1,2,3]
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    console.log(arr);
}

swap(arr);

console.log(arr);

let n = 4;
let arra = [];

for(let col = 0; col < n; col++){
    arra.push(new Array(55));
}

console.log(arra[2]);