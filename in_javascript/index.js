//파라미터
function teraToGiga(volume) {
    console.log(volume + "TB는");
    console.log(volume * 1024 + "GB 입니다.");
};

function teraToMega(volume) {
    console.log(volume + "TB는");
    console.log(volume * 1024 * 1024 + "MB 입니다.");
};

// TB -> GB 테스트
teraToGiga(2);
// TB -> MB 테스트
teraToMega(2);