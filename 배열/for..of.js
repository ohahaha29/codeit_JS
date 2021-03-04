// for..of 반복문
let influencer = ['suwonlog', 'small.triger', 'Minam.ludens', 'cu_convenience24']

// for
for (let i = 0; i<influencer.length; i++) {
    console.log(influencer[i]);
}

// for (변수 of 배열) {동작부분;}
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