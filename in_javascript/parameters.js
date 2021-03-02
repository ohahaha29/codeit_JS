function sayHello(name) {
    console.log(`안녕하세요 ${name}님!`)
}

sayHello('코드잇'); // 안녕하세요 코드잇님!
sayHello('좋아요'); // 안녕하세요 좋아요님!
sayHello('사랑해'); // 안녕하세요 사랑해님!
sayHello(); // 안녕하세요 undifined님! -> 파라미터가 있는데 함수를 호출할 때 아무런 값도 전달하지 않은 경우

// 옵셔널 파라미터(Optional Parameters): 필요에 따라 undifined가 아니라 다른 값이 자동으로 전달되게 끔 파라미터 기본 값을 설정하는 방법
// 함수를 호출할 때 파라미터 값을 전달해도 되고 생략해도 되니간 선택적으로 전달을 받는다고 해서 이런 파라미터를 '옵셔널 파라미터'라고 부름
function introduce(name, age, nationality = '한국') { // 생성한 다음 가장 뒤쪽으로 선언
    console.log(`제 이름은 ${name}입니다.`);
    console.log(`나이는 ${age}살 이고,`);
    console.log(`국적은 ${nationality}입니다.`);
}

introduce('코드잇', 4, '미국'); // 값을 모두 전달하는 경우
console.log('');
introduce('코드잇', 4); // 파라미터 값을 생략한 경우