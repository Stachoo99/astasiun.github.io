$(document).ready(function () {
    checkScroll();
    fadeDiv();
    setDate();
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


/* EXPANDING MENU START  */

function fadeDiv() {
    $("#show").click(function () {
        $(".technology").slideToggle("slow");
        $('.technology').removeClass('hidden');
    });
}
/* EXPANDING MENU END*/

/* FOOTER DATA START */

function setDate() {

var today = new Date();
var year = today.getFullYear();

var rok = document.getElementById('mainfooter');
rok.innerHTML = '<p>Copyright &copy;' + year + ' Adam Stasiun </p>';
}

/* FOOTER DATA END */
