// 탭기능 넣기

//버튼0을 클릭하면
// 모든 탭에 orange,show 삭제
// orange클래스명 추가, show클래스명 추가

// queryselectorAll('.tab-button')[0] == $('.tab-button').eq(0)
// $('.tab-button').eq(0).on('click',function() {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(0).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(0).addClass('show');
// })
// $('.tab-button').eq(1).on('click',function() {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// })
// $('.tab-button').eq(2).on('click',function() {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
// })

// 셀렉터 문법은 느리기 때문에
// 자주 쓰이는 셀렉터는 변수에 담아쓰는 것이 좋다.

//for문 
// 반복문 안에 변수 설정 시 let으로 한다

// for(let i=0; i<$('.tab-button').length; i++){
//     $('.tab-button').eq(i).on('click',function() {
//         $('.tab-button').removeClass('orange');
//         $('.tab-button').eq(i).addClass('orange');
//         $('.tab-content').removeClass('show');
//         $('.tab-content').eq(i).addClass('show');
//     })
// }
//탭이 늘어나도 가능하게 하려면(확장성 있게 하려면) 어떻게 짜야할지 고민해야 한다

//함수만들기
function 탭열기(i){
    
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(i).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(i).addClass('show');
    
}

// for(let i=0; i<$('.tab-button').length; i++){
//     $('.tab-button').eq(i).on('click',function() {
//         탭열기(i)
//     })
// }


// 이벤트 버블링을 이해하면 이벤트리스너를 줄일 수 있다(램절약)
// 반복문 쓰지않고 이벤트 리스너 하나만 쓰기
$('.list').click(function(e){
    for(var i=0; i<$('.tab-button').length; i++){
    if(e.target == document.querySelectorAll('.tab-button')[i]){
        탭열기(i)
    }
    }
})


// (상식)
// 개발자는 유저 몰래 html안에 정보를 심을 수 있음
// data-이름="정보"


$('.list').click(function(e){
    console.log(parseInt(e.target.dataset.id))
    탭열기(parseInt(e.target.dataset.id))
})

var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

for(var i=0; i<3; i++){
    $('.card-body h5').eq(i).html(products[i]['title']);
    document.querySelectorAll('.card-body p')[i].innerHTML 
    // = "가격 : " + products[i]['price'];
    = `가격 : ${products[i]['price']}` // 백틱기호 안에 문자 쓰고 중간에 ${}로 변수 입력
}

  