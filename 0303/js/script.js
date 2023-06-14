// 1번 문제

function leapyear(year){
    return (year % 100 === 0) ? (year % 400 ===0) : (year % 4 ===0);
}
console.log(leapyear(2023));
console.log(leapyear(2024));
console.log(leapyear(3000));
console.log(leapyear(2000));



// 2번 문제
for(let y = 2023 ; y<=2100; y++ ){
    let dt = new Date(y, 0, 1);
    if(dt.getDay() === 0){
        console.log(`1월 1일이 일요일인 해는 ${y} 입니다.`)
    }
}




 