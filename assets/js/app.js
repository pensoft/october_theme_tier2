$(window).scroll(animateNumbers);
var viewed = false;

var documentHasScroll = function() {
    return window.innerHeight <= document.body.offsetHeight;
};

window.addEventListener('scroll', function (e) {
    var headernavbar = document.getElementById("headernavbar");
    var logo = document.getElementById("navbar-brand");
    if (window.scrollY > headernavbar.offsetHeight){
        var headerNavbarNav = document.querySelector('#headerNavbarNav')
        headernavbar.classList.add('scrolled');
        logo.classList.add('scrolled');
    }else{
        headernavbar.classList.remove('scrolled');
        logo.classList.remove('scrolled');
    }
});


$(document).ready(function() {
    // $("nav").removeClass("no-transition");
	/* MENU */
	$('.navbar-nav').attr('id', 'menu'); // please don't remove this line
	$( '<div class="calendar-top"></div>' ).insertBefore( "#calendar" );
	$( '<div class="card-profile-top"></div>' ).insertBefore( ".card.profile.card-profile" );
	var divs = $(".card-profiles > div");
	for(var i = 0; i < divs.length; i+=2) {
		divs.slice(i, i+2).wrapAll( '<div class="col-xs" />');
	}

	var headerNavbar = $('#headerNavbar');
	var width100 = $('.width100');
	var innerWidth = $('body').innerWidth();
	headerNavbar.width(innerWidth);
	width100.width(innerWidth);

    $('body').on('click', '.work_packages .accordion-toggle, .pilots .accordion-toggle, .messages .accordion-toggle, .award-faqs .accordion-toggle', function () {
        if ($(this).next(".accordion-content").is(':visible')) {
            $(this).next(".accordion-content").slideUp(300);
            $(this).children().find(".plusminus").text('+');
            $(this).children(".plusminus").html('<span class="plus"></span>');
        } else {
            $(this).next(".accordion-content").slideDown(300);
            $(this).children().find(".plusminus").text('-');
            $(this).children(".plusminus").html('<span class="minus"></span>');
        }
    });

    $('.work_packages .accordion-content, .pilots .accordion-content, .messages .accordion-toggle, .award-faqs .accordion-toggle').each(function( index, value ) {
        $(value).find('a').attr( "onclick", "window.open(this.href, '_blank');" )
    });


    $('.award-faqs .accordion-content').each(function( index, value ) {
        $(value).find('a').attr( "onclick", "window.open(this.href, '_blank');" )
    });

    $('.nav-item').children("a").each(function(){
        if($(this).attr('data-toggle') == 'dropdown'){
            $(this).removeAttr('data-toggle')
        }
    });

    $("nav").removeClass("no-transition");

    if (window.location.hash) {
        var link = window.location.hash;
        var anchorId = link.substr(link.indexOf("#") + 1);
        if($("#"+anchorId).offset()){
            $('html, body').animate({
                scrollTop: $("#"+anchorId).offset().top - 150
            }, 500);
        }else{
            $('.accordion-border').each(function(){
                var title = $(this).find(".accordion-toggle .col-xs.start-xs").text().toUpperCase();
                var toggler = $(this).find(".accordion-toggle");
                if ( title.indexOf(anchorId.toUpperCase()) >= 0 && !toggler.next(".accordion-content").is(':visible') ){
                    $('html, body').animate({
                        scrollTop: toggler.parent().offset().top - 150
                    }, 500);
                    toggler.trigger( "click" );
                }
            });
        }
    }



    $('.dropdown a').click(function(event) {

        if (location.href.indexOf("#") != -1) {
            var link = $(this).attr('href');
            var anchorId = link.substr(link.indexOf("#") + 1);
            if($("#"+anchorId).length>0){
                $('html, body').animate({
                    scrollTop: $("#"+anchorId).offset().top - 150
                }, 500);
            }else{
                // event.preventDefault();
                $("path[title='"+anchorId.toUpperCase()+"']").addClass('active_path');

                $('.accordion-border').each(function(){
                    var title = $(this).find(".accordion-toggle .col-xs.start-xs").text().toUpperCase();
                    var toggler = $(this).find(".accordion-toggle");
                    if ( title.indexOf(anchorId.toUpperCase()) >= 0 && !toggler.next(".accordion-content").is(':visible') ){
                        $('html, body').animate({
                            scrollTop: toggler.parent().offset().top - 150
                        }, 500);
                        toggler.trigger( "click" );
                        event.preventDefault();
                    }
                });
            }
        }


    });


	$('body').on('click', '.pilots .accordion-toggle', function () {
		if ($(this).next(".accordion-content").is(':visible')) {
			$(this).next(".accordion-content").slideUp(300);
			$(this).children(".plusminus").html('<span class="plus"></span>');
		} else {
			$(this).next(".accordion-content").slideDown(300);
			$(this).children(".plusminus").html('<span class="minus"></span>');
		}
	});


    $('body').on('click', '.homepage_events .accordion-toggle', function () {
        var $this = $(this);
        var isOpen = $this.hasClass('open');

        // Close all items
        $('.homepage_events .accordion-content').slideUp(300);
        $('.homepage_events .accordion-toggle').removeClass('open')
            .children(".plusminus").html('<span class="plus">&nbsp;</span>');
        $('.homepage_events .accordion-toggle').parent().removeClass('open');

        // If clicked item was closed, open it
        if (!isOpen) {
            $this.next(".accordion-content").slideDown(300);
            $this.children(".plusminus").html('<span class="minus">&nbsp;</span>');
            $this.addClass('open');
            $this.parent().addClass('open');
        }
    });

    /* Handle text and plus/minus changes on toggle **/
    $('body').on('click', '.insider-border .accordion-toggle', function () {
        var $accordionContent = $(this).next(".accordion-content");
        var $toggleText = $(this).find(".member-toggle");
        var $plusminusSpan = $(this).find(".plusminus span");

        if ($accordionContent.is(':visible')) {
            $toggleText.text('Show members');
            $plusminusSpan.removeClass('minus').addClass('plus');
        } else {
            $toggleText.text('Hide members');
            $plusminusSpan.removeClass('plus').addClass('minus');
        }
    });


    $('.pilots .accordion-border').click(function(){
        var title = $(this).find(".accordion-toggle .col-xs.start-xs").text();
        var toggler = $(this).find(".accordion-toggle");
        var string = title.split(',')[0];
        if (toggler.next(".accordion-content").is(':visible')) {
            $("path[title='"+title+"']").removeClass('active_path');
        } else {
            $("path[title='"+title+"']").addClass('active_path');
        }
    });

    $('body').on('click', '#mycomponentpartners .accordion-toggle', function () {
        if ($(this).next(".accordion-content").is(':visible')) {
            $(this).next(".accordion-content").slideUp(300);
            // $(this).children(".plusminus").html('<span>Members</span><span class="plus"></span>');
        } else {
            $(this).next(".accordion-content").slideDown(300);
            // $(this).children(".plusminus").html('<span>Members</span><span class="minus"></span>');
        }
    });

	onHashChange();
	$(window).on("hashchange", function() {
		onHashChange();
	});

	$('.nav.nav-pills').removeAttr('id');

	var count = $("h1").text().length;

	$('.events_tabs, .videos .tabs').each(function(){
		// For each set of tabs, we want to keep track of
		// which tab is active and its associated content
		var $active, $content, $links = $(this).find('a');
		var speed = "fast";
		var activeTab = $(location.hash);
		// If the location.hash matches one of the links, use that as the active tab.
		// If no match is found, use the first link as the initial active tab.
		$active = $($links.filter("[href=\'"+location.hash+"\']")[0] || $links[0]);

        if($(this).parent().parent().hasClass('videos')){
            $active.addClass('active');
        }

         if($(this).parent().parent().hasClass('events')){
            $active.addClass('active');
        }

		$content = $($active[0].hash);

		// Hide the remaining content
		$links.not($active).each(function () {
			$(this.hash).hide();
		});

		if(activeTab.length){
			$content.slideDown(speed);
			//scroll to element
			$('html, body').animate({
				scrollTop:  activeTab.offset().top - $('header').height()
			}, speed);
		}

		// Bind the click event handler
		$(this).find("a").click(function (e) {
			if($(this).hasClass('active')) {
				$content.slideDown({
					scrollTop: $content.offset().top - $('header').height()
				}, speed);
				var screenSize = getScreenSize();
				if (screenSize.width < 800) {
					// scroll to element
					$('html, body').animate({
						scrollTop: $content.offset().top - $('header').height() + 300  // mobile
					}, speed);
				}else{
					//scroll to element icons top
					$('html, body').animate({
						scrollTop:  $content.offset().top - $('header').height() + 300
					}, speed);
				}
				e.preventDefault();
				return false;
			}
			// Make the old tab inactive.
			$active.removeClass('active');
			// $content.slideUp({
			// 	scrollTop: $content.offset().top - $('header').height() - $('.left_sidebar').height()
			// }, speed);
			$content.hide();

			// Update the variables with the new link and content
			$active = $(this);
			$content = $(this.hash);

			location.hash = $active[0].hash;

			// Make the tab active.
			$active.addClass('active');
			$content.slideDown({
				scrollTop: $content.offset().top - $('header').height()
			}, speed);
			// var screenSize = getScreenSize();
			// if (screenSize.width < 800) {
			// 	// scroll to element
			// 	$('html, body').animate({
			// 		scrollTop: $content.offset().top - $('header').height() + 300 // mobile
			// 	}, speed);
			// }else{
			// 	//scroll to element icons top
			// 	$('html, body').animate({
			// 		scrollTop:  $content.offset().top - $('header').height() + 300
			// 	}, speed);
			// }

			// Prevent the anchor\'s default click action
			e.preventDefault();
		});
	});



	$('.numbers').attr('data-aos', 'fade-up');
	$('.mission .container').attr('data-aos', 'fade-right');
	$('.vision .container').attr('data-aos', 'fade-right');
	$('.card-img-top').attr('data-aos', 'fade-up');
	$('.logo-container').attr('data-aos', 'fade-up');
	$('.subscribe-items a').attr('data-aos', 'fade-up');
	$('.icons a').attr('data-aos', 'fade-up');
	$('.about h1.display-1').attr('data-aos', 'fade-up');
	$('h2.underline').attr('data-aos', 'fade-up');
	$('.news_column').attr('data-aos', 'fade-up');
	// $('.timeline-item').attr('data-aos', 'fade-up');

	// about page

	$('.about img').attr('data-aos', 'fade-up');

	$('.country_map').attr('data-aos', 'fade-up');
	$('.partner-item').attr('data-aos', 'fade-up');

	// media
	$('.flyer_image_container img').attr('data-aos', 'fade-up');
	$('.broshure_and_poster img').attr('data-aos', 'fade-up');
	$('.card-container').attr('data-aos', 'fade-up');
	// $('.coordinator_image').attr('data-aos', 'fade-up');


	// $('.news_column, .single-news-item').each(function(){
	$('.news_column').each(function(){
		$(this).find('img').wrapAll("<div class='shadow'></div>")
	});

	$('.news .news-container, .news .news-image').removeClass('col-xs-12').removeClass('center-xs');

	$('.partners .partner_description, .partners .list-item-body, .card-profiles .card-profile .card-body').each(function(){
		var countParagraphs = $(this).find('p').length;
		if(countParagraphs > 1) {
			$(this).find('p').first().append('<div class="dorsal">Read more</div>');
			$(this).find('p:not(:first)').wrapAll("<div class='toogle-contact-paragraphs'></div>")
		}
	});

	$('.dorsal').click(function () {
		var link = $(this);
		link.parent().parent().find('.toogle-contact-paragraphs').slideToggle('slow', function() {
			if ($(this).is(':visible')) {
				link.text('Read less');
			} else {
				link.text('Read more');
			}
		});

	});


	$('.modal-content .modal-body ul').each(function(){
        $(this).before('<div class="learn_more_modal">Learn more</div>');
        $(this).wrapAll("<div class='toogle-contact-paragraphs'></div>")
	});

	$('.learn_more_modal').click(function () {
		var link = $(this);
		link.next('.toogle-contact-paragraphs').slideToggle('slow', function() {
			// if ($(this).is(':visible')) {
			// 	link.text('Learn less');
			// } else {
			// 	link.text('Learn more');
			// }
		});

	});

	$('.see_all_partners_link').hide();

    // Handle the back to top arrow
    var backToTopButton = $('.toTheTop');
    var headerImageBarHeight = $('.header-image-bar').outerHeight();
    var footer = $('.dark-background');

    function adjustButtonPosition() {
        var scrollDistance = $(window).scrollTop();
        var footerPosition = footer.offset().top - $(window).height();

        if (scrollDistance > headerImageBarHeight) {
            backToTopButton.fadeIn();

            if (scrollDistance < footerPosition) {
                backToTopButton.removeClass('sticky');
            } else {
                backToTopButton.addClass('sticky');
            }
        } else {
            backToTopButton.fadeOut();
        }
    }

    adjustButtonPosition();

    $(window).scroll(adjustButtonPosition);

    backToTopButton.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });


    initDesktopMenuToggle();

    initHamburgerMenuDropdowns();

    initNavbarScrollHandler();

    initSearchToggles();

});





