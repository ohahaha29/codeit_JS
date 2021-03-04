// Number
let myNumber1 = 0.3591;

// toFixed(0~100): 소수를 다룰 때 사용하는 메소드
console.log(myNumber1.toFixed(3)); // 파라미터로 숫자 값을 전달해주면 그만큼 소수점 아래의 자릿수를 고정해주는 메소드 -> 소수점 아레 네 번째에서 반올림: 0.359
console.log(myNumber1.toFixed(7)); // 파라미터로 전달하는 겂이 숫자 값의 자릿수를 초과하는 경우 0으로 대체 -> 0.3591000
// 이렇게 계산된 값은 문자열 -> 메소드를 통해 수정된 값을 숫자로 사용하고 싶을 때는 Nember 함수를 이용해서 숫자형으로 변환
// 자바스크립트에서 어떤 값 앞에 더하기 기호를 붙여주면 Number 함수와 똑같은 결과를 얻을 수 있다.
console.log(Number(myNumber1.toFixed(7))); // 0.3591
console.log(+myNumber1.toFixed(7)); // 0.36


let myNumber2 = 255;

// toString(2~36): 파라미터로 전달하는 숫자의 진법으로 숫자를 변환해주는 메소드 -> 결과 값은 문자열
console.log(myNumber2.toString(2)); // 2진수 -> 11111111 // 숫자를 변수에 담에서 사용하는 방법
console.log(myNumber2.toString(8)); // 8진수 -> 377
console.log(myNumber2.toString(16)); // 16진수 -> ff
console.log(255..toString(2)); // 정수에 바로 점을 찍으면 메소드를 호출하는 점 표기법이 아니라 소수점으로 인식하기 때문에 정수 형태의 숫자 값에는 점 두 개 사용
console.log((255).toString(8)); // 양옆의 괄호를 감싸주는 방법