// Animate navbar links on scroll
$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    $('.navbar-nav .nav-link').each(function() {
      var target = $($(this).attr('href'));
      if (target.position().top <= scrollTop + 100 && target.position().top + target.outerHeight() > scrollTop) {
        $('.navbar-nav .nav-item').removeClass('show');
        $(this).parent('.nav-item').addClass('show');
      }
    });
  });
  