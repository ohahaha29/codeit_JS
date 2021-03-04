// for..in 반복문: 객체 안에 있는 property를 가지고 반복적인 동작을 수행할 때 사용
// 객체의 property name을 가져오는 반복문이기 때문에 일반적인 for 문으로는 대체할 수 없는 특별한 반복문
/*
for (변수 in 객체) { in 키워드 다음에 반복할 객체를 넣어주고 이 객체의 property name이 변수에 할당되고 객체에 property 개수만큼 반복동작
    동작부분
}
*/

let codeit = { //객체
    name: '코드잇',
    bornYear: 2017,
    isVeryNice: true,
    worstCourse: null,
    bestCourse: '자바스크립트 프로그래밍 기초'
} // 정수형 property name의 경우 오름차순으로 출력되므로 가급적 명확한 의미가 있는 property name을 사용

for (let key in codeit) { //key라는 변수의 codeit 객체인 property name들이 차례대로 전달되는 방식 -> key는 임의의 변수로 상황에 어울리는 이름으로 변경
    console.log(key);
    console.log(codeit[key]); // 대괄호 표기법 활용하면 property value도 출력가능
} // 객체 내부에 있는 모든 property 값들을 하나씩 다루는 경우에는 for..in 반복문 활용

