// When the DOM is ready,
$(function() {
    $('picture').picture();

    $('button#nav-toggle').on('click', function() {
        $(this).toggleClass('active');
        $('nav#main-nav').slideToggle('fast');
    });
});
