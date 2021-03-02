// scope: 범위, 영역
let x = 3; // 글로컬 변수, 전역 변수(Global Variable): 블록문 밖에서 선언한 변수는 블록문 안에서도 사용 가능

function myFunction() { // 블록문(Block Statement): 중괄호로 감싼 코드
    /* let x = 3; 블록문 안에 선언된 변수를 '로컬 변수', '지역 변수(Local Variable)'라고 부른다. 블록문 내에서만 사용 가능 */
    console.log(x);
}

myFunction();
console.log(x);