// 숫자형과 문자열 재료
let material1 = 3;
let material2 = '3';
let material3 = 10;
let material4 = '4';
let material5 = 4;

// 연산 결과
let result1;
let result2;

// 연산을 통해 result1에 문자열 '34'를, result2에 숫자형 34를 만들어 넣어주세요.
// 코드를 작성해주세요.
result1 = material2 + material4;
result1 = material1 + String(material5);
result2 = material1 * material3 + material5;
result2 = Number(material2 + material4)

// 테스트 코드
console.log(result1);
console.log(typeof result1);
console.log(result2);
console.log(typeof result2);


function interestCalculator(myMoney, saveTerm, interestRate) {
    return myMoney * saveTerm * interestRate / 100;
};

// 조건 입력 테스트
let myMoney = 3650000; // 맡긴 금액 (원)
let saveTerm = 1; // 맡기는 기간 (년)
let interestRate = 4; // 이자율 (%)

// 수령액 계산 테스트
let myInterest = interestCalculator(myMoney, saveTerm, interestRate);
let totalMoney = myMoney + myInterest;

// 출력 테스트
console.log('맡긴 금액은 ' + myMoney + '원 입니다.');
console.log('이자는 ' + myInterest + '원 입니다.');
console.log('최종 받을 금액은 ' + totalMoney + '원 입니다.');
