let a = 5;
let b = 6;

function swap(c,d){
    let temp = a;
    a = b;
    b = temp;
}

swap(a,b);

console.log(a);
console.log(b);