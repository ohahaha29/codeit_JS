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