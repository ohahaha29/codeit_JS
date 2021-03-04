// 다차원 배열(multidimensional array): 배열의 요소에 배열이 들어가는 형태
// 여러 가지 값들을 가지고서 순서나 위치에 중점을 두는 정보가 필요할 때 활용
let twoDimensional = [[1, 2], [3, 4]];

console.log(twoDimensional[0]) // 출력: [1, 2]
console.log(twoDimensional[0][1]) // 출력: [2]


// 다차원 배열 실습 - 팀 나누기
let groups = [
    ['영준', '캡틴'], 
    ['태순', '우재'],
    ['재훈', '지웅'],
    ['윤형', '동욱'],
    ['규식', '소원']
]

let teams = [
    [],
    [],
]

for(let i = 0; i < groups.length; i++) {
    for(let j = 0; j < groups[i].length; j++) { // 2차원 배열을 다루기 위해 반복문을 겹치면 각 요소별로 값들을 가져올 수 있다.
        teams[j][i] = groups[i][j]; // groups의 각 index를 뒤집어서 teams에 할당해주면 간단하게 배열 나누기 가능
    }
}

console.log(teams[0]);
console.log(teams[1]);