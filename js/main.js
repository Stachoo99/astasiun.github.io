$(document).ready(function () {
    checkScroll();
    fadeDiv();
    ustawDate();
    rotateDeg();
});

$(window).scroll(function () {
    checkScroll();
});

/* FADE NAVBAR */

function checkScroll() {
    var startY = $('.navbar').height() * 2; 

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

/* FADE NAVBAR END */

// The function actually applying the offset
function offsetAnchor() {
    if (location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 100);
    }
}

// JUMP TO FIX 
$(document).on('click', 'a[href^="#"]', function (event) {

    window.setTimeout(function () {
        offsetAnchor();
    }, 0);
});

window.setTimeout(offsetAnchor, 0);
// JUMP TO FIX - END


/* ROZWIJANE MENU TECHNOLOGIE */

function fadeDiv() {
    $("#show").click(function () {
        $(".technologie").slideToggle("slow");
        $('.technologie').removeClass('hidden');
    });
}
/* ROZWIJANE MENU TECHNOLOGIE END*/

/* DATA W STOPCE */

function ustawDate() {

var today = new Date();
var year = today.getFullYear();

var rok = document.getElementById('stopka');
rok.innerHTML = '<p>Copyright &copy;' + year + ' Adam Stasiun </p>';
}

/* DATA W STOPCE END */
