// string
let myString = '  Hi codeit  ';

// 부분 문자열 접근 slice(start, end)
console.log(myString.slice(0, 2)); // -> 0번부터 1번 인덱스까지의 문자열 리턴 -> Hi
console.log(myString.slice(3)); // ->  시작지점부터 끝까지 문자열을 리턴 -> codeit
console.log(myString.slice()); // -> 문자열 전체를 가져온다. -> Hi codeit

// 양 끝 공백 제거
console.log(myString.trim()); // trim 메소드 -> Hi codeit

// 대소문자 변환
console.log(myString.toUpperCase()); // 대문자 ->   HI CODEIT
console.log(myString.toLowerCase()); // 소문자 ->   hi codeit

// 요소 탐색
console.log(myString.indexOf('a')); // 앞 부터 -> -1(없는 것)
console.log(myString.lastIndexOf('i')); // 뒤 부터 -> 7

// 요소 접근
console.log(myString[3]); // 대괄호 표기법 -> c
console.log(myString.charAt(3)); // charAt 메소드 -> c

// 문자열의 길이
console.log(myString.length); // length 프로퍼티 -> 9


// 문자열 심화 실습 - 그래, 우리 함께
let lyrics = "[재석]너에게 나 하고 싶었던 말 고마워 미안해 함께 있어서 할 수 있어서 웃을 수 있어[준하] 정말 고마웠어 내 손을 놓지 않아줘서 힘을 내볼게 함께 있다면 두렵지 않아[홍철] 내가 늘 웃으니까 내가 우습나 봐 하지만 웃을 거야 날 보고 웃는 너 좋아[명수] 자꾸만 도망치고 싶은데 저 화려한 큰 무대 위에 설 수 있을까? 자신 없어..[하하] 지금까지 걸어온 이 길을 의심하지는 마 잘못 든 길이 때론 지도를 만들었잖아[형돈] 혼자 걷는 이 길이 막막하겠지만 느리게 걷는 거야 천천히 도착해도 돼[길] 술 한 잔 하자는 친구의 말도 의미 없는 인사처럼 슬프게 들릴 때 날 찾아와";

let hyungdon = null;

// indexOf메소드를 활용해서 [형돈] 부분과 [길] 부분이 시작되는 index를 찾은 다음 두 인덱스를 slice 메소드에 활용해서 부분 문자열에 접근
let startIndex = lyrics.indexOf('[형돈]');
let endIndex = lyrics.indexOf('[길]');

// 직전에 구한 startIndex와 endIndex를 가지고 slice 메소드의 파라미터로 값을 전달하면 형돈의 가사 부분만 떼어낼 수 있다.
hyungdon = lyrics.slice(startIndex, endIndex);

// 테스트 코드: [형돈] 혼자 걷는 이 길이 막막하겠지만 느리게 걷는 거야 천천히 도착해도 돼
console.log(hyungdon);