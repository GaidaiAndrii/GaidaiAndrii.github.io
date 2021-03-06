;(function($, undefined ) {
  
  var shiftInit = 10;
  var shiftRollback = 660;
  var shiftEdge = 660;
  var lastScrollTop = 0;

  $(document).on('scroll', function(event) {
    // alert('before: ' + st + lastScrollTop);
    var st = $(this).scrollTop();
    if ( st > lastScrollTop ) {
      // alert( 'down: ' + st );
      if ( st > shiftInit && st < shiftEdge ) {
        $('header.header').addClass('scrolled');
        $('section.about').addClass('scrolled');
        $(document).scrollTop(shiftEdge);
      }
    } else {
      if ( st < shiftRollback ) {
        $('header.header').removeClass('scrolled');
        $('section.about').removeClass('scrolled');
        $(document).scrollTop(0);
      }
    }
    lastScrollTop = st;
    // alert('after: ' + st + lastScrollTop);
  } );
    // event.preventDefault(event);

}(jQuery, undefined));
//Include 'use strict'; as the first statement in a wrapping function, so it only affects that function. This prevents problems when concatenating scripts that aren't strict.

(function () {
   'use strict';
   // this function is strict...
}());

(function () {
   // but this function is sloppy...
}());