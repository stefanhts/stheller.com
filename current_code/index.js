var script = document.createElement('script');

script.src = 'https://code.jquery.com/jquery-3.3.1.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function() {
  $('#page2').toggleClass('hideMe');
  $('#page2').hide();

  $('#page3').toggleClass('hideMe');
  $('#page3').hide();

  $('#page4').toggleClass('hideMe');
  $('#page4').hide();

  $('#navBar').toggleClass('hideMe');
});

//populating page from the home page

$('#showAbout').on('click', function() {
  $('.header').fadeOut('slow', function() {
    $('.header').toggleClass('hideMe');

    $('#page2').toggleClass('hideMe');
    $('#page2').fadeIn('slow');

      $('#navBar').toggleClass('hideMe');
  });

});

$('#showResume').on('click', function() {
  $('.header').fadeOut('slow', function() {
    $('.header').toggleClass('hideMe');

    $('#page3').toggleClass('hideMe');
    $('#page3').fadeIn('slow');

      $('#navBar').toggleClass('hideMe');
  });

});

$('#showContact').on('click', function() {
  $('.header').fadeOut('slow', function() {
    $('.header').toggleClass('hideMe');

    $('#page4').toggleClass('hideMe');
    $('#page4').fadeIn('slow');

      $('#navBar').toggleClass('hideMe');
  });

});

//populating the page from the navbar

$('#navAbout').on('click', function() {
  $('.pages').each(function() {
    if ($(this).css('visibility') === 'visible') {
      $(this).fadeOut('slow', function() {
        $(this).toggleClass('hideMe');
      });
    }
  });
  $('#page2').toggleClass('hideMe');
  $('#page2').fadeIn('slow');

    $('#navBar').toggleClass('hideMe');
});

$('#navResume').on('click', function() {
  $('.pages').each(function() {
    if ($(this).css('visibility') === 'visible') {
      $(this).fadeOut('slow', function() {
        $(this).toggleClass('hideMe');
      });
    }
  });
  $('#page3').toggleClass('hideMe');
  $('#page3').fadeIn('slow');

    $('#navBar').toggleClass('hideMe');
});

$('#navContact').on('click', function() {
  $('.pages').each(function() {
    if ($(this).css('visibility') === 'visible') {
      $(this).fadeOut('slow', function() {
        $(this).toggleClass('hideMe');
      });
    }
  });
  $('#page4').toggleClass('hideMe');
  $('#page4').fadeIn('slow');

    $('#navBar').toggleClass('hideMe');
});

$('#navHome').on('click', function() {
  $('.pages').each(function() {
    if ($(this).css('visibility') === 'visible') {
      $(this).fadeOut('slow', function() {
        $(this).toggleClass('hideMe');
      });
    }
  });
  $('.header').toggleClass('hideMe');
  $('.header').fadeIn('slow');
});
