// 절댓값(Absolute Number): 어떤 값의 '양수(positive number)' 버전 -> 음수 -5의 절댓값은 양수 5, 양수 5의 절댓값은 그대로 양수 5
// Math.abs(x)를 하면 x의 절댓값이 리턴
console.log(Math.abs(-10)); // -> 10
console.log(Math.abs(10)); // -> 10

// 최댓값(Maximum)
// Math.max 함수에 파라미터로 여러 수를 넘겨주면, 그중 가장 큰 값이 리턴
console.log(Math.max(2, -1, 4, 5, 0)); // -> 5

// 최솟값(Minimum)
// Math.min 함수에 파라미터로 여러 수를 넘겨주면, 그중 가장 작은 값이 리턴
console.log(Math.min(2, -1, 4, 5, 0)); // -> -1

// 거듭제곱(Exponentiation)
// 자바스크립트에서 Math.pow(x, y)를 하면 x의 y승의 결괏값이 리턴
console.log(Math.pow(2, 3)); // -> 8
console.log(Math.pow(5, 2)); // -> 25

// 제곱근(Square Root)
// '제곱'의 반대라고 생각 -> 5의 제곱이 25이기 때문에, 25의 제곱근은 5 -> 7의 제곱이 49이기 때문에, 49의 제곱근은 7
// Math.sqrt(x)를 하면 x의 제곱근이 리턴
console.log(Math.sqrt(25)); // -> 5
console.log(Math.sqrt(49)); // -> 7

// 반올림(Round)
// Math.round(x)를 하면 x의 반올림된 값이 리턴
// 소수점 부분이 0.5 이상이면 가장 가까운 정숫값으로 올라가고, 소수점 부분이 0.5 미만이면 가장 가까운 정숫값으로 내려간다.
console.log(Math.round(2.3)); // -> 2
console.log(Math.round(2.4)); // -> 2
console.log(Math.round(2.49)); // -> 2
console.log(Math.round(2.5)); // -> 3
console.log(Math.round(2.6)); // -> 3

// 버림과 올림(Floor and Ceil)
// Math.floor(x)을 하면 x의 버림 값이, Math.ceil(x)을 하면 x의 올림 값이 리턴  -> 이 경우, 소수 부분이 얼마 인지와는 상관이 없다.
console.log(Math.floor(2.4)); // -> 2
console.log(Math.floor(2.49)); // -> 2
console.log(Math.floor(2.8)); // -> 2
console.log('-'); // -> -
console.log(Math.ceil(2.4)); // -> 3
console.log(Math.ceil(2.49)); // -> 3
console.log(Math.ceil(2.8)); // -> 3

// 난수(Random)
// Math.random을 하면 0 이상 1 미만의 값이 랜덤으로 리턴
console.log(Math.random()); // -> 0.21458369059793236
console.log(Math.random()); // -> 0.6622040803059857
console.log(Math.random()); // -> 0.785172717569619
console.log(Math.random()); // -> 0.9056556038884926