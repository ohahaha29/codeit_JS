// 역할 1. 결과값을 돌려주는 역할
function square(x) {
    return x * x;
}

console.log(square(3));

// 역할 2. 함수의 실행을 중단
function square(x) {
    console.log('return 전');
    return x * x;
    console.log('return 후'); //Dead code: 리턴문으로 인해 함수가 종료되기 때문에 리턴문 아리애 있는 코드들은 실행X
}

console.log('함수 호출 전');
console.log(square(3));
console.log('함수 호출 후');
/* 결과
함수 호출 전
return 전
9
함수 호출 후 */


// return 실습
function calculateRectangleArea(width, height) {
    return width * height  
}

// 테스트 코드
    let area1 = calculateRectangleArea(3, 4); // 가로 3, 세로 4인 직사각형의 넓이 계산
    let area2 = calculateRectangleArea(5, 8); // 가로 5, 세로 8인 직사각형의 넓이 계산
    let area3 = calculateRectangleArea(7, 2); // 가로 7, 세로 2인 직사각형의 넓이 계산

console.log(`Area1: ${area1}, Area2: ${area2}, Area3: ${area3}`);

// 결과
// Area1: 12, Area2: 40, Area3: 14