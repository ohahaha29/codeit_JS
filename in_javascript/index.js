//return
function getTwo() {
    return 2; //return이라는 키워드 다음에 되돌려 줄 값을 입력->이때 이 값을 '반환 값' 혹은 '리턴 값'이라고 부름 -> 이렇게 리턴 값이 작성되면 함수를 호출하는 자리에 리턴 값이 전달
};

console.log(getTwo()); //getTwo 함수를 호출했으니까 이 함수에 리턴 값인 2가 전달이 돼서 결과적으로 console.log(2)와 동일한 의미를 가진 코드가 된다.
console.log(2);

//return
function getTwice(number) {
    return number * 2;
};

console.log(getTwice(5)); //숫자 5가 파라미터로 전달
console.log(10);

//return
function getTwice(number) {
    return number * 2;
};

let x = getTwice(5); //10
let y = getTwice(2); //4

console.log(x * y);
console.log(40);