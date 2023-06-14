// let sum = 0;
// for(let i =1; i<=100; i++){
//     sum = sum+i
// }
// console.log(sum)
// //break
// const user=15;
// switch(user){

//     case 15:
//         console.log("중학생");
//         break;
//         case 18:
//             console.log("고등학생");
//         break;
//         default:
//             console.log("일반인");
// }

// for(let i=1; i<=10; i++){
//     if(i%2===1) console.log(i);
// }
/* 함수
 공장이다.
 
 funcion 함수이름(){
    함수실행문
 } */
// sum(3)
// console.log(sum(3));
// function sum(num){
//     return num+1;
    // console.log(num + 5);
// }
//prompt로 두 개의 변수를 받아 두 수를 곱해서 
//리턴시키는 함수를 만든 후 html에 출력 시키시오

//전역 변수(global variable)
// let num = 10;
// function gNum(){
//     let num = 20;
//     console.log("함수 내부에서 변수 num을 확인한 결과"+num+"이 나옵니다.");
//     // num = 20;
// }
// gNum();
// console.log("함수 외부에서 변수num을 확인한 결과"+num+"이 나옵니다.");

// 문제 1
// let i = 1;
// while(i<10){ 
//     console.log("5x"+i+"="+i*5);
//     i++
// }
// 문제 2

for(let i=2; i<=9; i++){
    console.log(i+"단")
    for(let o=1; o<=9; o++){
        console.log(i+"x"+o+"="+o*i)
    }
}
