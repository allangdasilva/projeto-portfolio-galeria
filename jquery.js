//--------Open-Modal----------
function openImage(valueSrc) {
    $('.modal-content img').attr('src', valueSrc)
    $('.modal').css('opacity','1')
    $('.modal').css('pointer-events','all')
    $('#close').addClass('active')
    $('#menu').css('display','none')
    $('.image img').delay(50).animate({scale:'1'},{duration:200})
}

$(window).on('load',
    function () {

        //--------Menu----------
        $('#menu').on('click', function () {
                if ($('#submenu').css('top') == '-80px') {
                    $('#submenu').animate({ top: '60px' }, { duration: 700 })
                    $(this).addClass('active')
                } else {
                    $('#submenu').animate({ top: '-80px' }, { duration: 700 })
                    $(this).removeClass('active')
                }
            }
        )

        //--------Close-Modal----------
        $('#close').on('click', function () {
                $('.modal').css('opacity','0')
                $('.modal').css('pointer-events','none')
                $(this).removeClass('active')
                $('#menu').css('display','block')
                $('.image img').animate({scale:'0'},{duration:200})
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