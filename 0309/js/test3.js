function numbers_range(x, y){
    if((x >= 40 && x <= 60 && y >= 40 && y<= 60) || 
       (x >= 70 && x <= 100 && y >= 70 && y<= 100)){
        return true;
    }else{
        return false;
    }
}
console.log(numbers_range(33, 80));
console.log(numbers_range(20, 111));
console.log(numbers_range(44, 77));