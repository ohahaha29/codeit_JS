// 배열(Array): 순서가 있는 값을 만들 때 객체보다 배열을 활용 ex) 공항철도 노선, 소설의 시리즈, 십이지, 십간, 여러 값의 묶음(과일 묶음, 중국집 세트메뉴) 등
let courseRanking = [
    '자바스크립트 프로그래밍 기초', // 요소(element)
    'Git으로 배우는 버전 관리', // 요소들은 인덱스라는 순서를 가지고 있다(0부터 시작).
    '컴퓨터 개론',
    '파이썬 프로그래밍 기초'
];

// indexing(0~...)
console.log(courseRanking[0]);


// 배열 실습
let dataType = ['Number', 'String', 'Boolean', 'null', 'undefined', 'object'];

for (let i = 0; i < 6; i++) {
    console.log(dataType[i]);
}

let dataType = ['Number', 'String', 'Boolean', 'null', 'undefined', 'object'];

let i = 0;
while (i < 6) {
    console.log(dataType[i]);
    i++;
}


// 배열 다루기 -> 배열도 객체이다.
let members = ['쿤갈레', 'zerrard66', '우리생각해써', '흙토끼', 'End Miracle'];

console.log(typeof members);

console.log(members.length); // 배열 안에 몇 개의 데이터가 들어있는지
console.log(members['length']); // 대괄호 표기법
console.log(members[length -1]); // 인덱스는 0부터 시작하니간 members에 length -1하면 배열의 마지막 요소에 접근

members[5] = 'NiceCodeit' // 배열에 요소를 추가하는 방법
console.log(members[5]);

members[3] = '달토끼' // 배열에 요소를 수정하는 방법
console.log(members[3]);

console.log(members); // 배열에 요소를 삭제하는 방법 -> 완전히 삭제되지 않는다. -> 배열의 메소드를 사용해야한다.
delete members[4];
console.log(members);


// array 다루기 실습 - 온도 바꾸기
let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = []

for (let i = 0; i < celsiusTemps.length; i++) { // 반복문을 이용해서 celsius 배열의 요소를 하나씩 확인
    fahrenheitTemps[i] = (celsiusTemps[i] * 9 / 5) + 32 // F = (C * 9 / 5) + 32 라는 공식에 따라서 각 요소의 값을 변환
}

// fahrenheitTemps 테스트
console.log(fahrenheitTemps);

// 혹은
let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = []

let i = 0;
while (i < celsiusTemps.length) {
    fahrenheitTemps[i] = (celsiusTemps[i] * 9 / 5) + 32
    i++;
}

// fahrenheitTemps 테스트
console.log(fahrenheitTemps);