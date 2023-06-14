function last_digit(x, y, z){
    if(x > 0 && y > 0 && z > 0){
        return(x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
    }else{
        return false;
    }
}
console.log(last_digit(10, -20, 30));
console.log(last_digit(12, 22, 32));
console.log(last_digit(11, 21, 33));