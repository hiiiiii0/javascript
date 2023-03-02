

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







// for(var i=0; i<products.length; i++){
//     var temp =`<div class="col-sm-4">
//     <img src="https://via.placeholder.com/600" class="w-100">
//     <h5>${products[i].title}</h5>
//     <p>가격 : ${products[i].price}</p>
//     </div>`
//     $('.row').append(temp)
// }


