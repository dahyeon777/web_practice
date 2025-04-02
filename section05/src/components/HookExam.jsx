import { useState } from "react";
// 3가지 hook 관련된 팁
//1. 함수 컴포넌트, 커스텀 푹 내부에서만 호출 가능
//2. 조건부로 호출될 수는 없다
//3. 나만의 훅(Custom Hook) 직접 만들 수 있다.
// const state = useState();


function useInput(){
    const[input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    };

    return [input, onChange];
}

const HookExam = () => {

    const [input, onChange] = useInput();
    
    return <div>hookexam</div>

};

export default HookExam