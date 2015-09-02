$(document).ready(function() {

  $('.slider-content').bxSlider({
    auto: true,
    slideWidth: 210,
    minSlides: 4,
    maxSlides: 4,
    nextSelector: ".slider-arrow-next",
    prevSelector: ".slider-arrow-prev",
    nextText: "",
    prevText: "",
    pager: false
  });

    $('.value-proposition-carousel').bxSlider({
      pager: false,
      maxSlides: 6,
      minSlides: 2,
      moveSlides: 1,
      slideWidth: 144,
      touchEnabled:true,
      nextText: '',
      prevText: ''
   });

  $('.opent .toggle').click(function(event) {
    $(this).toggleClass('open');
    $(this).parent().next().toggleClass('open');
  });

	var height1 = $('#above-the-fold').height();
	$(window).scroll(function(){
        if($(window).scrollTop() > height1){
            $('#menu').css('position','fixed');
        } else {
            $('#menu').css('position','absolute');
        }    
	});

  var height_for_social = $('#above-the-fold').height() + $('#value-proposition').height();
  $(window).scroll(function(){
        if($(window).scrollTop() > height_for_social){
            $('#socicons').css('position','fixed');
        } else {
            $('#socicons').css('position','absolute');
        }    
  });

  $('.wrapsliderin').each(function(index, el) {
    var slider = $(this);
    var num = 0;
    $(slider).find('.slidesin').find('li.active').css('display','block');
    $(this).find('.slidesin').find('li').each(function(index, el) {
      $(slider).find('.pagiin').append('<li rel="'+num+'"></li>');
      num++;
    });
    $(this).find('.pagiin').find('li:first').addClass('active');
    $(slider).find('.pagiin').find('li').click(function(event) {
      if (!$(this).hasClass('active')) {
        $(slider).find('.pagiin').find('li.active').removeClass('active');
        var num = $(this).attr('rel');
        $(this).addClass('active');
        $(slider).find('.slidesin').find('li.active').removeClass('active').css('display','none');
        $(slider).find('.slidesin').find('li:eq('+num+')').addClass('active').animate({opacity: 'show'}, 300);
      };
    });
    $(slider).find('.sliderinright').click(function(event) {
      if ($(slider).find('.pagiin').find('li:last').hasClass('active')) {
        $(slider).find('.pagiin').find('li:first').trigger('click');
      } else {
        $(slider).find('.pagiin').find('.active').next().trigger('click');
      }
    });
    $(slider).find('.sliderinlef').click(function(event) {
      if ($(slider).find('.pagiin').find('li:first').hasClass('active')) {
        $(slider).find('.pagiin').find('li:last').trigger('click');
      } else {
        $(slider).find('.pagiin').find('.active').prev().trigger('click');
      }
    });
  });

  $(".main-video-placeholder").click(function(){
    $(this).hide();
  });

  $('#play-video').on('click', function(ev) {
    $("#video")[0].src += "&autoplay=1";
    ev.preventDefault();
  });
  
  $('.faqqw').click(function(){
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      var to = $(this).attr('for');
      $(this).nextAll(to).removeClass('active').animate({opacity:'hide'}, 300);
    } else {
      $('.faqqw.active').removeClass('active');
      $('.faqans.active').removeClass('active').css('display','none');
      $(this).addClass('active');
      var to = $(this).attr('for');
      $(this).nextAll(to).addClass('active').animate({opacity:'show'}, 300);
    };
  });
});
