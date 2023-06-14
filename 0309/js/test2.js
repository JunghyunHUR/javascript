function near_100(x, y){
    if(x == y){
        return false;
    }
    let x1 = Math.abs(x-100);
    let y1 = Math.abs(y-100);

    if(x1 < y1){
        return x;
    }
    if(y1 < x1){
        return y;
    }
    return 0;

}
console.log(near_100(99, 102));