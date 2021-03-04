// 배열의 메소드(Array's Method): 배열을 안전하고 효과적으로 사용하기 위해서 배열의 메소드를 활용해야 한다.
let members = ['쿤갈레', 'zerrard66', '우리생각해써', '흙토끼', 'End Miracle'];

console.log(members);
delete members[4];
console.log(members);

// splice
members.splice(4); // 4번 인덱스 삭제 -> splice method의 파라미터로 값을 하나만 전달할 경우 전달된 인덱스로부터 그 이후에 모든 요소를 삭제
console.log(members);

// splice(startIndex, deleteCount(삭제할 개수 조절), item(삭제할 요소 자리에 값이 추가))
members.splice(1, 1, 'NiceCodeit', 'HiCodeit');
console.log(members);
// members.splice(1, 0, 'NiceCodeit', 'HiCodeit'); -> 아무것도 삭제되지 않고 1번 인덱스에 추가됨
// members.splice(2, 1, 'MaumNo'); -> 2번 인덱스 요소가 수정
// members.splice(2, 2, 'MaumNo', '산토끼'); -> 3번, 4번 인덱스 요소가 수정