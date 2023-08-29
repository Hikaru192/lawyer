
$(document).ready(function(){
    
        function animation() {

        let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop();

        $('.animation').each(function () {

            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');


            if (position < windowHeight + scroll - 100) {

                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);

            }

        });


    }


    $(window).scroll(function () {
        animation();
    });


    animation();
    
    //team slider
    
    if($(".team-members-slider").length>0){
         $(".team-members-slider").owlCarousel({
             
             loop:true,
             autoplay:true,
             responsive:{
                 0:{
                     items:1,
                     margin:0
                 },
                 992:{
                     items:2,
                     margin:12
                 }
             }
             
         });
    }
    
    //form validator (pre ovoga smo skinuli jquery validate sa neta i ukljucili ga na kontakt stranu)
    
    if ($('.contact-form').length > 0) {
        $('.contact-form').validate({
            highlight: function (element) {
                $(element).addClass('is-invalid').removeClass('is-valid');
            },
            unhighlight: function (element) {
                $(element).addClass('is-valid').removeClass('is-invalid');
            },
            rules: {
                name: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 6
                },
                repassword: {
                    required: true,
                    minlength: 6,
                    equalTo: '#password'
                },
                message: {
                    required: true
                },
                city: {
                    required: true
                },

                question1: {
                    required: true
                },
                question2: {
                    required: true
                }
            },

            messages: {
                name: {
                    required: 'the Name field is required',
                    minlength: 'the Name field should be min 3 charactes long'
                }
            },

            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo(element.closest(".form-group").find(".error-msg"));
            }







        });
    }

    
    
});
