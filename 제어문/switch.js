// switch문(switch statement)

/*
switch (비교할_값) {
    case 조건 값_1:
        동작부분; -> 비교할 값과 조건 값이 일치할 때 동작할 코드
        break; -> switch문을 빠져나오라
    case 조건 값_2:
        동작부분;
        break;
    default: -> 필요에 따라 생략가능
        동작부분; -> 비교할 값이 모든 조건 값과도 일치하지 않을 경우 동작할 코드
}

/*
당신은 등산을 하던 중 갑작스레 산불이 발생해 대피 중 입니다.
대피 중 산중턱에서 다친 동물 4마리를 만났습니다.
이미 체력이 많이 떨어진 당신, 이 동물 중 단 한 마리만 구출할 수 있습니다.
과연 당신의 선택은?
1. 토끼  2. 고양이  3. 코알라  4. 강아지
*/

let myChoice = 2;

switch(myChoice) {
    case 1:
        console.log('토끼를 선택한 당신은, ...');
        break;
    case 2:
        console.log('고양이를 선택한 당신은, ...');
        break;
    case 3:
        console.log('코알라를 선택한 당신은, ...');
        break;
    case 4:
        console.log('강아지를 선택한 당신은, ...');
        break;
    default:
        console.log('1에서 4사이의 숫자를 선택해주세요.');
}


// 각 등급별 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

// 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하세요.
function checkPrice(grade) {
    switch (grade) {
        case 'VIP':
            console.log(`${grade}석은 ${VIPPrice}만원 입니다.`);
            break;
        case 'R':
            console.log(`${grade}석은 ${RPrice}만원 입니다.`);
            break;
        case 'S':
            console.log(`${grade}석은 ${SPrice}만원 입니다.`);
            break;
        case 'A':
            console.log(`${grade}석은 ${APrice}만원 입니다.`);
            break;
        default:
            console.log('VIP, R, S, A 중에서 하나를 선택해 주세요.');
    }
}

// 테스트 코드
checkPrice('R');
checkPrice('VIP');
checkPrice('S');
checkPrice('A');
checkPrice('B');