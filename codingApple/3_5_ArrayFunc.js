
//첫째줄
var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

products.forEach((a) => {
    var temp =`<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${a.title}</h5>
    <p>가격 : ${a.price}</p>
    </div>`
    $('.row').append(temp)
})


//더보기버튼 함수
function more_btn(i){
    $.get(`https://codingapple1.github.io/js/more${i}.json`)
    .done((data)=>{
        data.forEach((a) => {
            var temp =`<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${a.title}</h5>
            <p>가격 : ${a.price}</p>
            </div>`
            $('.row').append(temp)
        })
    })
}


//더보기
var cnt_btn = 0;
$('#more').on('click',function(){
    cnt_btn += 1;
    if(cnt_btn == 1){
        more_btn(1)
    }
    else if(cnt_btn == 2){
        more_btn(2)
    $('#more').addClass('form-hide')
    }
})

// var an = [7,3,4,20,90]

// console.log(an.sort(function(a,b){
//     return a - b
// }))
// console.log(an.sort(function(a,b){
//     return b - a
// }))





// 가격순 정렬
var price_array = ''
$('#price').click(function(){    
    $('.row').html('')
    price_array =
    products.sort(function(a,b){
        return a.price - b.price
    })

    price_array.forEach((a) => {
        var temp =`<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${a.title}</h5>
        <p>가격 : ${a.price}</p>
        </div>`
        $('.row').append(temp)
    })

})
// 다나가순 정렬
var cba_array = ''
$('#cba').click(function(){    
    $('.row').html('')
    cba_array =
    products.sort(function(a,b){
        if(a.title < b.title) return 1
        else return -1
    })
 console.log(cba_array)
    cba_array.forEach((a) => {
        var temp =`<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${a.title}</h5>
        <p>가격 : ${a.price}</p>
        </div>`
        $('.row').append(temp)
    })

})
// 6만원 이하 필터
var six_array = ''
$('#six').click(function(){    
    $('.row').html('')
    six_array =
    products.filter(function(a){
        return a.price <= 60000
    })

    six_array.forEach((a) => {
        var temp =`<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${a.title}</h5>
        <p>가격 : ${a.price}</p>
        </div>`
        $('.row').append(temp)
    })

})
// 가나다순 정렬
var abc_array = ''
$('#abc').click(function(){    
    $('.row').html('')
    abc_array = products.sort(function(a,b){
        if(a.title < b.title) return -1
        else return 1 
    })
console.log(abc_array)
    abc_array.forEach((a) => {
        var temp =`<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${a.title}</h5>
        <p>가격 : ${a.price}</p>
        </div>`
        $('.row').append(temp)
    })

})
// var 어레이 = ['다', '가', '나'];

// console.log(
//     어레이.sort(function (a,b){
//         if(a > b) return -1;
//         else if(b > a) return 1;
//         else return 0;
//     })
// )
// 처음으로 되돌리기
var firstproducts = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];
$('#re').click(function(){    
    $('.row').html('')

    firstproducts.forEach((a) => {
        var temp =`<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${a.title}</h5>
        <p>가격 : ${a.price}</p>
        </div>`
        $('.row').append(temp)
    })

})

$('#user_input').click(function(){
    console.log(documnet.getElementById('user_input_price'))
})