function openEventModalBtn(){
    setTimeout(function() {
        $(".openEventModalBtn").trigger("click");
    },10);
}




function onHashChange(){
	$("path").removeClass('active_path');
	$(".accordion-content").hide();
	var caseStudiesHashTitle = location.hash;

	if(caseStudiesHashTitle){
		var caseStudiesTitle = caseStudiesHashTitle.substring(1, caseStudiesHashTitle.length);
		$("path[title='"+caseStudiesTitle.toUpperCase()+"']").addClass('active_path');

		$('.pilots .accordion-border').each(function(){
			var title = $(this).find(".accordion-toggle .col-xs.start-xs").text().toUpperCase();
			var toggler = $(this).find(".accordion-toggle");
			if ( title.indexOf(caseStudiesTitle.toUpperCase()) >= 0 && !toggler.next(".accordion-content").is(':visible') ){
				toggler.trigger( "click" );
			}
		});
	}
}


function createTippy(element, options) {
	return new Promise(resolve => {
		tippy(element, Object.assign({}, {
			allowHTML: true,
			interactive: true,
			animation: 'scale',
			theme: 'light',
		}, options));
		resolve();
	});
}



function encodeURIObject(data){
    return Object.keys(data).map(function (i) {
        return encodeURIComponent(i) + '=' + encodeURIComponent(data[i])
    }).join('&');
}

