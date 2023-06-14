// 1번 문제

const dt = new Date();
{
let y = dt.getFullYear();
let m = dt.getMonth()+1;
let d = dt.getDate();
let w = ['일', '월', '화', '수', '목', '금', '토'];
let i = dt.getDay()

let h = dt.getHours();
let prepand = (h>=12)?"오후":"오전";
h = (h>=12) ? h - 12: h;
let mm = dt.getMinutes();
let s = dt.getSeconds();

console.log(`오늘은 ${y}년 ${m}월 ${d}일 ${w[dt.getDay()]}요일입니다.  그리고 지금 시간은 오전 ${h}시 ${mm}분 ${s}초 입니다.`);
document.write(`오늘은 ${y}년 ${m}월 ${d}일 ${w[i]}요일입니다.  그리고 지금 시간은 ${prepand} ${h}시 ${mm}분 ${s}초 입니다.` + '<br>');
}

// 2번 문제
{
let ty = dt.getFullYear();
let tm = ('0' + (dt.getMonth()+1)).slice(-2);
let td = ('0' + dt.getDate()).slice(-2);

console.log(ty + '.' + tm + '.' + td);
document.write(ty + '.' + tm + '.' + td + '<br>');
}

// 4번 문제
{
let x = (5+6+7)/2;
let y = Math.sqrt(x*(x-5)*(x-6)*(x-7));

console.log(y);
document.write(y + '<br>');
}

// 5번 문제
function myStr(){
    let str = 'JavaScript ';
    function jsStr(){
        let lastStr = str.charAt(str.length -1);
        str = `${lastStr}${str.substring(0,str.length-1)}`;
        document.getElementById('js').innerHTML = str;
    };
    setInterval(jsStr, 100);
}
myStr();