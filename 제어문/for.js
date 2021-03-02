// 반복문(loop statement)
// 코드잇 최고 * 10
console.log('코드잇 최고!');
console.log('코드잇 최고!');
console.log('코드잇 최고!');
console.log('코드잇 최고!');
console.log('코드잇 최고!');
console.log('코드잇 최고!');
console.log('코드잇 최고!');
console.log('코드잇 최고!');
console.log('코드잇 최고!');
console.log('코드잇 최고!');

// for문(for statement): 반복문으로 조건 부분이 충족되면 동작 부분을 반복한다.
/*
for (초기화부분; 조건부분; 추가동작부분;) {
    동작부분;
}
초기화 부분: for 반복문이 시작될 때 가장 먼저 한 번만 실행되는 부분
조건 부분: 이 부분에 작성된 코드를 불린 형태로 평가한 다음 true로 판단이 되면 동작 부분을 실행하는 역할을 하는 부분
추가 동작 부분: 조건 부분이 true로 판단됐을 때 이 동작 부분을 실행하고 그 다음 추가적으로 동작할 부분을 작성하는 곳 */

for (let i = 1; i <= 10; i++) { // 반복 횟수를 저장할 변수 생성; 변수의 값을 활용해서 조건 부분 작성; 반복 횟수를 카운트하기 위해서 변수의 값을 하나씩 증가시키는 코드;
    console.log('코드잇 최고'); // 초기화 부분 -> 조건 부분 -> 동작 부분 -> 추가 동작 부분 -> 조건 부분 -> 동작 부분 -> 추가 동작 부분 -> i가 11이 될 때까지 반복
}

// for문 연습(1)
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

// for문 연습(2)
/* 파라미터로 전달되는 숫자 값에 따라 *을 출력하는 코드
function printTriangle(height) {
    for (let i = 0; i < height; i++) {
        console.log('*');
    }
} */
/* 반복할 때마다 *의 개수를 증가시켜주기 위해서, 콘솔에 *을 바로 출력하는 게 아니라
for문이 반복되기 전에 message라는 변수를 만든 다음 for문이 반복될 때마다 message에 *을 하나씩 추가하면서 콘솔에 message를 출력 */
function printTriangle(height) {
    let message = '';
    for (let i = 0; i < height; i++) {
        message += '*';
        console.log(message);
    }
}

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);