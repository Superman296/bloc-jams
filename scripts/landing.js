//wdt-students sdt-students wdt-standup geekbot 



 var animatePoints = function() {  
     var revealPoint = function() {
         $(this).css({
             opacity: 1,
             transform: 'scaleX(1) translateY(0)'
         });
     };
     $.each($('.point'), revealPoint);
};

$(window).load(function() {
    if ($(window).height() > 950) {
         animatePoints();
     }
    var pointsArray = document.getElementsByClassName('point');
    var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;
    $(window).scroll(function(event) {
          if ($(window).scrollTop() >= scrollDistance) {
             animatePoints();
    }
    });
});

//Replace the for loop in the animatePoints function with a forEach block and confirm that the selling points still animate properly.