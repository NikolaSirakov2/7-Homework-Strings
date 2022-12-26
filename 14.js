let n = "4";

function valueOfFactorial(a){
    if(typeof a !== "number"){
        return null;
    } else {
        let factorial = 1;
        for(let i = a; i > 0; i--){
            factorial *= i;
        }
        return factorial;
    }
}

console.log(valueOfFactorial(n));