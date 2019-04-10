$(document).ready(function() {
    // ---------------- Sliders ----------------
    //Slider 1
    $('.slider1 .slides').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: false
    });
    
    //Slider 2
    $('.slider2 .slides').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        centerMode: true,
        vertical: true,
        verticalSwiping: true,
        autoplaySpeed: 1500,
        pauseOnHover: false
    });
        
    //Slider 3
    $('.slider3 .list').slick({
        dots: false,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: false,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })
    // Custome sliding button
    $('.slider3 .next img').click(function() {
        var x = ".list:eq(" + $(this).index() + ")";
        $('.slider3').find(x).slick('slickNext');
    });
    
    
    // ---------------- Menu ----------------
    $('#menu').click(function(){
        $('.navbar').fadeToggle('fast');
    });
    if ($(document).width() < 768) {
        $('.navbar li').click(function() {
            $('.navbar').fadeOut();
        })
    }
});