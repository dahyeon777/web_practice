//1. Number Type

let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num % num2); //모듈러 연산(나머지 구하는 연산)

let inf = Infinity //양의 무한대
let minf = -Infinity //음의 무한대

let nan = NaN //not a number(수치연산이 실패했을때의 결과값(숫자형+스트링 형 등 말도안되는 연산 시킬때))

// console.log(1 * "hello"); //NaN 

//2. String Type
let myName = "이정환";
let myLocation ="목동";
let introduce = myName + myLocation; //문자열 연결(덧셈 연산 지원)

// console.log(introduce);

let introduceText =`${myName}은 ${myLocation}에 거주합니다`; 
//백틱``backtick 변수의 값을 동적으로 문자열에 포함시킬 수 있다. - 템플릿 리터럴 문법
// console.log(introduceText);

//템플릿 리터럴 문법

//3. Boolean Type
let inSwitchOn = true;
let isEmpty = false;

//4. Null Type (아무것도 없다)
let empty = null;

//5. Undefined Type
let none;
console.log(none);
//undefined //변수를 선언하고 어떠한 값도 넣지 않았을때 자동으로 할당

//undefined는 변수를 선언하고 아무런 값도 할당하지 않았을때 '자동으로' 들어감
//null은 개발자가 '명시적으로' 해주는것