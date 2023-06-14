function check_char(str, char){
    let ctr = 0;
    for(let i = 0; i <str.length; i++){
        if((str.charAt(i) == char) && i >= 1 && i <= 3){
            ctr = 1;
            break;
        }
    }if(ctr == 1)
        return true;
        return false;
}
console.log(check_char('Python','y'));
console.log(check_char('홍길동','길'));
console.log(check_char('Python','P'));