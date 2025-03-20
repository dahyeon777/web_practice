
for (let idx = 0; idx < 9; idx++) {
    if(idx % 2 === 0){  //특정 조건 빼고싶을때
        continue;
    }
    console.log(idx);

    if(idx >= 5){  //특정 조건에 종료하고 싶을때
        break
    }

}

