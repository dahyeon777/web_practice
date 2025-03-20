// 함수선언

// function greeting() {
//     console.log("안녕하세요!");
// }

// console.log("호출 전");
// greeting(); //소괄호와 함께 호출!
// console.log("호출 후");



let area1 = getArea(10,20); //인수
console.log(area1);

let area2 = getArea(30,20);
console.log(area2);

getArea(120,200);

function getArea(width, height) { //매개변수
    function another(){ //중첩함수 - 함수 내부에 또다른 함수 가능
        console.log("another");
    }

    another();
    let area = width * height;

    return area; //반환값
    console.log("hello"); //리턴문 아래의 코드는 실행되지 않음
}

//!!!!자바 스크립트에서는 함수의 호출을 함수 선언 윗부분에 해도 오류가 나지 않는다!!!!!
//자바스크립트의 호이스팅 때문(위로 끌어올리다)