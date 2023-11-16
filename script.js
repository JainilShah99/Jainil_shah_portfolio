$(document).ready(function(){

    $(window).scroll(function(){

        if(this.scrollY > 20)
        {
            $('.navbar').addClass("sticky");
        }
        else
        {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    })

    //  toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing",{
        strings:["WEB DEVELOPER","DESIGNER"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    var typed = new Typed(".typing2",{
        strings:["WEB DEVELOPER","DESIGNER","FRONTED DEVELOPER"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    // owl carousel script
    $(".carousel").owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items: 1,
                nav: false,
            },
            600:{
                items: 2,
                nav: false,
            },
            1000:{
                items: 3,
                nav: false,
            }

        }
    });

    //image slider aboutme

        let slideCount = $('.slide').length;
        let currentIndex = 0;

        $('.prev').on('click', function() {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = slideCount - 1;
            }
            showSlide(currentIndex);
        });

        $('.next').on('click', function() {
            currentIndex++;
            if (currentIndex >= slideCount) {
                currentIndex = 0;
            }
            showSlide(currentIndex);
        });

        $('.dot').on('click', function() {
            currentIndex = $(this).index();
            showSlide(currentIndex);
        });

        function showSlide(index) {
            $('.slide').removeClass('activet');
            $('.dot').removeClass('activet-dot');
            $('.slide').eq(index).addClass('activet');
            $('.dot').eq(index).addClass('activet-dot');
        }

        showSlide(currentIndex);
    
        // slider img

        let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 1500); // Change image every 1.5 seconds (1500ms)
}

    showSlides(); // Start the slider

// contact img

    let slideIndex1 = 0;
    const slides1 = document.querySelectorAll('.slider1 img');
    
    function showSlides1() {
        for (let i = 0; i < slides1.length; i++) {
            slides1[i].style.display = 'none';
        }
        slideIndex1++;
        if (slideIndex1 > slides1.length) {
            slideIndex1 = 1;
        }
        slides1[slideIndex1 - 1].style.display = 'block';
        setTimeout(showSlides1, 7000); // Change image every 1.5 seconds (1500ms)
    }
    
        showSlides1(); // Start the slider




});