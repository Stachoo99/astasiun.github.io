var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Dobry Wieczór';
    } else if (hourNow > 12) {
        greeting = 'Dzień Dobry';
    } else if (hourNow > 5) {
        greeting = 'Dzień Dobry';
    } else {
        greeting = 'Witam'
    }

//document.write('<h1>' + greeting + '</h1>');
var el = document.getElementById('greeting')
el.textContent = greeting + '';