function isBreakpointLarge() {
    return window.innerWidth <= 991;
}


// Function to show the search form
function showSearchForm() {
    // Simple fade in with a pop effect
    $('#search').fadeIn(200);
    $('#search form').addClass('pop-in');

    // Clear any previous search text and focus the input
    $('#search input.search_input').val('').focus();

    $('body').addClass('search-open');

    // Prevent scrolling when search is open
    $('body').css('overflow', 'hidden');

    // Add event listener to close search when clicking outside
    $(document).on('click.searchClose', function(event) {
        const $search = $('#search form');
        const $searchToggle = $('#searchToggle');

        // If click is outside search container and not on search button
        if (!$search.is(event.target) &&
            $search.has(event.target).length === 0 &&
            !$searchToggle.is(event.target) &&
            $searchToggle.has(event.target).length === 0 &&
            !$(event.target).closest('.close-search').length) {
            hideSearchForm();
        }
    });

    // Add escape key handler
    $(document).on('keydown.searchEscape', function(e) {
        if (e.key === 'Escape') {
            hideSearchForm();
        }
    });

    // Add enter key handler to submit the form
    $('#search input.search_input').on('keydown.searchSubmit', function(e) {
        if (e.key === 'Enter') {
            $('#search form').submit();
        }
    });
}

