function solution(s){
    let n = 0;
    let n2 = 0;
    for(let i = 0; i < s.length ; i++){
        let lowercase = s.toLowerCase();
        let p = lowercase[i];
        if(p === 'p'){
            n += 1;
        }
    }
    for(let i = 0; i < s.length ; i++){
        let lowercase = s.toLowerCase();
        let p = lowercase[i];
        if(p === 'y'){
            n2 += 1;
        }
    }
    // console.log('p의 갯수 :'+n);
    // console.log('y의 갯수 :'+n2);
    // console.log('총 문자의 갯수 :'+s.length);
    if(s.length <= 50){
        if(n==n2 || n == 0 && n2 == 0){
            return true;
            // console.log(true);
        }else{
            return false;
            // console.log(false);
        }
    }else{
        return false;
        // console.log(false);
    }
}

console.log(solution('pppyyy'));

function solution2(s){
    let p_cnt = 0;
    let y_cnt = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] == 'p' || s[i] == 'P'){
            p_cnt++;
        }else if(s[i] == 'y' || s[i] == 'Y'){
            y_cnt++;
        }
    }return p_cnt === y_cnt ? true : false;
}
console.log(solution2('pyprpy'));

function solution3(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}
console.log(solution3('pppyyy'));

function solution4(s){
    let p = s.match(/p/gi);
    let y = s.match(/y/gi);
    let pct = (p != null)? p.length : 0;
    let yct = (y != null)? y.length : 0;
    return pct == yct ? true : false;
}
console.log(solution4('pypy'));