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


// splice 실습
let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

// fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도' 를 추가
fruits.splice(1, 1, '사과', '청포도');

// fruits 배열의 첫 번째 요소를 삭제
fruits.splice(0, 1);

// ages 배열에 마지막 요소를 삭제 -> 매번 배열의 요소의 개수를 직접 세어볼 수 없다. -> lengh 프로퍼티 활용
ages.splice(ages.length-1, 1);

// ages 배열의 2번, 3번 인덱스를 26, 28로 변경
ages.splice(2, 2, '26', '28');

// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가
numbers.splice(0, 0, 1, 2, 3, 5, 8, 9);

// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제
for (let i = 0; i < numbers.length; i++) { // 반복문으로 배열의 모든 요소 확인
    if (numbers[i] % 2 !== 0) {
        numbers.splice(i, 1);
        i--; // for문 동작부분이 수행될 때마다 i가 증가하기 때문에 삭제될 때 만큼은 i가 증가되는 현상 방지 필요 -> 요소가 삭제될 때 i를 미리 한 번 감소시켜준다.
    }
}
// let i = 0;
// while (i < numbers.length) {
//     if (numbers[i] % 2 !== 0) {
//         numbers.splice(i, 1);
//     } else {
//     i++;
// }
// }


// 테스트 코드
console.log(fruits[1]);
console.log(fruits[0]);
console.log(ages[ages.length - 1]);
console.log(ages[3]);
console.log(numbers[3]);
console.log(numbers);