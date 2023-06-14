function num(x, y){
    if(x+y >= 50 && x+y <=80){
        return 65;
    }else{
        return 80;
    }
}
console.log(num(50, 20));
console.log(num(10, 20));
console.log(num(100, 20));
console.log(num(40, 20));