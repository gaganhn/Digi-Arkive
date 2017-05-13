// custom JS
$("a.navitems").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
});


$("#card").flip({
    trigger: 'manual'
});


$(".signup_link").click(function() {

    $(".signin_form").css('opacity', '0');
    $(".signup_form").css('opacity', '100');


    $("#card").flip(true);

    return false;
});

$("#unflip-btn").click(function() {

    $(".signin_form").css('opacity', '100');
    $(".signup_form").css('opacity', '0');

    $("#card").flip(false);

    return false;

});
