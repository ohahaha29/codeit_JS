// adultTag, teenagerTag, errorTag, transferTag라는 이름의 변수
let adultTag = '삑!';
let teenagerTag = '삑삑!';
let errorTag = '삑삑삑!';
let transferTag = '환승입니다.';

// tagCase파라미터를 가지는 tagNotification라는 이름의 함수
function tagNotification(tagCase) {
    console.log(tagCase);
}

// 테스트 코드
tagNotification(adultTag);
tagNotification(teenagerTag);
tagNotification(transferTag);
tagNotification(errorTag);
tagNotification(adultTag);