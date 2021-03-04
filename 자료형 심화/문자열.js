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