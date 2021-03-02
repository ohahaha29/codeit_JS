// 구구단 만들기
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

let i = 1;
while (i <= 9) {
    let j = 1;
    while (j <= 9) {
        console.log(`${i} * ${j} = ${i * j}`);
        j++;
    }
    i++;
}


// 피보나치 수열
/*
1. 필요한 변수 정의
피보나치 수열의 항은 앞선 두 항의 합으로 계산 -> 피보나치 수열의 항들을 순서대로 출력하기 위해서는 마지막 두 항을 변수에 보관해야 한다.
'현재 항'은 변수 current에, 그리고 '직전 항'은 변수 previous에 저장

let current = 1;
let previous = 0;

for (let i = 1; i <= 50; i++) {
  // 여기에 필요한 동작 작성
}

2. 수행 부분 채워 넣기
2-1. current를 출력
2-2. previous와 current를 적절히 수정
1번은 console.log(current)를 하면 되니까 먼저 채워 넣기

let current = 1;
let previous = 0;

for (let i = 1; i <= 50; i++) {
    console.log(current);
    // previous와 current를 적절히 수정
}

수행 부분에서 previous와 current 수정 방법
previous ← current
current ← current + previous

let current = 1;
let previous = 0;

for (let i = 1; i <= 50; i++) {
    console.log(current);
    previous = current;
    current = current + previous;
}


위 코드처럼 하면 문제 발생:  previous = current를 하면, previous와 current가 같은 값을 저장한다. 그리고 기존의 previous 값은 잃어버린다.
예를 들어서 previous가 정수 2고 current가 정수 3 -> previous = current를 하면 -> previous는 정수 3으로 바뀌고, current도 정수 3 -> 기존 previous에 있던 정수 2는 완전히 잃어버린다.

이 문제를 해결하기 위해서, 임시 보관소 역할을 할 변수를 만들어야 한다. */

let current = 1;
let previous = 0;

for (let i = 1; i <= 50; i++) {
    console.log(current);
    let temp = previous; // previous를 임시 보관소 temp에 저장
    previous = current;
    current = current + temp; // temp에는 기존 previous 값이 저장돼 있음
}