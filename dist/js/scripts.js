new WOW().init();

// TOOLTIPS ANIMATION
$(document).ready(function () {
    $('.tooltip-inner').addClass('animate zoomIn')
});

// TOOLTIP INIT
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// SNACKBAR REMOVE
$("#snackbarAction").click(function () {
    $("#snackbar").remove();
});
