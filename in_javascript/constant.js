// 상수(Constant): 절대 변하지 않고 항상 일정한 값
const PI = 3.14; // 원주율
/* let radius; 반지름->선언만 하고 값을 할당해 주지 않은 변수는 undefined 값을 가지고 있음 */
let radius = 0; // 처음에는 빈 값이라는 걸 명시적으로 표현하기 위해 null(변수에 들어갈 자료형이 결정되지 않은 경우), ''(문자열일 경우), 0(숫자의 경우) 값을 할당

// 원의 넓이를 계산하는 함수
function calculateArea() {
    return PI * radius * radius;
}

// 반지름에 따른 원의 넓이를 출력하는 함수
function printArea() {
    return `반지름이 ${radius}일 때, 원의 넓이는 ${calculateArea()}`;
}

radius = 4;
console.log(printArea());

radius = 7;
console.log(printArea());

radius = 8;
console.log(printArea());


/* 상수의 특징
1. 값을 재할당하려고 하면 실행 시 오류가 나타나 상수의 값을 보호할 수 있다.
2. 선언할 때 값을 할당해 주지 않았을 때 실행 시 오류가 발생한다.
3. 이름을 지을 때 대문자와 밑줄로 작성하는 것이 암묵적인 규칙이 있다. -> 변수와 상수 구분을 위해 */