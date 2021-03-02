// if문(if statement): 특별한 조건에 따라 코드를 실행할지 말지 결정할 수 있는 문법
/* if (조건 부분) {
    동작 부분
} 만약 조건 부분이 충족되면 동작 부분을 실행하라 */

let temperature = 0;

if (temperature <= 0) { // 이하일 때
    console.log('물이 업니다.');
} else { //조건 부분이 충족되지 않았을 때
    console.log('물이 얼지 않습니다.');
}


let temperature = 1;

if (temperature <= 0) {
    console.log('물이 업니다.');
} else {
    console.log('물이 얼지 않습니다.');
}


// 파라미터 height을 활용하는 checkHeight 함수를 완성하세요.
function checkHeight(height) {
	if (height >= 140) {
	    console.log('탑승이 가능합니다.');
	} else {
	    console.log('탑승이 불가능합니다.');
	}
}

// 테스트 코드
checkHeight(141);
checkHeight(135);
checkHeight(170);