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