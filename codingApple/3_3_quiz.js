
// 출석부에서 철수 찾기

// var 출석부 = ['흥민', '영희', '철수', '재석'];
// var cnt;
// function 이름찾기(철수){
 

//(실패)
//     출석부.forEach(function(a){
//        if(a == 철수){
//         cnt = 1;
//         console.log('있어요')
//        }else{
//         console.log('없어요')
//        }
//     })
//    if(cnt = 1){
//     console.log('t')
//    }else{
//     console.log('f')
//    }


//(성공)
// cnt = 0;
// for(var i=0; i<출석부.length; i++){
//     if(출석부[i] == 철수){
//         cnt = 1;
//     }
// }
// if(cnt ==1){
//     console.log('있어요')
// }else{
//     console.log('없어요')
// }
// }


// //구구단
// for(var i=2; i<10; i++){
//     for(var j=1; j<10; j++){
//         console.log(i + "*" + j + "=" + i*j)
//     }
// }

//평균점수 계산기
var sum = 0;
var count= 0;
var evg= 0;
function 평균(arr,b){

    for(var i=0; i<arr.length; i++){
        sum = sum + arr[i];
        count += 1;
    }
    evg = parseInt((sum/count).toFixed(0));

    if(evg < b){
        console.log(`평균이 ${b-evg}점이 올랐네요`)
    }else{
        console.log(`평균이 ${evg-b}점 떨어졌네요`)
    }

}