// Function to hide the search form
function hideSearchForm() {
    // Simple fade out
    $('#search form').removeClass('pop-in');
    $('#search').fadeOut(200);

    $('body').removeClass('search-open');

    // Restore scrolling
    $('body').css('overflow', '');

    // Remove the document event listeners
    $(document).off('click.searchClose');
    $(document).off('keydown.searchEscape');
    $('#search input.search_input').off('keydown.searchSubmit');
}




function requestFormLibrary() {
	$('#mylibraryForm').on('click', 'a', function () {
		var $form = $(this).closest('form');
		$form.request();
	})
}

function requestFormPartners() {
	$('#myPartnersForm').on('click', 'a', function () {
		var $form = $(this).closest('form');
		$form.request();
	})
}

function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	if($(elem).height()){
		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();

		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}
	return;

}


function animateNumbers() {
	if (isScrolledIntoView($(".numbers")) && !viewed) {
		viewed = true;
		$('.count').each(function () {
			var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			}, {
				duration: 1800,
				easing: 'swing',
				step: function (now) {
					$(this).text(parseFloat(now).toFixed(size));
				}
			});
		});
	}
}


function scrollDown(){
	var element = $('#layout-content');
	$("html, body").animate({ scrollTop: element.offset().top - 190 }, 500);
}


