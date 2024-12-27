$(window).on('load',
    function () {
        
        //--------Loader----------
        $('.loader').css('display','none')
        $('.body').css('display','block')

        //--------Menu----------
        $('#menu').on('click', function () {
                $('.header-nav').toggleClass('header-nav-active')
                $('#menu').toggleClass('header-menu-icon-active')
            }
        )

        //--------To-Up-Scroll----------
        $(window).on('scroll', function(){
                if ($(window).scrollTop() > 200) {
                    $('#toUp').css('bottom','30px')
                } else {
                    $('#toUp').css('bottom','-36px')
                }
            }
        )
        //--------To-Up-Click----------
        $('#toUp').on('click', function(){
                let BodyHtml = $('html, body')
                BodyHtml.animate({scrollTop: 0}, 500)
            }
        )
    }
)