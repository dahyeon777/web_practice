//1. 객체 생성
let obj1 = new Object() //객체 생성자
let obj2 = {} //객체 리터럴(대부분 사용)

// 2. 객체 프로퍼티(객체 속성) // 제한없음
let person = {
    name : "이정환", // key : value
    age : 27,
    hobby: "테니스",
    job : "devloper",
    extra : {},
    10: 20,
    "like cat": true, // 키에 띄어쓰기가 있으면 따옴표로 감쌈
};

//3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티 접근 (점 표기법, 괄호 표기법)
let name = person.name;

let age = person["age"] //꼭 문자열로 작성해야함 안그러면 변수로 인식

let property = "hobby"
let hobby = person[property];
console.log(hobby); //동적일때는 괄호 표기법 쓰는게 좋음

// 3-2. 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

console.log(person);

// 3.3. 프로퍼티 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4. 프로퍼티 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5. 프로퍼티 존재 유무 확인 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person; //boolean 반환
console.log(result2);

