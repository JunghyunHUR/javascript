function myFunc(a, b){
    console.log("a + b 의 값은" + (a+b) + "입니다")
}

// myFunc(10, 11);

function myFunc2(a, b){
    return a+b;
}

const result = myFunc2(10, 3);
console.log(result);


/**
 * return으로는 단 한 개의 값만 내보낼 수 있다.
 * function sub(a, b){
 *     let c = a + b;
 *     let d = a * b;
 *     let e = a % b;
 *     return [c, d, e];
 * }
 */
