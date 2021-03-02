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
