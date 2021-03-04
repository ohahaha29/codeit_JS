// for..of 반복문
let influencer = ['suwonlog', 'small.triger', 'Minam.ludens', 'cu_convenience24']

// for
for (let i = 0; i<influencer.length; i++) {
    console.log(influencer[i]);
}

// for..of (변수 of 배열) {동작부분;}
for (let element of influencer) { //배열의 요소가 할당
    console.log(element);
} // 배열의 길이만큼 반복되는데 반복될 때마다 배열의 요소가 변수에 하나씩 할당

// for..in
for (let index in influencer) { // 변수에 프로퍼티 네임, 배열에 인덱스가 들어간다.
    console.log(influencer[index]);
}
// for..in문은 모든 프로퍼티들을 가지고 반복하는 동작이기 때문에
// 배열에 for..in문을 사용할 경우 배열의 메소드나 배열이 가지고 있는 length 프로퍼티 같은 것들이 변수에 할당될 가능성이 있다.
// 일반적인 객체에 최적화되어 있기 때문에 배열에는 for..in 사용 권장X
// 배열에 인덱스를 활용하고 싶다면 for문을 활용하는 것이 안전한 코드


// for..in 반복문 실습 - 투표집계
// 투표 결과 리스트
let votes = ['이재식', '이재식', '이규하', '이규하', '이규하', '이재식', '이재식', '이규하', '이규하', '이재식', '이규하', '이규하', '이규하', '이규하', '이재식', '이재식', '이규하', '이재식', '이재식', '이재식', '이재식', '이재식', '이규하', '이규하', '이규하', '이규하', '이규하', '이재식', '이규하', '이규하', '이규하', '이규하', '이재식', '이규하', '이규하', '이규하', '이재식', '이재식', '이재식', '이규하']

// 후보별 득표수 객체
let voteCounter = {};

// votes 배열을 이용해서 voteCounter 객체를 정리하기
// for of문을 이용해서 votes에 있는 후보 이름을 순서대로 name이라는 변수에 지정되면, name을 voteCounter 객체에 반영
// voteCounter 객체가 처음에는 그냥 빈 객체이기 때문에 고려해야 되는 경우를 크게 두 가지 경우로 나눠서 생각
// 1. voteCounter[name] 프로퍼티가 있는 경우
// 2. voteCounter[name] 프로퍼티가 없는 경우

for (let name of votes) {
    if (name in voteCounter) {
    voteCounter[name] += 1; // 해당 후보가 이미 최소 하나의 득표를 한 상황
    } else {
    voteCounter[name] = 1 // 해당 후보가 첫 득표를 한 상황
    }
}

// 후보별 득표수 출력
console.log(voteCounter);