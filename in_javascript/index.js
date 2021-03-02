// 할당 연산자 (Assignment operators)
let name = "코드잇"
let x = 5;

x = x-2;
console.log(x); // 3 출력
// 오른쪽에 있는 피연산자를 왼쪽에 있는 피연산자에 할당한다. 피연산자는 연산이 되어지는 대상을 가리키는 말이다.
// x-2는 5-2의 값인 3을 가져 왼쪽에 있는 변수에 할당 -> 결과적으로 이 코드는 x의 값을 2만큼 줄여주는 코드로 해석된다.


// 복합 할당 연산자(Compound assignment operators): 할당 연산자와 결합해서 자주 쓰이는 표현을 더 간략하게 쓸 수 있게 해주는 연산자
// 다음 두 줄은 같습니다
x = x + 1;
x += 1;

// 다음 두 줄은 같습니다
x = x + 2;
x += 2;

// 다음 두 줄은 같습니다
x = x * 2;
x *= 2;

// 다음 두 줄은 같습니다
x = x - 3;
x -= 3;

// 다음 두 줄은 같습니다
x = x / 2;
x /= 2;

// 다음 두 줄은 같습니다
x = x % 7;
x %= 7;


// 증가(increment), 감소(decrement) 연산자
// 다음 세 줄은 같은 의미입니다.
x = x + 1;
x += 1;
x++;

// 다음 세 줄은 같은 의미입니다.
x = x - 1;
x -= 1;
x--;


// 함수 부려먹기(1)
function logParticipant(userName) {
    console.log(`${userName}(이)가 대화에 참여했습니다.`);
}

// 테스트 코드
logParticipant('동수');
logParticipant('윤하');
logParticipant('재준');
logParticipant('동훈');
logParticipant('영희');
logParticipant('신욱');

// 결과
// 동수(이)가 대화에 참여했습니다.
// 윤하(이)가 대화에 참여했습니다.
// 재준(이)가 대화에 참여했습니다.
// 동훈(이)가 대화에 참여했습니다.
// 영희(이)가 대화에 참여했습니다.
// 신욱(이)가 대화에 참여했습니다.


// 함수 부려먹기(2)
function expressMultiplication(x, y) {
    console.log(`${x} * ${y} = ${x * y}`);
}

// 테스트 코드
expressMultiplication(3, 4);
expressMultiplication(3, 2);
expressMultiplication(7, 5);
expressMultiplication(8, 9);
expressMultiplication(5, 5);
expressMultiplication(9, 9);

// 결과
// 3 * 4 = 12
// 3 * 2 = 6
// 7 * 5 = 35
// 8 * 9 = 72
// 5 * 5 = 25
// 9 * 9 = 81