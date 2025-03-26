// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
 let arr1 = [1,2,3];
 const newLength = arr1.push(4,5,6,7);
 // 길이를 반환함

//  console.log(arr1);
//  console.log(newLength); //배열의 길이


// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1,2,3];
const poppedItem = arr2.pop();
// 맨뒤의 요소가 반환됨

// console.log(poppedItem);
// console.log(arr2);

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1,2,3];
const shiftedItem = arr3.shift();
// console.log(shiftedItem);

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드 
let arr4 = [1,2,3];
const newLength2 = arr4.unshift(0); //변경된 배열의 길이를 동시반환
// console.log(arr4);

//shift, unshift는 pop이나 push보다 느림. 맨앞에서 조작하면 뒤에꺼 인덱스 번호 다 옮겨야하니깐

// 5. slice.
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환

// let arr5 = [1,2,3,4,5];
// let sliced = arr5.slice(2,5); //시작인덱스,끝인덱스+1. 
// //두번째 인수 생략하면 끝까지 잘라줌
// console.log(sliced); //3,4,5
// //원본배열의 값이 바뀌진않음 
// console.log(arr5); //1,2,3,4,5

// let sliced2 = arr5.slice(2);
// console.log(sliced2);

// //뒤에서부터 자르려면 음수값넣기
// let sliced3 = arr5.slice(-3) //뒤에서부터 몇개 자를건지
// console.log(sliced3); //뒤에서부터 세개만 자름 -> 3,4,5만출력

// 6. concat
//두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

let arr6 = [1,2];
let arr7 = [3,4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);