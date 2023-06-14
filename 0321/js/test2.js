function near_100(x, y){
    let x1 = Math.abs(x-100);
    let y1 = Math.abs(y-100);
    if(x1 < y1){
        return x;
    }
    if(y1 < x1){
        return y;
    }else{
        return false;
    }
}

console.log(near_100(99, 98));
console.log(near_100(-99, -98));
console.log(near_100(99, 99));
console.log(near_100(101, 102));