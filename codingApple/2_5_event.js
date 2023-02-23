
// 100px만큼 스크롤 내리면 로고작아지게
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




// 스크롤바 내린만큼 바표시
$(window).on('scroll', function(){
    var 스크롤 = window.scrollY //document.querySelector('html').scrollTop;
    var 전체스크롤 = document.querySelector('html').scrollHeight - 430;
    var 스크롤비율 = parseInt((스크롤/전체스크롤*100).toFixed(0));
    $('.bar').css('width', 스크롤비율 + '%')
    console.log(스크롤, 전체스크롤, 스크롤비율)
})


// 로그인 버튼 
$('#login').on('click',function() {
    $('.black-bg').addClass('show-modal');
})

$('#close').on('click',function() {
    $('.black-bg').removeClass('show-modal');
})


//검은배경 클릭시 모달창 꺼짐
// $('.black-bg').on('click',function(e) {

    // e.target; // 유저가 실제로 누른거
    // e.currentTarget; //이벤트 리스너 달린 곳
    // this;
    // e.preventDefault(); //클릭안한거처럼 행동, 로그인에서 submit막아줌
    // e.stopPropagation(); // 내 상위요소로 이벤트버블링 막아줌


//     $('.black-bg').removeClass('show-modal');
// })



$('.black-bg').on('click',function(e) {
    // 콘솔창에서 확인해보고 코드를 짠다
    console.log(e.target);
    console.log(document.querySelector('.black-bg'));

    if(e.target == document.querySelector('.black-bg')){
        $('.black-bg').removeClass('show-modal');
    }
   
})

