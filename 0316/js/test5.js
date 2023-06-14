function solution(str){
    let vowel_list = 'aeiouyAEIOUY';
    let vcount = 0;
    for(let x = 0; x < str.length; x++){
        if(vowel_list.indexOf(str[x]) !== -1){
            vcount += 1;
        }
    }
    return vcount;
}

console.log(solution('Hi My name is James Lee!'));
console.log(solution('abc'));