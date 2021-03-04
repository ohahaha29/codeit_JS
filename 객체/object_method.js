// 메소드(Method): 연관성 있는 여러 함수들을 하나로 묶고 싶은 경우 -> property 값으로 함수를 넣는다. 이런 함수를 객체의 method라고 부른다.
let greetings = {
    sayHello: function(name) {
    console.log(`Hello ${name}!`); // 파라미터가 필요한 경우
    },
    sayHi: function() {
        console.log('Hi!');
    },
    sayBye: function() {
        console.log('Bye!');
    }
};

greetings.sayHi(); // 점 표기법
greetings['sayHi']('codeit'); // 대괄호 표기법
greetings.sayHello('codeit'); // 파라미터가 필요한 경우


// 함수를 사용하지 않고 method 사용하는 이유 -> method는 객체의 고유한 동작으로서 함수에 의미를 부여할 수 있기 때문
let rectAngle = {
    width: 30,
    height: 50,
    getArea: function () {
        return rectAngle.width * rectAngle.height;
    }
};

let triAngle = {
    width: 15,
    height: 40,
    getArea: function () {
        return triAngle.width * triAngle.height / 2;
    }
};


// 실습
/*
1. 단어 추가하는 addVoca메소드 만들기
    addVoca메소드는 영어단어와 뜻, 총 두 개의 문자열 값을 파라미터로 전달받아서 myVoca 객체에 새로운 프로퍼티를 추가하는 메소드
2. 단어 삭제하는 deleteVoca메소드 만들기
    deleteVoca메소드는 영단어 문자열을 파라미터로 전달받아서 해당하는 단어를 삭제하는 메소드
3. 단어 출력하는 printVoca메소드 만들기
    printVoca메소드는 영어단어 문자열을 파라미터로 전달받아서 특별한 포멧의 문자열을 콘솔에 출력하는 메소드
    특별한 포멧은 "[영어단어]"의 뜻은 "[뜻]"입니다.로 제작해 주세요. */

let myVoca = {
    addVoca: function (key, value) {
        myVoca[key] = value;
    },
    deleteVoca: function (key) {
        delete myVoca[key];
    },
    printVoca: function (key) {
        console.log(`"${key}"의 뜻은 "${myVoca[key]}"입니다.`);
    }
}

// addVoca메소드 테스트 코드
myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca메소드 테스트 코드
myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca메소드 테스트 코드
myVoca.printVoca('property');