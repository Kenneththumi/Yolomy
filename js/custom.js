
// Sticky navbar
// =========================
$(document).ready(function () {
    // Custom function which toggles between sticky class (is-sticky)
    var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        }
        else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };

    // Find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function () {
        var sticky = $(this);
        var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');

        // Scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
            stickyToggle(sticky, stickyWrapper, $(this));
        });

        // On page load
        stickyToggle(sticky, stickyWrapper, $(window));
    });

   
});

$(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});

$(document).scroll(function () {
        var $nav = $(".nav-link");
        $nav.toggleClass('scrolled-color', $(this).scrollTop() > $nav.height());
});

$(document).scroll(function () {
        var $nav = $(".shop-img");
        $nav.toggleClass('bg-blck', $(this).scrollTop() > $nav.height());
});

//logo bg on change
$(document).scroll(function () {
        var $nav = $(".logo");
        $nav.toggleClass('logo-bg', $(this).scrollTop() > $nav.height());
});

//NAVBAR-collapse
$(document).scroll(function () {
        var $nav = $(".navbar-collapse");
        $nav.toggleClass('bg-transparent', $(this).scrollTop() > $nav.height());
});