function reverse_str(str){
    str += '';
    return str.split("").reverse().join('');
}

console.log(reverse_str("안녕하세요? 반갑습니다."));
console.log(reverse_str(123456789));