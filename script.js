$("button").click(function(){
    $(".page1").fadeOut();
    $(".page2").fadeIn();
     $(".page3").fadeIn();
});

$(".submit").click(function(){
let name = $(".nameInput").val();
let number = $(".number").val();
let pet = $(".pet").val();
$(".page2").append("<h2> Dear " + name + ", in 20 years you will have   "+number+" "+pet + "(s) </h2>");
});

$(".return").click(function(){
    $(".page1").fadeIn();
    $(".page2").fadeOut();
     $(".page3").fadeOut();
  
});