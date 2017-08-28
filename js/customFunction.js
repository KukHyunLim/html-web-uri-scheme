$(function () {
    $("div[href]").click(function (event) {
        window.protocolCheck($(this).attr("href"),
            function () {
                if( confirm("프로그램이 설치되어있지 않습니다. 설치하시겠습니까?\n설치후 다시 실행버튼을 클릭해주세요.") ){
                	window.open("http://naver.com");
                }
            });
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
    });
});
