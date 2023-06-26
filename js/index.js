
$('.open-overlay').click(function() {
    var overlay_navigation = $('.overlay-navigation'),
      nav_items = $('nav li'),
      top_bar = $('.bar-top'),
      middle_bar = $('.bar-middle'),
      bottom_bar = $('.bar-bottom');
  
    overlay_navigation.toggleClass('overlay-active');
    if (overlay_navigation.hasClass('overlay-active')) {
      top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
      middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
      bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
      overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down');
      nav_items.each(function(index) {
        $(this).removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
        $(this).removeClass('slide-in-nav-item-delay-' + index + '-reverse').addClass('slide-in-nav-item-delay-' + index);
      });
    } else {
      top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
      middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
      bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
      overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up');
      nav_items.each(function(index) {
        $(this).removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
        $(this).removeClass('slide-in-nav-item-delay-' + index).addClass('slide-in-nav-item-delay-' + index + '-reverse');
      });
    }
  });