function handleCustomSVGMapMouseMove(event) {
    var countryCode = $(event.target).parent().parent().attr('country_code');
    var title = $(event.target).parent().parent().attr('title');
    var tooltip = document.getElementById("tooltip");
    if (!countryCode) {
        countryCode = $(event.target).parent().parent().parent().attr('country_code');
        title = $(event.target).parent().parent().parent().attr('title');
    }

    if (!countryCode) {
        countryCode = $(event.target).parent().parent().parent().parent().attr('country_code');
        title = $(event.target).parent().parent().parent().parent().attr('title');
    }

    switch (countryCode) {
        case "AF":
        case "AX":
        case "AL":
        case "DZ":
        case "AS":
        case "AD":
        case "AD":
        case "AO":
        case "AI":
        case "AQ":
        case "AG":
        case "AR":
        case "AM":
        case "AW":
        case "AT":
        case "AZ":
        case "BS":
        case "BH":
        case "BD":
        case "BB":
        case "BY":
        case "BE":
        case "BZ":
        case "BJ":
        case "BM":
        case "BT":
        case "BO":
        case "BQ":
        case "BA":
        case "BW":
        case "BV":
        case "BR":
        case "IO":
        case "BN":
        case "BG":
        case "BF":
        case "BI":
        case "KH":
        case "CM":
        case "CV":
        case "KY":
        case "CF":
        case "TD":
        case "CL":
        case "CN":
        case "CX":
        case "CC":
        case "CO":
        case "KM":
        case "CG":
        case "CD":
        case "CK":
        case "CR":
        case "CI":
        case "HR":
        case "CU":
        case "CW":
        case "CY":
        case "CZ":
        case "DK":
        case "DJ":
        case "DM":
        case "DO":
        case "EC":
        case "EG":
        case "SV":
        case "GQ":
        case "ER":
        case "EE":
        case "ET":
        case "FK":
        case "FO":
        case "FI":
        case "FJ":
        case "GF":
        case "PF":
        case "TF":
        case "GA":
        case "GM":
        case "GE":
        case "GH":
        case "GI":
        case "GR":
        case "GL":
        case "GD":
        case "GP":
        case "GU":
        case "GT":
        case "GG":
        case "GN":
        case "GW":
        case "GY":
        case "HT":
        case "HM":
        case "VA":
        case "HN":
        case "HK":
        case "IS":
        case "ID":
        case "IR":
        case "IQ":
        case "IM":
        case "IL":
        case "IT":
        case "JM":
        case "JP":
        case "JE":
        case "JO":
        case "KZ":
        case "KE":
        case "KI":
        case "KP":
        case "KR":
        case "KW":
        case "KG":
        case "LA":
        case "LV":
        case "LB":
        case "LS":
        case "LR":
        case "LY":
        case "LI":
        case "LT":
        case "LU":
        case "MO":
        case "MK":
        case "MG":
        case "MW":
        case "MY":
        case "MV":
        case "ML":
        case "MT":
        case "MH":
        case "MQ":
        case "MR":
        case "MU":
        case "YT":
        case "MX":
        case "FM":
        case "MD":
        case "MC":
        case "MN":
        case "ME":
        case "MS":
        case "MA":
        case "MZ":
        case "MM":
        case "NA":
        case "NR":
        case "NP":
        case "NC":
        case "FR":
        case "IN":
        case "NL":
        case "HU":
        case "IE":
        case "CA":
        case "NZ":
        case "DE":
        case "NI":
        case "NE":
        case "NG":
        case "NU":
        case "NF":
        case "MP":
        case "NO":
        case "OM":
        case "PK":
        case "PW":
        case "PS":
        case "PA":
        case "PG":
        case "PY":
        case "PE":
        case "PH":
        case "PN":
        case "PT":
        case "PR":
        case "QA":
        case "RE":
        case "RU":
        case "RW":
        case "BL":
        case "SH":
        case "KN":
        case "LC":
        case "MF":
        case "PM":
        case "VC":
        case "WS":
        case "SM":
        case "ST":
        case "SA":
        case "SN":
        case "RS":
        case "SC":
        case "SL":
        case "SG":
        case "SX":
        case "SK":
        case "SI":
        case "SB":
        case "SO":
        case "ZA":
        case "GS":
        case "LK":
        case "SD":
        case "SR":
        case "SJ":
        case "SZ":
        case "SE":
        case "SY":
        case "TW":
        case "TJ":
        case "TZ":
        case "TH":
        case "TL":
        case "TG":
        case "TK":
        case "TO":
        case "TT":
        case "TN":
        case "TR":
        case "TM":
        case "TC":
        case "TV":
        case "UG":
        case "UA":
        case "AE":
        case "UM":
        case "UY":
        case "UZ":
        case "VU":
        case "VE":
        case "VN":
        case "VG":
        case "VI":
        case "WF":
        case "EH":
        case "YE":
        case "ZM":
        case "ZW":
        case "US":
        case "GB":
        case "ES":
        case "AU":
        case "RO":
        case "CH":
        case "PL":
            break;
        default:
            return tooltip.classList.remove("active");
    }

    var x = event.clientX;
    var y = event.clientY;

    tooltip.style.left = (x + 20) + "px";
    tooltip.style.top = (y - 20) + "px";

    tooltip.innerHTML = title;
    tooltip.classList.add("active");

}


function onCustomPartners(code) {
		$('.partner-item').removeClass('active_partner');
		$.request('onPartners', {
			update: { 'components/partners_list': '#mycomponentpartners',
			},
			data: {
                code: code
			},
		}).then(response => {
            $('html, body').animate({
                scrollTop: $("#mycomponentpartners").offset().top - 200
            }, 1000);
            var tooltip = document.getElementById("tooltip");
            tooltip.classList.remove("active");
		});
}


