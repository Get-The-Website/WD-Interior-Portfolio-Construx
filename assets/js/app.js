!function(e){"use strict";jQuery(document).ready(function(s){s(".navbar-nav .nav-link").on("click",function(){s(".navbar-collapse").removeClass("show")}),function e(){s(".scroller").animate({bottom:5},1e3).animate({bottom:20},1e3,function(){setTimeout(e,100)})}(),s(".Slider_Vision_Mission").owlCarousel({items:1,loop:!0,autoplay:!0,dots:!1,nav:!1,autoplayHoverPause:!0,animateIn:"fadeIn",animateOut:"fadeOut"}),s(".Slider_Team").owlCarousel({items:4,loop:!0,margin:24,autoplay:!0,dots:!1,nav:!1,autoplayHoverPause:!0,responsive:{0:{items:1,dots:!0},540:{items:2},720:{items:2},992:{items:3},1140:{items:4}}});var t=s(".work-grid").imagesLoaded(function(){t.isotope({itemSelector:".work-grid-item",layoutMode:"fitRows",percentPosition:!0,filter:"*"})}),e=(s(".work-button-group").on("click","button",function(){var e=s(this).attr("data-filter");t.isotope({filter:e})}),s(".work-button-group").each(function(e,t){var o=s(t);o.on("click","button",function(){o.find(".is-checked").removeClass("is-checked"),s(this).addClass("is-checked")})}),s(".Slider_Testimonial").owlCarousel({items:2,loop:!0,autoplay:!0,dots:!1,nav:!1,margin:30,autoplayHoverPause:!0,responsive:{0:{items:1,dots:!0},540:{items:1,dots:!0},720:{items:2},992:{items:2},1140:{items:2}}}),s(".Slider_Clients").owlCarousel({items:5,loop:!0,autoplay:!0,dots:!1,nav:!1,margin:30,autoplayHoverPause:!0,responsive:{0:{items:1,dots:!0},540:{items:2},720:{items:3},992:{items:4},1140:{items:5}}}),s(".Slider_Blog").owlCarousel({items:3,loop:!0,margin:24,autoplay:!0,dots:!1,nav:!1,autoplayHoverPause:!0,responsive:{0:{items:1,dots:!0},540:{items:2},720:{items:2},992:{items:3},1140:{items:3}}}),s("#contact-form").validator(),s("#contact-form").on("submit",function(e){if(!e.isDefaultPrevented())return s.ajax({type:"POST",url:"contact.php",data:s(this).serialize(),success:function(e){var t="alert-"+e.type,e=e.message,o='<div class="alert '+t+' alert-dismissible fade show" role="alert">'+e+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';t&&e&&(s("#contact-form").find(".messages").hide().html(o).fadeIn("slow"),s("#contact-form")[0].reset())}}),!1}),s(".form-control").val(""),s(".form-control").focusout(function(){""!=s(this).val()?s(this).addClass("has-content"):s(this).removeClass("has-content")}),new google.maps.Map(document.getElementById("map"),{center:{lat:51.50853,lng:.076132},zoom:13,styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#f1f1f1"},{visibility:"on"}]}]})),o=new google.maps.Marker({position:new google.maps.LatLng(51.50853,.076132),icon:"assets/images/map-pin.svg",map:e}),a=new google.maps.InfoWindow({content:'<div class="text-center"><h5 class="text-uppercase fw-bold text-black"><span class="text-custom">C</span>onstrux</h5><p>121, Park Drive, Varick Str <br>New York, NY 10012, USA</p></div>'});o.addListener("click",function(){a.open(e,o)})}),jQuery(window).on("load",function(){e("body").imagesLoaded(function(){e(".pre-loader").fadeOut()})}),jQuery(window).on("scroll",function(){100<=e(window).scrollTop()?e(".sticky").addClass("header-sticky"):e(".sticky").removeClass("header-sticky"),100<e(this).scrollTop()?e("#back-to-top").fadeIn():e("#back-to-top").fadeOut()}),e("#back-to-top").on("click",function(){return e("html, body").animate({scrollTop:0},1e3),!1})}(jQuery);