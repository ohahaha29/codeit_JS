// "토마토"나 "기러기"처럼 거꾸로 읽어도 똑같은 단어를 '팰린드롬(palindrome)'이라고 부릅니다.
// 팰린드롬 여부를 확인하는 함수 isPalindrome을 작성하려고 하는데요.
// isPalindrome은 파라미터 word가 팰린드롬이면 true를 리턴하고 팰린드롬이 아니면 false를 리턴합니다.

function isPalindrome(word) {

    for (let i = 0; i < Math.floor(word.length / 2); i++) {
        let left = word[i];
        let right = word[word.length - 1 - i]
        if (left !== right) {
            return false
        }
    }
    return true
}

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));