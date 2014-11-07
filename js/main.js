// When the DOM is ready,
$(function() {
    /* global... */
    $('.category-search-button').on('click', function(e) {
        e.preventDefault();
        $('.category-search-box').slideToggle();
        return false;
    });

    function toggleMobileUI(changed) {
        if(changed.matches) {
            console.log('not mobile');
            $('footer .accordion li').slideDown();
        } else {
            console.log('mobile');
        }
    }
    var mq = window.matchMedia('(min-width: 640px)');
    mq.addListener(toggleMobileUI);
    toggleMobileUI(mq);
    /* ...global */


    /* #page-main... */
    $('picture').picture();
    var numPictures = $('figure picture').length;
    if (numPictures < 2) {
        $('figure button#main-img-prev, figure button#main-img-next').hide();
    } else {
        $('figure button#main-img-prev').on('click', function() {
            var $figure = $(this).parent('figure');
            var $pictures = $figure.children("picture");
            var $current = $pictures.filter(":visible");
            var $prev = $current.prev('picture');
            if ($prev[0]) {
                $current.fadeOut('fast', function() {
                    $('figure button#main-img-next').removeAttr('disabled');
                    $prev.fadeIn('fast');
                });
            }
            if (!$prev.prev('picture')[0]) {
                $(this).attr('disabled', 'disabled');
            } else {
                $(this).removeAttr('disabled');
            }
        });
        $('figure button#main-img-next').on('click', function() {
            var $figure = $(this).parent('figure');
            var $pictures = $figure.children("picture");
            var $current = $pictures.filter(":visible");
            var $next = $current.next('picture');
            if ($next[0]) {
                $current.fadeOut('fast', function() {
                    $('figure button#main-img-prev').removeAttr('disabled');
                    $next.fadeIn('fast');
                });
            }
            if (!$next.next('picture')[0]) {
                $(this).attr('disabled', 'disabled');
            } else {
                $(this).removeAttr('disabled');
            }
        });
    }
    /* ...#page-main */


    /* #page-search... */
    var searchPageNumber = parseInt($('#search-controls-select').val());
    var numSearchPages = parseInt($('#search-controls-numpages').text());
    if (searchPageNumber < numSearchPages) {
        $('#search-controls-next').removeAttr('disabled');
    }
    if (searchPageNumber > 1) {
        $('#search-controls-prev').removeAttr('disabled');
    }
    /* ...#page-search */
});
