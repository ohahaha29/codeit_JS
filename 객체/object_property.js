// 객체: 여러가지 값을 한 번에 저장하고 싶을 때 사용
/*
{
    Key(값 이름): value(값),
    Key(값 이름): value(값),
    Key(값 이름): value(값),
    Key(값 이름): value(값),
};
key, value 한 쌍을 property(속성)이라고 부른다.
property name, property vlaue라고 부르기도 한다.
property name은 문자열에 속하지만 따옴표를 생략해도 javascript가 문자열로 형 변환
    1) 첫 글자는 반드시 문자, 밑줄(_), 달러기호 중 하나로 시작
    2) 띄어쓰기 할 수 없다.
    3) 하이픈(-) 사용할 수 없다.
    4) 위의 3가지 규칙을 벗어나는 경우 따옴표로 감싸줘야 한다.
property vlaue는 모든 자료형 값을 사용할 수 있으며 객체 안에 객체를 넣을 수도 있다.
*/

// 객체
let codeit = { //객체도 결국은 값이기 때문에 객체를 다루기 위해서는 먼저 변수에 할당해 주면서 이름을 만들어 줘야 한다.
    name: '코드잇',
    bornYear: 2017,
    'born Year': 2017,
    isVeryNice: true,
    worstCourse: null,
    bestCourse: {
        title: '자바스크립트 프로그래밍 기초',
        language: 'JavaScript'
    }
};

// 객체의 property에 접근하는 방법
// 1. 점 표기법(objectName.propertyName)
console.log(codeit.bornYear); // 따옴표를 생략할 수 없는 property name으로는 접근할 수 없다.
// 2. 대괄호 표기법(objectName['propertyName']): 점 표기법으로 접근이 불가능한 상황
console.log(codeit['born Year']);

let propertyName = 'name';
console.log(codeit[propertyName]);
// 3. 객체 안에 객체로 접근하는 방법
console.log(codeit.bestCourse.title);
console.log(codeit.bestCourse['title']);


// 객체의 property 수정하는 방법
codeit.name = 'codeit';
console.log(codeit.name);

// 객체의 property 추가하는 방법
codeit.ceo = '강아지';
console.log(codeit.ceo);

// 객체의 property 삭제하는 방법
delete codeit.worstCourse;
console.log(codeit.worstCourse);

// 객체의 property 존재여부 확인 -> 불린 형태로 값을 리턴
console.log(codeit.name !== undefined);
// 'propertyName' in object (in 연산자)
console.log('name' in codeit);

// 객체와 프로퍼티 실습 - 영어 단어장(1)
let myVoca = {
	function: '함수',
	variable: '변수',
	constant: '상수',
	local: '지역의',
	global: '전반적인'
}

console.log(myVoca);
console.log(myVoca.local);
console.log(myVoca.constant);
console.log(myVoca.function);


// 객체와 프로퍼티 실습 - 영어 단어장(2)
let myVoca = {
    function: '함수',
    variable: '변수',
    constant: '상수',
    local: '지역의',
    global: '전반적인'
}

// 이미 외운 단어 3개를 삭제
delete myVoca.function;
delete myVoca.constant;
delete myVoca.local;

console.log(myVoca);
console.log(myVoca.constant);

// 오늘 외울 단어 4개를 추가
myVoca.extend = '확장하다';
myVoca.export = '내보내다';
myVoca.import = '불러오다';
myVoca['default value'] = '기본값';

console.log(myVoca);
console.log(myVoca.export);

// 3. default value의 뜻을 출력
console.log(myVoca['default value']);