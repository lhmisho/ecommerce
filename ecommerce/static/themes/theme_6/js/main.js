/*================
 Template Name: ProLanding - Product Landing Page Template
 Description: ProLanding is a powerful 100% Responsive Product landing page template.
 Version: 1.0
 Author: https://themeforest.net/user/htmllover/portfolio
 =======================*/

// TABLE OF CONTENTS


jQuery(function ($) {

    'use strict';

    //hero slider
    $('.hero-slider-1').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1
    })

    //features products
    $('.feature-products-slider').owlCarousel({
        loop: false,
        margin: 10,
        dots: false,
        nav: true,
        navText: ["<span class='ti-angle-left'></span>", "<span class='ti-angle-right'></span>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    //features products
    $('.our-partner-slider').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 7
            }
        }
    })

    // //product details
    // $('.product-detail-slider').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     dot: false,
    //     nav:true,
    //     navText : ["<span class='ti-angle-left'></span>","<span class='ti-angle-right'></span>"],
    //     items: 1
    // })

    //tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    //Scripts for dynamic menu (menu_builder)
    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        if ($subMenu.children("li").length) {
            $subMenu.toggleClass('show');
        }

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass("show");
        });

        return false;
    });


    $('.popup-with-form').magnificPopup({
        type: 'inline',
        fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });


    /*******************
     06. Category menu
     ********************/

    $('.category-heading').click(function () {
        $('.category-list-menu').slideToggle();
    });

    //single page category menu always hide
    $(".single-page-category-list").hide();


    //category menu show hide js
    $('.cate-lst').click(function () {
        $('.parent-menu').slideToggle('slow');
    });
    //single page category menu always hide
    $(".single-page-categories").hide();

    // var top = $('.hero-slider').height();
    // $('.parent-menu').css({'height': top + 'px'});
    // Offcanvas menu for mobile version

    //sidenav js
    $('[data-sidenav]').sidenav();


//    fixed category menu
    var nav = $('#fix-category-menu');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 450) {
            nav.addClass("fix-category-nav");
        } else {
            nav.removeClass("fix-category-nav");
        }
    });

}); // JQuery end