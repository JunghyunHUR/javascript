// 타입 종류를 만든 후 각각의 변수의 타입을 확인하라 typrof 변수명
// 숫자타입
// let inNum = 10; 

//문자형 타입
// let str = "test"; 
//let arrayMember =["철수", "영희" "순이"];
//console.log(arryaMember[0])   =철수
//console.log(arryaMember[1])   =영희
//console.log(arryaMember[2])   =순이

//불리언 타입
// let as = True;


//undefind 타입
// let a;
// console.log(typeof a);
// //null 타입
// // let b = null;

// byte = 1byte
// short = 2byte
// char = 2byte
// int = 4byte
// long = 8byte

// 3/25 = math.floor()

// typescript

//객체 리터럴 방식으로 str 객체 생성자 함수/////
// let str = {
//     name :"철수",
//     age:30,
//     gender:"남자"
// }
// console.log(typeof str);
// console.log(str.name);
// console.dir(str['age']);

// str.gender = "여자";
// console.log(typeof str);
// console.log(str.gender);

// str.major = "백수";
// console.log(str.major)


// function nFuncion(x,y){
//     console.log(x*y);
// }
// function mFuncion(x,y){
//     return x*y;
// }
// let result = function(x,y){
//     return 5*10;
// }

//화살표 함수
// let resert = () =>{
//     return 5*10;
// }

// console.log(result);

// const person = {
//     firstName : "철수",
//     lastName : "안",
//     age :60,
//     fullName : function(){
//         return this.lastName + "" + this.firstName
//     }
// }
// const result = "나이는" + person.age + "이며 이름은" + person.fullName() + "이다";
// console.log(result)

// car 라는 객체를 만들고 
//회사명 : 포르쉐, 자동차명 : 718, 승차인원 : 1명
//메소드 => 자동차가 출발합니다.

//출력문 => 포르쉐의 718 모델 자동차가 출발합니다.

const car ={
    comp : "포르쉐",
    model : 718,
    per : "1명",
    start : function(){
        return this.comp+"의"+this.model
    }
}
const result = car.start() + "가 출발합니다";
console.log(result)