const Button = ({text, color = "black", children, }) => {
    //이벤트 객체
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    };

    return ( 
        <button
        onClick={onClickButton}  //()쓰지말고 함수 이름만 적어야함
        // onMouseEnter={onClickButton}
        style={{color: color}}>
        {text} - {color.toUpperCase()}
        {children}
        </button>
    );
};


export default Button;