$(document).ready(function() {
    // Example: Smooth scroll for anchor links
    $("nav ul li a").click(function(event) {
        event.preventDefault();
        var target = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
});
