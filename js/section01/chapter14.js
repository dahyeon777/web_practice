//스코프
// -> 전역 스코프 / 지역 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; //전역 스코프

function funA(){
    let b=2; //지역 스코프
    console.log(a);

    function funcB(){ //함수도 마찬가지로 함수 블럭 안에서는 지역 스코프를 가지지만 함수선언식은 
    // 조건문이나 반복문 안에서는 지역 스코프를 갖지 않는다.

    }
}

funA();
console.log(b); //접근 불가능

if(true){
    let c = 1; //블록내의 모든 선언은 지역 스코프를 가짐
    function funB() {} //
}
console.log(c); //접근 불가능

for(let i = 0; i < 10; i++){
    let d =1 ;
    function funB() {}
}
console.log(d); //접근 불가능