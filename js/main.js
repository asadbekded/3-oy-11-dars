var elForm = document.querySelector('.js-form');
var inp = document.querySelector('.js-inp');
var btn = document.querySelector('.js-btn');
var elText = document.querySelector('.text');
var elFix = document.querySelector('.fix');
var elCar = document.querySelector('.car');
var elPlan = document.querySelector('.plane');

var FOOT_SPEED = 3.6;
var BYC_SPEED = 20.1;
var CAR_SPEED = 70;
var PLANE_SPEED = 800;

function checkTime(dis,speed){
   var hour = Math.floor(dis / speed);
   var minutes = Math.floor((dis / speed - hour) * 60);
   var secondas = Math.floor(((dis / speed - hour) * 60 - minutes) * 60);

   return `⌚ ${hour} soat ${minutes} minut ${secondas} secund`;
}

console.log(checkTime(100,70));
elForm.addEventListener('submit', function(evt){
   evt.preventDefault();
   var inpVal = +inp.value;

   elText.textContent = checkTime(inpVal,FOOT_SPEED);
   elFix.textContent = checkTime(inpVal,BYC_SPEED);
   elCar.textContent = checkTime(inpVal,CAR_SPEED);
   elPlan.textContent = checkTime(inpVal,PLANE_SPEED);

})

// var boy = 3.6;
// var bicle = 20.1;
// var car = 70;
// var airplane = 800;

// elForm.addEventListener('submit', function(evt){
//    evt.preventDefault();
//    var inpVal = +inp.value
//    function time (inpVal,boy){
//       return +Math.round(inpVal / boy) + ' soat';
//    }

//    elText.textContent = time(inpVal,boy);


//    function time (inpVal,bicle){
//       return +Math.round(inpVal / bicle) + ' soat';
//    }

//    elFix.textContent = time(inpVal,bicle);


//    function time (inpVal,car){
//       return +Math.round(inpVal / car) + ' soat';
//    }

//    elCar.textContent = time(inpVal,car);

//    function time (inpVal,airplane){
//       return +Math.round(inpVal / airplane) + ' soat';
//    }

//    elPlan.textContent = time(inpVal,airplane);
// });













//-------------------------------------------------1-masala--------------------------------------------
// function addition(a,b, method) {
//    if (method == '%'){
//       return a % b;
//    }
//    if (method == '+'){
//       return a + b;
//    }
//    if (method == '/'){
//       return a / b;
//    }
//    if (method == '*'){
//       return a * b;
//    }
//    if (method == '**'){
//       return a ** b;
//    }
//    if (method == '-'){
//       return a - b;
//    }
// }
// console.log(addition(40,10, '*'));

//----------------------------------------------------2-masala------------------------------------------------
// var elForm = document.querySelector('.js-form');
// var inp= document.querySelector('.js-inp');
// var btn = document.querySelector('.js-btn');
// var title = document.querySelector('.title');


// elForm.addEventListener('submit', function(evt){
//    evt.preventDefault();
//    var inpVal = inp.value
//    function fizzbuzz (inpVal){
//       if(inpVal % 3 == 0 && inpVal % 5 == 0){
//          return '3-ga va 5-ga bolinadi';
//       }
//       if(inpVal % 3 == 0){
//          return 'faqat 3 ga bolinadi';
//       }
//       if(inpVal % 5 == 0){
//          return 'faqat 5 ga bolinadi';
//       }
//       return 'Bolinmidi';
//    }
//    title.textContent = fizzbuzz(inpVal);
// });



//-----------------------------------------------------3-masala------------------------------------------------

// var elForm = document.querySelector('.js-form');
// var inp1 = document.querySelector('.js-inp1');
// var inp2 = document.querySelector('.js-inp2');
// var btn = document.querySelector('.js-btn');
// var title = document.querySelector('.title');

// elForm.addEventListener('submit', function(evt){
//    evt.preventDefault();
//    var inp1Val = inp1.value
//    var inp2Val = inp2.value
//    if (inp1Val <= inp1Val){
//       title.textContent = 'Aka kotta';
//    }else {
//       title.textContent = 'Uka kotta';
//    }


//    if(isNaN(inp1Val)){
//       title.textContent = 'Aka iltimos son kiriting !!!!';
//       inp1.classList.add('is-invalid');
//       inp1.classList.add('is-valid');
//    }else if(inp1Val <= 0){
//       title.textContent = 'Aka iltimos 0 dan katta son kiriting !!!!';
//       inp1.classList.add('is-invalid');
//       inp1.classList.add('is-valid');
//    }

//    if(isNaN(inp2Val) && isNaN(inp2Val)) {
//       title.textContent = 'Aka iltimos son kiriting !!!!';
//       inp2.classList.add('is-invalid');
//       inp2.classList.add('is-valid');
//    }else if(inp2Val <= 0){
//       title.textContent = 'Aka iltimos 0 dan katta son kiriting !!!!';
//       inp2.classList.add('is-invalid');
//       inp2.classList.add('is-valid');
//    }

// });