function onCustomSinglePartner(pId) {
    $.request('onSinglePartner', {
        update: { 'components/partners_list': '#mycomponentpartners',
        },
        data: {
            partner_id: pId
        },
    }).then(response => {
        $('html, body').animate({
            scrollTop: $("#mycomponentpartners").offset().top - 200
        }, 1000);
        var tooltip = document.getElementById("tooltip");
        tooltip.classList.remove("active");
    });
}
function onCustomSinglePartnerA(pId) {
    $.request('onSinglePartner', {
        update: { 'components/partners_list_a': '#mycomponentpartners',
        },
        data: {
            partner_id: pId
        },
    }).then(response => {
        $('html, body').animate({
            scrollTop: $("#mycomponentpartners").offset().top - 200
        }, 1000);
        var tooltip = document.getElementById("tooltip");
        tooltip.classList.remove("active");
    });
}

function scrollUp(){
	var element = $('#layout-content');
	$("html, body").animate({ scrollTop: element.offset().top - 94 }, 'slow');
}

function init() {
    window.addEventListener('resize', function () {
        if (isBreakpointLarge()) {
            $('#card-carousel').slick('unslick');
        } else {
            if (typeof cardCarousel === 'function') {
                cardCarousel({
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay: true,
                    autoplaySpeed: 6000,
                    prevArrow: '<i class="slick-prev pr p-back"/>',
                    nextArrow: '<i class="slick-next pr p-forward"/>',
                });
             }
        }
        // keepFooter(documentHasScroll());

    });
    document.addEventListener('DOMContentLoaded', function () {
        if (!isBreakpointLarge()) {
            if (typeof cardCarousel === 'function') {
                cardCarousel({
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay: true,
                    autoplaySpeed: 6000,
                    prevArrow: '<i class="slick-prev pr p-back"/>',
                    nextArrow: '<i class="slick-next pr p-forward"/>',
                });
            }
        }
		// appendSearchAndSocialMedia()
		requestFormLibrary();

		// requestFormPartners()
        // keepFooter(documentHasScroll());

    });
    $('.accordion-border').removeAttr('id');
    // appendProfile()
    // appendSignIn()
    // appendSignOut()
}


/* **** */
/* **** */
/* **** */
/* **** */

function initSearchToggles() {
    $('#searchToggle, #searchToggleMobile').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        showSearchForm();
    });
}

function initNavbarScrollHandler() {
    const $headerNavbar = $('#headernavbar');
    const $backToTop = $('.back-to-top');
    let hasShownBackToTop = false;

    $(window).on('scroll.navbar', function() {
        const currentScrollTop = $(this).scrollTop();
        const windowHeight = $(window).height();
        const documentHeight = $(document).height();
        const scrollPercent = currentScrollTop / (documentHeight - windowHeight);

        if (currentScrollTop > 80) {
            $headerNavbar.addClass('navbar-scrolled');
        } else {
            $headerNavbar.removeClass('navbar-scrolled');
        }

        if (currentScrollTop > 300) {
            if (!$backToTop.hasClass('show')) {
                $backToTop.addClass('show');
                if (!hasShownBackToTop) {
                    $backToTop.addClass('first-show');
                    hasShownBackToTop = true;
                    setTimeout(function() {
                        $backToTop.removeClass('first-show');
                    }, 600);
                }
            }
        } else {
            $backToTop.removeClass('show');
        }

        updateScrollProgress(scrollPercent);
    });
}


/**
 * Initialize hamburger menu dropdown functionality
 * Handles dropdown menu toggles, auto-expand, and menu state management
 */
