// function returnFalse(){
//     console.log("False 함수");
//     return undefined;
// }

// function returnTrue(){
//     console.log("True 함수");
//     return 10;
// }

// // console.log(returnFalse() && returnTrue()); 
// // //"단락평가"가 작동해서 false 함수 메세지만 출력됨
// // //returnTrue 함수는 실행조차 안됨

// // console.log(returnTrue() && returnFalse()); 
// // //둘 다 호출함

// // console.log(returnTrue() || returnFalse()); 
// //True 함수만 실행됨

// //논리연산식에 truthy하거나 falsy한 값을 넣으면 그 값이 그대로 출력됨

// console.log(returnFalse() && returnTure()); 



//단락평가
function printName(person){
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName();
printName({name: "이정환"});

//T||T 첫번째 truthy값 반환
//T&&T 두번째 truthy값 반환