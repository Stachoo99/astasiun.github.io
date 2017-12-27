$(document).ready(function () {
    checkScroll();
    fadeDiv();
});

$(window).scroll(function () {
    checkScroll();
});

/**
 * Listen to scroll to change header opacity class
 */
function checkScroll() {
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if ($(window).scrollTop() > startY) {
        $('.navbar').addClass("after-fix");
    } else {
        $('.navbar').removeClass("after-fix");
    }
}

if ($('.navbar').length > 0) {
    $(window).on("scroll load resize", function () {
        checkScroll();
    });
}


// The function actually applying the offset
function offsetAnchor() {
    if (location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 100);
    }
}

// Captures click events of all <a> elements with href starting with #
$(document).on('click', 'a[href^="#"]', function (event) {
    // Click events are captured before hashchanges. Timeout
    // causes offsetAnchor to be called after the page jump.
    window.setTimeout(function () {
        offsetAnchor();
    }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);



function fadeDiv() {
    $("#show").click(function () {
        $(".technologie").slideToggle("slow");
        $('.technologie').removeClass('hidden');
    });
}
