
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

console.log($('.mt-2').val() == '셔츠')
// select-option에서 input과 마찬가지로 input,change사용가능
// $('.mt-2').on('input',function(){
//     if($('.mt-2').val() == '셔츠'){
//         $('.mt-3').css('visibility','visible')
//     }
// })
// $('.mt-2').on('change',function(){
//     if($('.mt-2').val() == '셔츠'){
//         $('.mt-4').css('visibility','hidden')
//         $('.mt-3').css('visibility','visible')
//     }
// })
// $('.mt-2').on('change',function(){
//     if($('.mt-2').val() == '모자'){
//         $('.mt-3').css('visibility','hidden')
//         $('.mt-4').css('visibility','visible')
//     }
// })



//forEach 반복문
var pants = [ 27, 30, 32]
var shirts = [95, 100, 105, 110]
var caps = ['빨강','노랑','검정']
$('.form-select').eq(0).on('input',function(){
    var value = this.value;
    // var pants = '<p><option>28</option><option>30</option><option>32</option></p>';
    if(value == '셔츠'){       
        $('.form-select').eq(1).html('')
        shirts.forEach(function(a){
            $('.form-select').eq(1).append(`<option>${a}</option>`)
        })
    }
    else if(value == '모자'){
        $('.form-select').eq(1).html('')
        caps.forEach(function(a){
            $('.form-select').eq(1).append(`<option>${a}</option>`)
        })
       
    }   
    // else if(value == "바지"){
    //     $('.form-select').eq(2).addClass('form-hide');
    //     $('.form-select').eq(1).removeClass('form-hide');
    //     $('.form-select').eq(1).html(pants);
    // }
    

    //arrow function 사용
    //주의) arrow function쓰면 바깥에 있던 this를 그대로 가져다 씀
    else if(value == '바지'){
        $('.form-select').eq(1).html('')
        pants.forEach((a) => {
            $('.form-select').eq(1).append(`<option>${a}</option>`)
        })   
    }
    
})


//for in 반복문
var opt = {name: 'kim' , age: 19 }

for(var col in opt){
    console.log(col)
    console.log(opt[col])
    console.log(opt)
}