function initHamburgerMenuDropdowns() {
    // Auto-expand dropdowns that contain the current active page
    function autoExpandActiveDropdowns() {
        const activeSubItems = $('#headerNavbarNav .dropdown-menu .nav-item.active');

        activeSubItems.each(function() {
            // Find the parent dropdown
            const parentDropdown = $(this).closest('.nav-item.dropdown');
            if (parentDropdown.length) {
                const dropdownMenu = parentDropdown.find('.dropdown-menu');

                // Expand the parent dropdown
                parentDropdown.addClass('active');
                if (dropdownMenu.length) {
                    dropdownMenu.addClass('show');
                }
            }
        });
    }

    // Run auto-expand on page load
    autoExpandActiveDropdowns();

    // Handle dropdown menu toggles
    const dropdownItems = $('#headerNavbarNav .nav-item.dropdown > a');

    dropdownItems.each(function() {
        $(this).off('click.dropdown').on('click.dropdown', function(e) {
            e.preventDefault();

            const parentItem = $(this).parent();
            const dropdownMenu = parentItem.find('.dropdown-menu');

            if (dropdownMenu.length) {
                // Toggle active state on parent item
                parentItem.toggleClass('active');

                // Toggle show state on dropdown menu
                dropdownMenu.toggleClass('show');

                // Optional: Close other open dropdowns (accordion behavior)
                const otherDropdowns = $('#headerNavbarNav .nav-item.dropdown');
                otherDropdowns.each(function() {
                    if (this !== parentItem[0]) {
                        $(this).removeClass('active');
                        const otherMenu = $(this).find('.dropdown-menu');
                        if (otherMenu.length) {
                            otherMenu.removeClass('show');
                        }
                    }
                });
            }
        });
    });

    // Close all dropdowns when menu is closed (but preserve auto-expanded state)
    function closeAllDropdowns() {
        const activeDropdowns = $('#headerNavbarNav .nav-item.dropdown.active');
        activeDropdowns.each(function() {
            $(this).removeClass('active');
            const menu = $(this).find('.dropdown-menu');
            if (menu.length) {
                menu.removeClass('show');
            }
        });
    }

    function handleMenuToggle() {
        // When menu is opened, auto-expand dropdowns with active items
        setTimeout(function() {
            autoExpandActiveDropdowns();
        }, 100); // Small delay to ensure menu animation completes
    }

    const closeMenuBtn = $('#closeMenuBtn');
    if (closeMenuBtn.length) {
        closeMenuBtn.off('click.dropdown').on('click.dropdown', closeAllDropdowns);
    }

    // Re-expand dropdowns when menu is opened
    const menuToggleBtn = $('#desktopMenuToggle');
    if (menuToggleBtn.length) {
        menuToggleBtn.off('click.dropdown').on('click.dropdown', handleMenuToggle);
    }

    // Close dropdowns when clicking outside
    $(document).off('click.dropdownOutside').on('click.dropdownOutside', function(e) {
        const navbar = $('#headerNavbarNav');
        const menuToggle = $('#desktopMenuToggle');

        if (navbar.length && !navbar.is(e.target) && navbar.has(e.target).length === 0 &&
            !menuToggle.is(e.target) && menuToggle.has(e.target).length === 0) {
            closeAllDropdowns();
        }
    });
}


function initDesktopMenuToggle() {
    const $navbarNav = $('#headerNavbarNav');
    const $desktopToggle = $('#desktopMenuToggle');
    const $closeBtn = $('#closeMenuBtn');

    $desktopToggle.on('click.desktopMenu', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $navbarNav.addClass('show').css({
            right: '0',
            opacity: '1',
            visibility: 'visible'
        });
        $desktopToggle.hide();
        $('body').addClass('menu-open');
    });

    $closeBtn.on('click.desktopMenu', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $navbarNav.removeClass('show').css({
            right: '-300px',
            opacity: '0',
            visibility: 'hidden'
        });
        $desktopToggle.show();
        $('body').removeClass('menu-open');
    });

    $(document).on('click.desktopMenuOutside', function(event) {
        if (
            $navbarNav.hasClass('show') &&
            !$navbarNav.is(event.target) &&
            $navbarNav.has(event.target).length === 0 &&
            !$desktopToggle.is(event.target) &&
            $desktopToggle.has(event.target).length === 0 &&
            !$closeBtn.is(event.target) &&
            $closeBtn.has(event.target).length === 0
        ) {
            $navbarNav.removeClass('show').css({
                right: '-300px',
                opacity: '0',
                visibility: 'hidden'
            });
            $desktopToggle.show();
            $('body').removeClass('menu-open');
        }
    });

    // Prevent clicks on the menu and bottom elements from closing it
    $navbarNav.on('click.desktopMenu', function(e) { e.stopPropagation(); });
    $('.navbar-bottom-elements').on('click.desktopMenu', function(e) { e.stopPropagation(); });
}

function initDesktopDropdownToggle() {
    $('.nav-item.dropdown > a').on('click.desktopDropdown', function(e) {
        e.preventDefault();
        const $dropdownMenu = $(this).siblings('.dropdown-menu');
        if ($dropdownMenu.hasClass('show')) {
            $dropdownMenu.removeClass('show');
        } else {
            $('.dropdown-menu.show').removeClass('show');
            $dropdownMenu.addClass('show');
        }
    });
}

function applyExternalLinkBehavior() {
    $('.work_packages .accordion-content, .messages .accordion-toggle').each(function(index, value) {
        $(value).find('a').attr('onclick', "window.open(this.href, '_blank');");
    });
}

