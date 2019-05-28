jQuery('ul li.dropdown').hover(function() {
  jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
jQuery(document).ready(function () {

  jQuery('.navbar-toggler').on('click', function () {
      jQuery('.main-navigation').toggleClass('open');
      jQuery('.site-header').toggleClass('opennav')
  });
  jQuery('.has-child i').on('click', function () {
    jQuery(this).parents('li').toggleClass('activeli');
    console.log("TRtr");
    //jQuery('.site-header').toggleClass('opennav')
  });
 
});