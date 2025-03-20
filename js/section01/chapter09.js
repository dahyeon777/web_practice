// // 1. if 조건문(if문)
// let num = 4;

// if(num >= 10){
//     console.log("num은 10 이상입니다");    
//     console.log("참");   
// }else if(num >= 5){
//     console.log("num은 5 이상입니다");
// }else if(num >= 3){
//     console.log("num은 3 이상입니다");
// }else{
//     console.log("거짓");
// }

// 2. Switch 문
// -> if 문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 더 직관적임

let animal = "owl";

switch(animal){  //아래에 있는 모든 코드 출력. 거의 모든 코드에 break 써야함
    case "cat": {
        console.log("고양이")
        break
    }
    case "dog": {
        console.log("강아지")
        break
    }
    case "bear": {
        console.log("곰")
        break
    }
    case "snake": {
        console.log("뱀")
        break
    }
    case "tiger": {
        console.log("호랑이")
        break
    }
    default :{
        console.log("그런 동물은 전 모릅니다.")
    }
}
