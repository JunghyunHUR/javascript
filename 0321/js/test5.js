function solution(str, s){
    let ok = false;
    for(let i = 1; i < 4; i++){
        if(str.charAt(i) == s){
            ok = true;
            return ok;
        }
    }return ok;
}
console.log(solution('asdfg', 'a'));
console.log(solution('asdfg', 's'));
console.log(solution('asdfg', 'd'));
console.log(solution('asdfg', 'g'));
console.log(solution('a', 'a'));