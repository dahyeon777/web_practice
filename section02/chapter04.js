//1. Spread 연선자
// -> 흩뿌리다, 펼치다라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1,2,3];
let arr2 = [4, ...arr1,5,6]; //... 스트레드 연산자

let obj1 = {
    a: 1,
    b: 2,
};
let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};

function funcA(p1, p2, p3){
    console.log(p1,p2,p3);
}

funcA(...arr1);

//2. Rest 매개변수
//-> Rest는 나머지, 나머지 매개변수

function funcB(one,two,...rest){ //한방에 모든 인수 받아올 수 있음 배열형태로
    //Spread 연산자가 아니라 rest 매개변수임 꼭 rest가 아니라 이름 딴거 써도됨
    //rest 뒤에는 추가적으로 매개변수 선언할 수 없음. 앞에는 가능
    console.log(rest);

}

funcB(...arr1)