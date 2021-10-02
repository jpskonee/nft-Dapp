/*
1. back to top script
2. progressbar
3. tab js
4. For Chart
5. For Expired Timer
6. horizontal timeline
7. video-popup
8. owlcarusel initialization
9. carousel resize js
10. animation wow
11. app preloader js
12. fat-nav js
*/

jQuery(function() {

    /*===================================================================================*/
    /*  back to top script
    /*===================================================================================*/
    var offset = 500;
    var back_top = jQuery('.skip_swing');
    jQuery(window).scroll(function(){
        (jQuery(this).scrollTop() > offset) ? back_top.addClass('show_icon') :  back_top.removeClass('show_icon');
    });

    jQuery('a.skip_swing').on('click', function() {
        var Lochref = jQuery(this).attr('href');
        jQuery("html, body").stop().animate({
            scrollTop: jQuery(Lochref).offset().top
        }, 1500);
        return false;
    });

    /*===================================================================================*/
    /*  progressbar
    /*===================================================================================*/
    if (jQuery('#progressbar').length > 0) {
        jQuery( "#progressbar" ).progressbar({
            value: 70
        });
    }
    if (jQuery('#progressbar2').length > 0) {
        jQuery( "#progressbar2" ).progressbar({
            value: 70
        });
    }

    /*===================================================================================*/
    /*  tab js
    /*===================================================================================*/
    if (jQuery('#horizontalTab').length > 0) {
        jQuery('#horizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true,   // 100% fit in a container
            //closed: 'accordion', // Start closed if in accordion view
            activate: function() { // Callback function if tab is switched
                var $tab = jQuery(this);
                var $info = jQuery('#tabInfo');
                var $name = jQuery('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
    }

    /*===================================================================================*/
    /*  For Chart
    /*===================================================================================*/

    // chart1
    if (jQuery('#chart1').length > 0) {
        var ctx = document.getElementById('chart1');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: [
                    'Core Token Sale',
                    'Partners & Advisors',
                    'Project Team Share',
                    'Reserve Token',
                    'Bounties',
                    'Bonuses'
                ],
                datasets: [{
                    label: '# of Votes',
                    data: [60,15,10,8,4,3],
                    backgroundColor: [
                        '#4845b4',
                        '#4fc489',
                        '#0ba1d6',
                        '#efe943',
                        '#e9734a',
                        '#5990a4'
                    ],
                    borderWidth: 0,
                    hoverOffset: false
                }]
            },
            options: {
                legend: {
                    display: false
                }
            },

        });
    }

    // chart2
    if (jQuery('#chart2').length > 0) {
        var ctx = document.getElementById('chart2');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: [
                    'Core Development',
                    'Sales & Marketing',
                    'Legal & Financial',
                    'Management',
                    'Bounties'
                ],
                datasets: [{
                    label: '# of Votes',
                    data: [40,30,15,10,5],
                    backgroundColor: [
                        '#4845b4',
                        '#4fc489',
                        '#0ba1d6',
                        '#efe943',
                        '#e9734a'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                legend: {
                    display: false
                },
            },
        });
    }

    // chart3
    if (jQuery('#chart3').length > 0) {
        var ctx = document.getElementById('chart3');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: [
                    'Core Token Sale',
                    'Partners & Advisors',
                    'Project Team Share',
                    'Reserve Token',
                    'Bounties',
                    'Bonuses'
                ],
                datasets: [{
                    label: '# of Votes',
                    data: [60,15,10,8,4,3],
                    backgroundColor: [
                        '#4845b4',
                        '#4fc489',
                        '#0ba1d6',
                        '#efe943',
                        '#e9734a',
                        '#5990a4'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                legend: {
                    display: false
                },
            },
        });
    }

    // chart4
    if (jQuery('#chart4').length > 0) {
        var ctx = document.getElementById('chart4');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: [
                    'Core Token Sale',
                    'Partners & Advisors',
                    'Project Team Share',
                    'Reserve Token',
                    'Bounties',
                    'Bonuses'
                ],
                datasets: [{
                    label: '# of Votes',
                    data: [60,15,10,8,4,3],
                    backgroundColor: [
                        '#4845b4',
                        '#4fc489',
                        '#0ba1d6',
                        '#efe943',
                        '#e9734a',
                        '#5990a4'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                legend: {
                    display: false
                },
            },
        });
    }

    // chart5
    if (jQuery('#chart5').length > 0) {
        var ctx = document.getElementById('chart5');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: [
                    'Core Development',
                    'Sales & Marketing',
                    'Legal & Financial',
                    'Management',
                    'Bounties'
                ],
                datasets: [{
                    label: '# of Votes',
                    data: [40,30,15,10,5],
                    backgroundColor: [
                        '#4845b4',
                        '#4fc489',
                        '#0ba1d6',
                        '#efe943',
                        '#e9734a'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                legend: {
                    display: false
                },
            },
        });
    }

    /*===================================================================================*/
    /*  For Expired Timer
    /*===================================================================================*/

    // clock-1 - index1.html
    if (jQuery('#clock').length > 0) {
        var exp_date = "Jan 1, 2022 15:37:20";
        timer("clock", exp_date);
    }
    // clock-2 - index2.html
    if (jQuery('#clock2').length > 0) {
        var exp_date = "Jan 1, 2022 15:37:20";
        timer("clock2", exp_date);
    }
    // clock-3 - index3.html
    if (jQuery('#clock3').length > 0) {
        var exp_date = "Jan 1, 2022 15:37:20";
        timer("clock3", exp_date);
    }

    function timer(clockID, exp_date) {
        // Set the date we're counting down to
        var countDownDate = new Date(exp_date).getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {
            // Get today's date and time
            var now = new Date().getTime();
            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            //add a zero (0) if value less then 9
            var days    = ( days < 10 ) ? '0' + days : days;
            var hours   = ( hours < 10 ) ? '0' + hours : hours;
            var minutes = ( minutes < 10 ) ? '0' + minutes : minutes;
            var seconds = ( seconds < 10 ) ? '0' + seconds : seconds;

            // Output the result in an element with id="demo"
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("mins").innerHTML = minutes;
            document.getElementById("secs").innerHTML = seconds;

            // If the count down is over, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById(clockID).innerHTML = "EXPIRED";
            }
        }, 1000);
    }

    /*===================================================================================*/
    /*  horizontal timeline
    /*===================================================================================*/
    if (jQuery('.timeline').length > 0) {
        timeline(document.querySelectorAll('.timeline'), {
            forceVerticalMode: 767,
            mode: 'horizontal',
            verticalStartPosition: 'left',
            visibleItems: 4
        });
    }

    /*===================================================================================*/
    /*  video-popup
    /*===================================================================================*/
    if (jQuery('.video-button').length > 0) {
        jQuery(".video-button").modalVideo({
            youtube:{
                autoplay: 1,
                controls: 1
            },
            ratio:'16:9'
        });
    }

    /*===================================================================================*/
    /*  owlcarusel initialization
    /*===================================================================================*/
    if (jQuery('.client-logos-slider').length > 0) {
        jQuery(".client-logos-slider").owlCarousel({
            items: 6, // The number of items you want to see on the screen.
            margin: 0, //margin-right(px) on item.
            loop: true, //Infinity loop. Duplicate last and first items to get loop illusion.
            autoplay: true, //Autoplay true or false
            // width: auto,
            mouseDrag: true, // Mouse drag enabled.
            touchDrag: true, // Touch drag enabled.
            navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'], // HTML allowed.
            nav: false, // Show next/prev buttons.
            dotsEach: false, //Show dots each x item.
            smartSpeed: 750, // slide speed
            dots: false, //Show dots navigation.
            lazyLoad:true,
            responsive: {
                0:{
                    items: 2
                },480:{
                    items: 3
                },767:{
                    items: 4
                },991:{
                    items: 5
                },992:{
                    items: 6
                }
            }
        });
    }

    /*===================================================================================*/
    /*  animation wow
    /*===================================================================================*/
    if (jQuery('.wow').length > 0) {
        jQuery(function(){
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: false,
                live: true,
                scrollContainer: null,
            });
            wow.init();
        });
    }

    /*===================================================================================*/
    /*  newsletter form email validation
    /*===================================================================================*/
    jQuery('.newsletter-field form').submit(function() {
        var nlField = jQuery('.newsletter-field input[type="email"]');
        var expEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[_a-z0-9-]+(\.[_a-z0-9-]+)*(\.[a-z]{2,4})$/;
        if ( nlField.val() == '' || expEmail.test( nlField.val() ) != true ) {
            jQuery(this).next().html('<div class="alert alert-danger alert-dismissible mt-10"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fa fa-info-circle"></i> Please enter correct email address!</div>');
            return false;
        } else {
            return;
        }
    });

});

