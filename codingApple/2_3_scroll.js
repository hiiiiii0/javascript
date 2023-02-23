window.addEventListener('scroll',function (){
    if((window.scrollY) > 100){
    document.querySelector('.navbar-brand').style.fontSize = '15px';
    }else{
        document.querySelector('.navbar-brand').style.fontSize = '25px';
    }
    // window.scrollTo(0, 100); // x,y좌표만큼 강제로 스크롤 해줌
    // window.scrollBy(0, 100); // 현위치부터 강제로 스크롤하기
    console.log(window.scrollY) // window.scrollY는 스크롤을 내린만큼 픽셀로 나타냄
})

// bootstrap라이브러리를 갖다쓰면 자동으로 스무스하게 애니매이션 적용이 된다
// 그게싫으면 :root{scroll-behavior: auto;}를 css에 갖다쓴다

//jquery
// $(window).on('scroll',function() {
//     $(window).scrollTop(100)// 100픽셀 위치로 이동
//     console.log($(window).scrollTop()) // 현재위치 픽셀 출력
// })

// div박스를 스크롤 했으면 다읽었다고 알림창 띄우기
// div의 스크롤바 내린 양 + 눈에 보이는 div 높이 == div의 실제높이
$('.lorem').on('scroll',function() {
    var 스크롤양 = document.querySelector('.lorem').scrollTop;
    var 실제높이 = document.querySelector('.lorem').scrollHeight; //div 높이를 알려줌
    var 높이 = document.querySelector('.lorem').clientHeight; //눈에 보이는 div 높이를 알려줌
    if(스크롤양 + 높이 > 실제높이 - 5){
        alert('약관에 동의하시겠습니까')
    }
    // console.log(스크롤양, 실제높이, 높이);
})

$(window).on('scroll', function(){
    var 스크롤 = window.scrollY //document.querySelector('html').scrollTop;
    var 전체스크롤 = document.querySelector('html').scrollHeight - 430;
    var 스크롤비율 = parseInt((스크롤/전체스크롤*100).toFixed(0));
    $('.bar').css('width', 스크롤비율 + '%')
    console.log(스크롤, 전체스크롤, 스크롤비율)
})