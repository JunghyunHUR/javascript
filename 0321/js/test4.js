function max_t(x, y){
    if((x >= 40 && x <= 60) && (y >= 40 && y <= 60)){
        if(x > y){
            return x;
        }else if(x < y){
            return y;
        }else{
            return '두 수가 같습니다';
        }
    }else{
        return "숫자가 40에서 60범위안에 있지 않습니다."
    }
}
console.log(max_t(45, 50));
console.log(max_t(45, 40));
console.log(max_t(45, 45));
console.log(max_t(85, 50));