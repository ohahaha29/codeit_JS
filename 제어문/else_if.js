// if문(if statement)
let temperature = -105;

if (temperature <= 0) {
    console.log('물이 업니다.');
} else {
    if (temperature < 100) {
        console.log('물이 얼지도 끓지도 않습니다.');
    } else {
        if (temperature < 150) {
        console.log('물이 끓습니다.');
        } else {
        console.log('물이 모두 수증기가 되었습니다.');
        }
    }
} // 가독성이 떨어진다.


// else if문: else 다음 if 문이 바로 이어지는 경우 사용
if (temperature <= 0) {
    console.log('물이 업니다');
} else if (temperature < 100) {
    console.log('물이 얼지도 끓지도 않습니다.');
} else if (temperature < 150) {
    console.log('물이 끓습니다.');
} else {
    console.log('물이 모두 수증기가 되었습니다.');
}


// 학점계산기 만들기
function printGrade(midtermScore, finalScore) {
    let totalScore = midtermScore + finalScore;

    if (totalScore >= 90) {
        console.log('A');
    } else if (totalScore >= 80) {
        console.log('B');
    } else if (totalScore >= 70) {
        console.log('C');
    } else if (totalScore >= 60) {
        console.log('D');
    } else {
        console.log('F');
    }
}

// 테스트 코드
printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);


// 서열 정리
// 나의 나이와 나의 성별을 저장하는 변수
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요.
if (myAge === yourAge) { // 나와 나이가 같은 경우
    return callFriend;
} else if (myAge > yourAge) { // 상대방이 나이가 더 적은 경우
    if (yourGender === 'male') { // 상대방 성별이 남성인 경우
        return callYoungerBrother;
    } else if (yourGender === 'female') { // 상대방 성별이 여성인 경우
        return callYoungerSister;
    }
} else { // 상대방이 나이가 더 많은 경우
    if (yourGender === 'male') { // 상대방 성별이 남성인 경우
        return callOlderBrother;
    } else if (yourGender === 'female') { // 상대방 성별이 여성인 경우
        return callOlderSister;
    }
}

// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);