jQuery(window).on('load', function() {

    /*===================================================================================*/
    /*  website loader js
    /*===================================================================================*/
    setTimeout(function(){ 
        jQuery('.unicrypt-pre-con').fadeOut('slow');
    }, 500);

});

jQuery(document).ready(function() {

    /*===================================================================================*/
    /*  fat-nav js
    /*===================================================================================*/
    if (jQuery('.fat-nav').length > 0) {
        (function() { jQuery.fatNav(); }());
        var fatContent = jQuery( '.main-menu ul').html();
        var fatHeaderRight = jQuery( '.header-right').html();
        var fatNav = '<div class="fat-nav__wrapper" id="fatmenu"><ul>' + fatContent + '<div class="header-right">' + fatHeaderRight + '</div></ul></div>';
        jQuery( '.fat-nav' ).html( fatNav );
        jQuery('#fatmenu ul li.menu-item-has-children').append("<span class='toggle_button'><small></small></span>");
        jQuery('#fatmenu ul ul').hide();
        jQuery('ul li.menu-item-has-children > .toggle_button').click(function() {
            if(jQuery(this).parent().children('ul').hasClass('submenu') ) {
                jQuery(this).parent().children('ul').removeClass("submenu").slideUp(400);
                jQuery(this).removeClass( 'active_item' );
            }
            else{
                jQuery(this).parent().children('ul').addClass("submenu").slideDown(400);
                jQuery(this).addClass( 'active_item' );
            }
        });
    }

    jQuery('.main-menu ul li ul').parent('li').addClass('menuarrow');

});

jQuery(window).resize(function() {
    var win_width = jQuery(window).width();
    if (win_width > 1099) {
        jQuery('.fat-nav').removeClass('active').css("display", "none");
        jQuery('.hamburger').removeClass('active');
    }

});