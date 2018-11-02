$( document ).ready(function() {

    // slider

    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        noSwiping: true,
        loopedSlides: 4
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        noSwiping: true,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 4
    });

    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;

    // Numbers

    $('.plus').click(function(e){
        e.preventDefault();
        var container = $(this).parents('.numbers');
        fieldName = $(this).attr('field');
        var currentVal = parseInt( container.children(".value").val() );
        var val2 = currentVal + 1;
        if (!isNaN(val2)) {
            container.children(".value").val(val2);
        } else {
            container.children(".value").val(0);
        }
    });

    $(".minus").click(function(e) {
        e.preventDefault();
        var container = $(this).parents('.numbers');
        fieldName = $(this).attr('field');
        var currentVal = parseInt( container.children(".value").val() );
        if (!isNaN(currentVal) && currentVal > 1) {
            container.children(".value").val(currentVal - 1);
        } else {
            container.children(".value").val(1);
        }
    });
});


