function num(x, y){
    if(x == 8 || y == 8 || x+y == 8 || Math.abs(x-y) == 8){
        return true;
    }else{
        return false;
    }
}
console.log(num(8,10));
console.log(num(10,8));
console.log(num(3,5));
console.log(num(10,2));
console.log(num(2,10));
console.log(num(-80,-90));
console.log(num(-12,-20));


// x == 8 || y ==8 return true;

// x + y == 8 || Math.abs(x - y) == 8 return true;

// return false;