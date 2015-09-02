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

	$('#slider2 ul img, .galone img').each(function() {
    createCanvas(this);
  });

  $(".main-video-placeholder").click(function(){
    $(this).hide();
  });

  $('#play-video').on('click', function(ev) {
    $("#video")[0].src += "&autoplay=1";
    ev.preventDefault();

  });

  function createCanvas(image) {
        // подключаем canvas
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext("2d");

      // определяем размер изображения
      canvas.width = image.width;
      canvas.height = image.height;

      // после того, как мы получаем ссылку на изображение мы используем метод
          // drawImage, чтобы рисовать и манипулировать canvas'ом
      ctx.drawImage(image, 0, 0);

      // отсюда начинается код, который будет выполять проход по изображению,
          // каждый пискель 4 байта. Тем самым мы получим доступ к кажому пискелю и
          //сможем задать свой цвет. Здесь можно экспериментировать и сделать не только
          // черно-белое изображение, но и в разных цветовых тонах: зеленых, красных, синих, сепии и т.д.

      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height),
          pixelData = imageData.data;

      // пишем цикл для прохода по массиву, который мы создали выше
      for (var y = 0; y < canvas.height; y++) {
        for (var x = 0; x < canvas.width; x++) {

      
          var i = (y * 4 * canvas.width) + (x * 4);
          var red = pixelData[i];
          var green = pixelData[i + 1];
          var blue = pixelData[i + 2];

          // формула черно-белого варианта, мы задаем этот результат для каждого пикселя и цвета: зеленый, красный, синий
          var grayScale = (red * 0.3) + (green * 0.59) + (blue * .11);

          pixelData[i] = grayScale;
          pixelData[i + 1] = grayScale;
          pixelData[i + 2] = grayScale;
        }
      }

      // обновляем наш результат и помещаем его в canvas.
      ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);

      // Вставляем canvas в DOM элемент перед основной картинкой:
      image.parentNode.insertBefore(canvas, image);
  }
  

});
