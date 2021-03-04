// 배열의 메소드(Array's Method)
let members = ['쿤갈레', 'zerrard66', '우리생각해써', '흙토끼', 'End Miracle'];
console.log(members);

// 배열의 양 끝부분을 다뤄야 하는 상황에서는 splice보다 아래의 메소드를 사용하면 간결
// 배열의 첫 요소를 삭제: shift()
members.shift();
console.log(members);
// 배열의 마지막 요소를 삭제: pop()
members.pop();
console.log(members);
// 배열의 첫 요소로 값 추가: unshift(valu)
members.unshift('NiceCodeit');
console.log(members);
// 배열의 마지막 요소로 값 추가: push(value)
members.push(HiCodeit);
console.log(members);


// 배열에서 특정한 값 찾기
// let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
// console.log(brands.indexOf('Kakao')); brands 배열에 kakao가 포함 확인 -> 포함되어 있다면 kakao 있는 인덱스로 리턴 -> 여러 번 포함되어 있으면, 처음 발견된 인덱스가 리턴
// console.log(brands.indexOf('Daum')); 포함되어 있지 않다면, -1이 리턴

// let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
// console.log(brands.lastIndexOf('Kakao')); indexOf와는 반대로 탐색을 뒤에서 부터
// console.log(brands.lastIndexOf('Daum'));

// 배열에 특정한 값이 있는지 확인 -> 있을 경우 true, 없을 경우 false
// let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
// console.log(brands.includes('Kakao'));
// console.log(brands.includes('Daum'));

// 배열 뒤집기
// let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
// console.log(brands);
// brands.reverse(); 배열의 순서를 뒤집기
// console.log(brands);