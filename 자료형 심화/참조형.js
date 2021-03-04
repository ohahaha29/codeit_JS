// 객체나 배열 안에 중첩해서 객체나 배열이 있는 경우 복사할 때 주소값이 복사되기 때문에 예상치 못한 결과를 얻을 수 있다.

// 참조형 복사하기(Reference Type Copy): 배열
let numbers1 = [1, 2, 3]; 
let numbers2 = numbers1.slice();

numbers2.push(4);

console.log(numbers1);
console.log(numbers2);


// 참조형 복사하기(Reference Type Copy): 객체
let course1 = {
    title: '파이썬 프로그래밍 기초',
    language: 'Python'
};

// let course2 = Object.assign({}, course1); 방법 1
let course2 = {}; // 방법 2

for (let key in course1) {
    course2[key] = coursel1[key];
}

course2.title = '알고리즘의 정석';

console.log(course1);
console.log(course2);