//1. 함수 표현식
function funA() {
    console.log("funcA");
}

let varA = funA;  //반환값이 아닌 함수자체를 변수에 담아둘 수 있음
console.log(varA)
varA(); //호출가능

let varB = function () {
    console.log("funcB");
};//익명함수 - 이렇게 호출된 함수는 선언이 아니기 때문에 funcB로 호출못함. 그래서 그냥 이름 빼고만듦

varB();
// 함수 표현식은 호이스팅 불가능

//2. 화살표 함수
let varC = (value) => {
    console.log(value);
    return value+1;
};

console.log(varC(10));

