$(document).ready(function()
{
   $('#reviewsImage1').addClass('visibility-hidden');
   $('#portfolio-image2').addClass('visibility-hidden');
   $('#reviewsImage1').addClass('visibility-hidden');
   $('#portfolio-image2').addClass('visibility-hidden');
   $("a[href*='#header']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_header').offset().top }, 600, 'easeOutCirc');
   });
   $("a[href*='#welcome']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_welcome').offset().top-88 }, 600, 'easeOutCirc');
   });
   $("a[href*='#services']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_services').offset().top-88 }, 600, 'easeOutCirc');
   });
   function skrollrInit()
   {
      skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
   }
   skrollrInit();
   $("a[href*='#portfolio']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_portfolio').offset().top-88 }, 600, 'easeOutCirc');
   });
   function onScrollportfolio()
   {
      var $obj = $("#wb_portfolio");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('reviewsImage1', 'animate-fade-in-up', 0, 1000);
         AnimateCss('portfolio-image2', 'animate-fade-in-up', 500, 1000);
      }
   }
   onScrollportfolio();
   $(window).scroll(function(event)
   {
      onScrollportfolio();
   });
   $("a[href*='#questions']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_questions').offset().top-88 }, 600, 'easeOutCirc');
   });
   $("a[href*='#prices']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_prices').offset().top-88 }, 600, 'easeOutCirc');
   });
   $("a[href*='#LayoutGrid1']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid1').offset().top-88 }, 600, 'easeOutCirc');
   });
   $("a[href*='#reviews']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_reviews').offset().top-88 }, 600, 'easeOutCirc');
   });
   function onScrollreviews()
   {
      var $obj = $("#wb_reviews");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('reviewsImage1', 'animate-fade-in-up', 0, 1000);
         AnimateCss('portfolio-image2', 'animate-fade-in-up', 500, 1000);
      }
   }
   onScrollreviews();
   $(window).scroll(function(event)
   {
      onScrollreviews();
   });
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
});
