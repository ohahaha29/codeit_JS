function factorial(n) {
    let result = 1; // 우선 결괏값이 0!의 값인 1로 초기화

    for (let i = 1; i <= n; i++) { // n이 1 이상인 경우에는 반복문을 사용해서 팩토리얼 계산
      result = result * i;
    }

    return result;
}

  // 테스트 코드
console.log(factorial(12));
console.log(factorial(6));
console.log(factorial(3));
console.log(factorial(0));