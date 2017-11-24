/**
 * created by @jaynoe
 * https://github.com/jaynoe
 *
 * Plugin: offcanvas-mobile-menu
 * https://github.com/jaynoe/offcanvas-mobile-menu
*/
;(function($){

  $.fn.offcanvasmenu = function(options){

    // Default options
    options = $.extend({
      menuTrigger: "trigger"
    }, options);

    // Build the vars
    // Containers:
    var canvas = $(this);
    var trigger = $("#" + options.menuTrigger);
    var body = $("body");
    var link = canvas.find("a");

    // if click on the trigger
    trigger.click(function() {
      // get the canvas out
      canvas.addClass("getOut");
      body.addClass("offcanvas");
      var clicks = $(this).data('clicks');
      if(clicks) {
        canvas.removeClass("getOut");
        body.removeClass("offcanvas");
      }
      $(this).data("clicks", !clicks);
    });

    // close wehen click on link in menu
    link.click(function() {
      canvas.removeClass("getOut");
		  body.removeClass("offcanvas");
	  });

  };

})(jQuery);
