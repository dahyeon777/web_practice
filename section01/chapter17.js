// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; //배열 리터럴 (대부분 사용)

//순서가 있음. 아무거나 가능, 길이한계도 없음
let arrC = [1,2,3,true,"hello",null,undefined,()=>{},{},[],];

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];

arrC[0] = "hello"
console.log(item1, item2);
console.log(arrC);