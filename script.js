
$(":checkbox").click(function(){
    $(this).parent().toggleClass("active");
});

$('.toggle').click(function(e) {
    e.preventDefault();
    $('.toggle').each(function(){
        $(this).removeClass("show");
    });
  $(this).toggleClass('show');
  $(this).next().slideToggle('fast');
  $(".inner").not($(this).next()).slideUp('fast');
});
$(".btn-next").click(function() {
    $('#innerId').hide();
    $('#innerId1').show();
});
$('#nextButton').click(function() {
    $('#innerId1').hide();
    $('#innerId2').show();
});
$("#nextButton1").click(function() {
    $('#innerId1').hide();
    $('#innerId2').hide();
    $('#innerId3').show();
});

function updateCount() {
    var numberOfChecked = 0;
    numberOfChecked = $(".count:checked").length;
    document.getElementById("num").innerHTML = numberOfChecked + " / 3";
}
function updateCount1() {
    var numberOfChecked = 0;
    numberOfChecked = $(".count1:checked").length;
    document.getElementById("num1").innerHTML = numberOfChecked + " / 3";
}
function updateCount2() {
    var numberOfChecked = 0;
    numberOfChecked = $(".count2:checked").length;
    document.getElementById("num2").innerHTML = numberOfChecked + " / 3";
}
function updateCount3() {
    var numberOfChecked = 0;
    numberOfChecked = $(".count3:checked").length;
    document.getElementById("num3").innerHTML = numberOfChecked + " / 3";
}

function makeActive(){
    var counter = $(".count:checked").length;
    var counter1 = $(".count1:checked").length;
    var counter2 = $(".count2:checked").length;
    var counter3 = $(".count3:checked").length;
    if(counter >=1 && counter1 >=1 && counter2 >=1 && counter3 >=1){
        $('#done').removeClass('btn-innactive');
    }
}
