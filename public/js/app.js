"use strict";

$(function () {

    $(document).ready(function () {
        $(window).scrollTop(0);
    });

    $(".top").click(function () {
        $('html, body').animate({
            scrollTop: $(".landing").offset().top
        }, 1000);
    });

    $(".button").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top + 10
        }, 1000);
        $('#p1').animate({
            scrollTop: $("main").offset().top }, 'slow');
    });

    $(".button2").click(function () {
        $('html, body').animate({
            scrollTop: $("#work").offset().top + 10
        }, 1000);
        $('#p2').animate({
            scrollTop: $("main").offset().top }, 'slow');
    });

    $(".button3").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top + 10
        }, 1000);
    });
});