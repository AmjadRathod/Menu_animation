function menuAnimation() {
  var menuIcon = $('.menu-bar'),
  middleBar = $('.bar-middle'),
  middleTopBar = $('.bar-top'),
  middleBottomBar = $('.bar-bottom'),
  leftBar = $('.box-line-left'),
  rightBar = $('.box-line-right'),
  menuOpen = $('.menuOpen'),
  menuClose = $('.menuClose'),
  menu = $('.toggle-menu'),
  menuLink = $('.menu-item'),
  logo = $('.brand-icon'),
  menuFooter = $('.nav .footer'),
  navigationLink = $('.toggle-menu .link');
  menuIcon.hover(
   function() {
     if ($ (this).hasClass('menuClose')){
       TweenLite.to($(middleTopBar), .5, {top:20});
       TweenLite.to($(middleBottomBar), .5, {top:40});
       TweenLite.to($(leftBar), .5, {height:42});
       TweenLite.to($(rightBar), .5, {height:42});
     }
   },
   function() {
     if ($ (this).hasClass('menuClose')){
       TweenLite.to($(middleTopBar), .5, {top:30});
       TweenLite.to($(middleBottomBar), .5, {top:30});
       TweenLite.to($(leftBar), .5, {height:0});
       TweenLite.to($(rightBar), .5, {height:0});
     }
   }
  );
  navigationLink.hover(
   function() {
     $(this).find('.top-line').css({width:'100%', transition:'all .5s'});
   },
   function() {
     $(this).find('.top-line').css({width:0, transition:'all .5s'});
     $('.link.active .top-line').css({width:'100%', transition:'all .5s'});
   }
  );
  menuIcon.on('click', function(e){
    if ($ (this).hasClass('menuClose')){
      TweenLite.set(this, {className: '-=menuClose'});
      TweenLite.set(this, {className: '+=menuOpen'});
      TweenLite.to($(leftBar), 0, {height:42});
      TweenLite.to($(rightBar), 0, {height:42});
      TweenLite.to($(middleTopBar), .5, {rotation:'-45deg',translate:'-8px, 7px', top:30});
      TweenLite.to($(middleBottomBar), .5, {rotation:'45deg',translate:'-6px, 7px', top:30});
      TweenLite.to($(middleBar), .2, {left:10,opacity:0});
      var width = $( window ).width();
      var myWidth = width / 2 - 475;
      var MylinkWidth = width / 2 + 40;
      var height = $( window ).height();
      var logoHeight = 108;
      var myHeight = height / 2 - logoHeight;
      $(menuLink).css({left:MylinkWidth});
      TweenLite.to($(menuLink), .7, {opacity:1,visibility: 'visible', left: MylinkWidth, delay: .3});
      TweenLite.to($(logo), .5, {top:myHeight, width:475, left:myWidth});
      if (window.matchMedia('(max-width: 991px)').matches) {
        var logoHeight = 70;
        var myHeight = height / 2 - logoHeight;
        var myWidth = width / 2 - 300;
        $(menuLink).css({left:MylinkWidth});
        TweenLite.to($(menuLink), .7, {opacity:1,visibility: 'visible', left: MylinkWidth, delay: .3});
        TweenLite.to($(logo), .5, {top:myHeight, width:280, left:myWidth});
      }
      if (window.matchMedia('(max-width: 767px)').matches) {
        $(menuLink).css({left:20});
        TweenLite.to($(menuLink), .7, {opacity:1,visibility: 'visible', left: 20 , delay: .3});
        TweenLite.to($(logo), .5, {top:10, width:150, left:20});
      }
      TweenLite.to($(menuFooter), .5, {left:10});
    }
    else if ($ (this).hasClass('menuOpen')) {
      TweenLite.set(this, {className: '+=menuClose'});
      TweenLite.set(this, {className: '-=menuOpen'});
      $(rightBar).css("height","42");
      $(leftBar).css("height","42");
      TweenLite.to($(middleTopBar), .5, {rotation:'0deg', top:20});
      TweenLite.to($(middleBottomBar), .5, {rotation:'0deg', top:40});
      TweenLite.to($(middleBar), .2, {left:16,opacity:1});
      TweenLite.to($(menuLink), 0, {opacity:0, visibility: 'hidden', right:0});
      TweenLite.to($(logo), .5, {top:0, width:150, left:45});
      if (window.matchMedia('(max-width: 767px)').matches) {
        TweenLite.to($(logo), .5, {top:10, width:150, left:20});
      }
      var width = $( window ).width() + 10;
      TweenLite.to($(menuFooter), .5, {left:width});

    }
  });
  logo.on('click', function(e){
    if ($ (menuIcon).hasClass('menuOpen')) {
      TweenLite.set(menuIcon, {className: '+=menuClose'});
      TweenLite.set(menuIcon, {className: '-=menuOpen'});
      TweenLite.to($(leftBar), .5, {height:0});
      TweenLite.to($(rightBar), .5, {height:0});
      TweenLite.to($(middleTopBar), .5, {rotation:'0deg'});
      TweenLite.to($(middleBottomBar), .5, {rotation:'0deg'});
      TweenLite.to($(middleBar), .2, {left:16,opacity:1});
      TweenLite.to($(menuLink), 0, {opacity:0, visibility: 'hidden', right:0});
      TweenLite.to($(logo), .5, {top:0, width:150, left:45});
      if (window.matchMedia('(max-width: 767px)').matches) {
        TweenLite.to($(logo), .5, {top:10, width:150, left:20});
      }
    }
  });
  navigationLink.on('click', function(e){
    if ($ (menuIcon).hasClass('menuOpen')) {
      TweenLite.set(menuIcon, {className: '+=menuClose'});
      TweenLite.set(menuIcon, {className: '-=menuOpen'});
      TweenLite.to($(leftBar), .5, {height:0});
      TweenLite.to($(rightBar), .5, {height:0});
      TweenLite.to($(middleTopBar), .5, {rotation:'0deg'});
      TweenLite.to($(middleBottomBar), .5, {rotation:'0deg'});
      TweenLite.to($(middleBar), .2, {left:16,opacity:1});
      TweenLite.to($(menuLink), 0, {opacity:0, visibility: 'hidden', right:0});
      TweenLite.to($(logo), .7, {top:0, width:150, left:45});
      // $(logo).css({top:0,width:200,left:45,transition:'all .5s'});
      // TweenLite.to($(logo), .3, {top:0, width:200, left:45});
      if (window.matchMedia('(max-width: 767px)').matches) {
        TweenLite.to($(logo), .5, {top:10, width:150, left:20});
      }
    }
  });

  $(window).on('popstate', function(event) {
    if ($ (menuIcon).hasClass('menuOpen')) {
      TweenLite.set(menuIcon, {className: '+=menuClose'});
      TweenLite.set(menuIcon, {className: '-=menuOpen'});
      TweenLite.to($(leftBar), .5, {height:0});
      TweenLite.to($(rightBar), .5, {height:0});
      TweenLite.to($(middleTopBar), .5, {rotation:'0deg'});
      TweenLite.to($(middleBottomBar), .5, {rotation:'0deg'});
      TweenLite.to($(middleBar), .2, {left:16,opacity:1});
      TweenLite.to($(menuLink), 0, {opacity:0, visibility: 'hidden', right:0});
      TweenLite.to($(logo), .5, {top:0, width:150, left:45});
      if (window.matchMedia('(max-width: 767px)').matches) {
        TweenLite.to($(logo), .5, {top:10, width:150, left:20});
      }
    }
  });
}
$(document).ready(function(){
  menuAnimation();
});