function sanitizeNavDropdowns() {
    $('.nav-item').children('a').each(function() {
        const $link = $(this);
        // Skip footer navigation; it has its own dropdown handling
        if ($link.closest('.footer-navigation').length) {
            return;
        }
        if ($link.attr('data-toggle') === 'dropdown') {
            $link
                .removeAttr('data-toggle')
                .off('click.navSanitize')
                .on('click.navSanitize', function(e) {
                    e.preventDefault();
                    $(this).siblings('.dropdown-menu').toggleClass('show');
                });
        }
    });
}

function initSmoothAnchorScroll() {
    if (window.location.hash) {
        const link = window.location.hash;
        const anchorId = link.substr(link.indexOf('#') + 1);
        if ($('#' + anchorId).offset()) {
            $('html, body').animate({
                scrollTop: $('#' + anchorId).offset().top - 150
            }, 500);
        } else {
            $('.accordion-border').each(function() {
                const title = $(this).find('.accordion-toggle .col-xs.start-xs').text().toUpperCase();
                const toggler = $(this).find('.accordion-toggle');
                if (title.indexOf(anchorId.toUpperCase()) >= 0 && !toggler.next('.accordion-content').is(':visible')) {
                    $('html, body').animate({
                        scrollTop: toggler.parent().offset().top - 150
                    }, 500);
                    toggler.trigger('click');
                }
            });
        }
    }

    $('.dropdown a').on('click.anchor', function(event) {
        if (location.href.indexOf('#') !== -1) {
            const link = $(this).attr('href');
            const anchorId = link.substr(link.indexOf('#') + 1);
            if ($('#' + anchorId).length > 0) {
                $('html, body').animate({
                    scrollTop: $('#' + anchorId).offset().top - 150
                }, 500);
            } else {
                $("g[title='" + anchorId.toUpperCase() + "']").addClass('active_path');

                $('.accordion-border').each(function() {
                    const title = $(this).find('.accordion-toggle .col-xs.start-xs').text().toUpperCase();
                    const toggler = $(this).find('.accordion-toggle');
                    if (title.indexOf(anchorId.toUpperCase()) >= 0 && !toggler.next('.accordion-content').is(':visible')) {
                        $('html, body').animate({
                            scrollTop: toggler.parent().offset().top - 150
                        }, 500);
                        toggler.trigger('click');
                        event.preventDefault();
                    }
                });
            }
        }
    });

    onHashChange();
    $(window).on('hashchange', function() {
        onHashChange();
    });
}


/* **** */
/* **** */
/* **** */
/* **** */


function handlePilotsSVGMapMouseMove(event) {
	var title = $(event.target).attr('title');
	var tooltip = document.getElementById("tooltip");
	if (!title) {
		title = $(event.target).parent().attr('title');
	}

	switch (title) {
		case 'Salisbury Plain':
		case 'French Mediterranean natural reserves':
		case 'Friedeburg':
		case 'LTER Petrohan':
		case 'Mols Bjerge National Park':
		case 'Oostvaardersplassen Nature Reserve':
		case 'Island of Comino and surrounding islets':
			break;
		default:
			return tooltip.classList.remove("active");
	}

	var x = event.clientX;
	var y = event.clientY;

	tooltip.style.left = (x + 20) + "px";
	tooltip.style.top = (y - 20) + "px";

	tooltip.innerHTML = $(event.target).attr('title');
	tooltip.classList.add("active");

}

function onPilots(pTitle) {
	// $("path").removeClass('active_path');
	var tooltip = document.getElementById("tooltip");
	tooltip.classList.remove("active");
	if(!$("path[title='"+pTitle+"']").hasClass('active_path')){
        $("path[title='"+pTitle+"']").addClass('active_path');

        $('.accordion-border').each(function(){
            var title = $(this).find(".accordion-toggle .col-xs.start-xs").text();
            var toggler = $(this).find(".accordion-toggle");
            if ( title.indexOf(pTitle) >= 0 && !toggler.next(".accordion-content").is(':visible') ){
                toggler.trigger( "click" );
                $('html, body').animate({
                    scrollTop: toggler.parent().offset().top - 150
                }, 500);
            }
        });
    }else{
        $("path[title='"+pTitle+"']").removeClass('active_path');
        $('.accordion-border').each(function(){
            var title = $(this).find(".accordion-toggle .col-xs.start-xs").text();
            var toggler = $(this).find(".accordion-toggle");
            if ( title.indexOf(pTitle) >= 0 && toggler.next(".accordion-content").is(':visible') ){
                toggler.trigger( "click" );
            }
        });
    }

}


init()
