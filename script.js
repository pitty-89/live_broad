$(document).ready(function(){
    $('.carousel').carousel({	interval: 4000 });
    $('#carousel-example-generic .carousel-inner').find('.item a').on('click', function(e){
        e.preventDefault();
    });
})
