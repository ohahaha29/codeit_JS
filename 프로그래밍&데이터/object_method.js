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