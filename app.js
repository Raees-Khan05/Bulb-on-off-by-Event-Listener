
// // function sayHello() {
//     // alert("hello buddy")
// // }

// var btnHello = document.getElementById('btnHello')

// btnHello.addEventListener('mouseover' , function () {
//     // alert('khan is back')
//     console.log(btnHello)
//     btnHello.style.backgroundColor = "blue"
//     btnHello.style.color = "white"
// })


// btnHello.addEventListener('mouseout' , function () {
//     // alert('khan is back')
//     console.log(btnHello.id)
//     btnHello.style.backgroundColor = "lightgrey"
//     btnHello.style.color = "black"
// })



var cow_img = document.getElementById('cow_img')


cow_img.addEventListener('mouseover' , function(){
    cow_img.src = 'images/untitled-2.png'
})



cow_img.addEventListener('mouseout' , function(){
    cow_img.src = 'images/untitled-1.png'
})



var off_Btn = document.getElementById('off_Btn')
var on_Btn = document.getElementById('on_Btn')
var oning = document.getElementById('oning')

  function on(){
    // alert('hello')
  oning.src = 'images/Untitled-2.png'
  }

  function off(){
    oning.src = 'images/Untitled-1.png'
  }