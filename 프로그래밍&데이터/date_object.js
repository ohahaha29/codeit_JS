// Date
let myDate = new Date();

console.log(myDate);
// 요일 월 일 년도 시간 시간대


// new Date(milliseconds)
let myDate = new Date(1000); // 소괄호 안에 숫자 값을 넣어주면 UTC 기준 1970년 1일 1일 0시 0분 0초에서 넣어준 숫자 값의 밀리초만큼 지난 객체가 만들어진다. 1000밀리초=1초


// new Date('YYYY-MM-DD')
let myDate1 = new Date('2017-05-18');

console.log(myDate1);


// new Date('YYYY-MM-DDThh:mm:ss')
let myDate2 = new Date('2017-05-18T19:11:16');

console.log(myDate2);


// new Date(YYYY, MM, DD, hh, mm, ss, ms) YYYY, MM 필수 -> Month는 0부터 시작
let myDate3 = new Date(2017, 4, 18, 19, 11, 16);

console.log(myDate3);


// Date.getTime(): myDate4 객체가 1970년 1월 1일 00:00:00 UTC부터 몇 밀리초가 지났는지 계산 -> 이 정수 값을 타임스탬프(time stamp)라고 부른다.
let myDate4 = new Date(2017, 4, 18, 19, 11, 16);

console.log(myDate4.getTime());

let myDate5 = new Date(2017, 4, 18, 19, 11, 16);
let today = new Date();

let timeDiff = myDate5.getTime() - today.getTime();

console.log(timeDiff + '밀리초');  // 지금으로부터 몇 밀리초 차이나는지 계산
console.log(timeDiff + '초');
console.log(timeDiff / 1000 / 60 / + '분');
console.log(timeDiff / 1000 / 60 / 60 + '시간');


// getDate는 일자, getDay는 요일(일요일 부터 0~6까지)