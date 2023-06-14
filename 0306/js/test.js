// 6번 문제
function testh(x){
    return ((Math.abs(100-x) <= 20) || (Math.abs(400-x)<=20));
}
// 7번 문제
function positive(x,y){
if(x <0 && y>0 || x>0 && y<0){
    return true;
}else{
    return false;
}
}
console.log(testh(110));
console.log(positive(10, 20));
console.log(positive(15, -13));