// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3+2;
let num2 = 3-2;
let num3 = 3*2;
let num4 = 3/2;
let num5 = 3%2; //모듈러 연산(나머지를 구하는 연산)

let num6 = (1+2)*10;
// console.log(num6);

// 3. 복합 대입 연산자(산술 + 대입)
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;
// console.log(num7);

// 4. 증감 연산자
let num8 = 10;
// console.log(num8++);//후위 연산 - 해당 라인이 지나야 증가되기 때문에 10이 출력됨
// console.log(++num8);//전위 연산 - 바로 증가됨

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;

console.log(or, and, not);

// 6. 비교 연산자
let comp1 = 1 === 2; // 동등 비교 연산자 
// //==두번만 써도 되는데 두번만 쓰면 자료형까지 같은지는 비교가 안됨!!!!!!
let comp2 = 1 !== 2;
let comp3 = "1" == 1 //true가 나와버림
console.log(comp1, comp2, comp3);

let comp4 = 2 > 1;
let comp5 = 2 < 1;
let comp6 = 2 <= 1; //(크거나 같?)