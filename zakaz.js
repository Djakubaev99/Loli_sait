$(document).ready(function()
{
   $('#reviewsImage1').addClass('visibility-hidden');
   $('#portfolio-image2').addClass('visibility-hidden');
   $("a[href*='#header']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_header').offset().top }, 600, 'easeOutCirc');
   });
   $("a[href*='#morereviews']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_morereviews').offset().top-88 }, 600, 'easeOutCirc');
   });
   function onScrollmorereviews()
   {
      var $obj = $("#wb_morereviews");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('reviewsImage1', 'animate-fade-in-up', 0, 1000);
         AnimateCss('portfolio-image2', 'animate-fade-in-up', 500, 1000);
      }
   }
   onScrollmorereviews();
   $(window).scroll(function(event)
   {
      onScrollmorereviews();
   });
   function skrollrInit()
   {
      skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
   }
   skrollrInit();
   $("a[href*='#footer']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_footer').offset().top }, 600, 'easeInCubic');
   });
   $('#MegaMenu1 .submenu ul li h2 a').addClass('ui-widget-header');
   $('#MegaMenu1 .submenu ul li a').hover(function()
   {
      $(this).addClass('ui-state-hover');
   }, function()
   {
      $(this).removeClass('ui-state-hover');
   });
   $('.ui-state-default').hover(function()
   {
      $(this).addClass('ui-state-hover');
   }, function()
   {
      $(this).removeClass('ui-state-hover');
   });
   $('#MegaMenu1 li').hover(function()
   {
      var top = $(this).find('.button').outerHeight();
      $(this).find('.submenu').css( {'top': top });
      $(this).find('.submenu').show();
      var maxWidth = 0;
      $(this).find('ul').each(function()
      {
         $(this).find('li').each(function()
         {
            $(this).css('width', 'auto');
            if ($(this).width() > maxWidth)
               maxWidth = $(this).width();
         });
      });
      $(this).find('ul').each(function()
      {
         $(this).find('li').width(maxWidth);
         $(this).css({'width' : maxWidth+4});
      });
      if ($(this).find('.row').length > 0 )
      {
         var maxRowWidth = 0;
         $(this).find('.row').each(function()
         {
            var width = 0;
            $(this).find('ul').each(function()
            {
               width += $(this).width();
            });
            if (width > maxRowWidth)
            {
               maxRowWidth = width;
            }
         });
         $(this).find('.submenu').css({'width' : maxRowWidth});
         $(this).find('.row:last').css({'margin': '0'});
      }
      else
      {
         var width = 0;
         $(this).find('ul').each(function()
         {
            width += $(this).width();
         });
         $(this).find('.submenu').css({'width' : width});
      }
      $(this).find('.submenu').slideDown();
   }, function()
   {
      $(this).find('.submenu').hide();
   })
   $('#MegaMenu1 li .submenu').hide();
   $('#MegaMenu1-nav').click(function()
   {
      $('body').removeClass('overflow-no-scroll');
      $('#wb_MegaMenu1').removeClass('open');
   });
   $('#MegaMenu1-hamburger').click(function()
   {
      $('body').addClass('overflow-no-scroll');
      $('#wb_MegaMenu1').addClass('open');
   });
   var Carousel1Opts =
   {
      delay: 3000,
      duration: 2000,
      easing: 'linear',
      mode: 'forward',
      direction: '',
      scalemode: 3,
      pagination: true,
      pagination_img_default: 'images/Carousel1-default.png',
      pagination_img_active: 'images/Carousel1-active.png',
      pause: 'hover',
      start: 0
   };
   $("#Carousel1").carousel(Carousel1Opts);
   $("#Carousel1_back a").click(function()
   {
      $('#Carousel1').carousel('prev');
   });
   $("#Carousel1_next a").click(function()
   {
      $('#Carousel1').carousel('next');
   });
   function onScrollLayoutGrid1()
   {
      var $obj = $("#wb_LayoutGrid1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimationResume('FontAwesomeIcon1');
         AnimationResume('FontAwesomeIcon2');
         AnimationResume('FontAwesomeIcon3');
         AnimationResume('FontAwesomeIcon4');
         AnimationResume('Heading1');
         AnimationResume('Heading2');
         AnimationResume('Heading3');
         AnimationResume('Heading4');
         AnimationResume('Text1');
         AnimationResume('Text2');
         AnimationResume('Text3');
         AnimationResume('Text4');
      }
   }
   onScrollLayoutGrid1();
   $(window).scroll(function(event)
   {
      onScrollLayoutGrid1();
   });
});
$(document).ready(function()
{
   function waitForItUpdate()
   {
      // change the date here
      var dateFuture = new Date("March 27, 2020 22:00:00");
      var dateNow = new Date();
      var seconds = Math.floor((dateFuture - (dateNow))/1000);
      var minutes = Math.floor(seconds/60);
      var hours = Math.floor(minutes/60);
      var days = Math.floor(hours/24);

      hours = Math.round(hours-(days*24));
      minutes = Math.round(minutes-(days*24*60)-(hours*60));
      seconds = Math.round(seconds-(days*24*60*60)-(hours*60*60)-(minutes*60));
                                 
      $('#waitForItDays').html(days);
      $('#waitForItHours').html(hours);
      $('#waitForItMinutes').html(minutes);
      $('#waitForItSeconds').html(seconds);   
   }
   waitForItUpdate();
   setInterval(waitForItUpdate, 1000);
});
