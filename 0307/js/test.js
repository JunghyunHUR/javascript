//3번
function f_last(str){
    if(str.length<=1){
        return str;
    }
    mid_char = str.substring(1,str.length-1);
    return (str.charAt(str.length-1)) + mid_char + str.charAt(0);
}
console.log(f_last('apples'));
//5번
function test37(x){
    if(x % 3 == 0 || x % 7 == 0){
        return true;
    }else{
        return false;
    }
}
console.log(test37(11));
console.log(test37(12));
console.log(test37(13));
console.log(test37(14));
console.log(test37(15));
//6번
function f_back(str){
    if(str.length>=3){
        const bk = str.substring(str.length-3);
        return bk + str + bk;
    }else{
        return false;
    }
}
console.log(f_back("ab"));
console.log(f_back("abc"));
console.log(f_back("abcdef"));
console.log(f_back("aaa"));
console.log(f_back("aaaaaa"));


