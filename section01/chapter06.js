// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환

let num = 10;
let str = "20"

const result = num + str;
// console.log(result); //1020 -> 묵시적으로 스트링타입으로 형변환됨
//"10"+"20"으로 됨(오류를 발생시키지 않게하기 위해 묵시적 형 변환)

// 2. 명시적 형 변환
// -> 프로그래머가 내장함수(자바 스크립트가 기본적으로 제공하는 함수) 등을 이용해서 직접 형 변환
let str1 = "10"
let strToNum1 = Number(str1); //문자열 -> 숫자
console.log(10 + strToNum1);//20 출력

let str2 = "10개";
let strToNum2 = Number(str2);

console.log(strToNum2); //NaN

let strToNum3 = parseInt(str2); //숫자가 아닌 문자열(숫자 뒤에있을때)가 포함되도 parseInt함수를 쓰면 숫자로 변환
console.log(strToNum3); //10 

//숫자->문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다");



