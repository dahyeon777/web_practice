// const {add, sub} = require("./math");

// import mul from "./math.js";
import mul, { add, sub } from "./math.js"; //확장자(js 등) 꼭 명시

// console.log(add(1,2));
// console.log(sub(1,2));
// console.log(mul(2,3));

import randomColor from "randomcolor"; //라이브러리 가져올때는 from뒤에 이름만 명시하면 됨

const color = randomColor();
console.log(color);
