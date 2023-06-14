function max_num(x, y, z){
    let max_val = 0;
    if(x > y){
        max_val = x;
    }else{
        max_val = y;
    }
    if(z > max_val){
        max_val = z;
    }
    return max_val;
}
console.log(max_num(12, 2, 30));
console.log(max_num(31, 2, 30));
console.log(max_num(12, 42, 30));