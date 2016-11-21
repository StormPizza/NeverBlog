

///////////////////////////////////////////////////
// Mentoring Part 1
//This first bit says to not run the javascript until the contents
//of the document are ready
$(function(){
  mentoringBubbleClick(); //click face bubble, move to face bubble
  setInterval(function(){articleTada()}, 4000);
  designBGStuff(); //HR10.2, 2:00
  smoothScroll(500); //HR After.
  mobileNav();
});
/*///////////////////////HRA1  ////////////////////
//this is the self invoking function - for mobile nav opening
//also smooth scroll

(function ($) {
  "use strict" // for internet explorer
  //normally in jQuery, you need the dollar sign, but since we
  //passed it in, above over there, we wont need it later
  var $mobileNavToggleBtn = $('.mobile-nav-toggle'),
      $blankATags = $('a[href^="#"]');
      $body = $('html, body');
      settings = {
        duration: 1000
      }

  function onBtnClick (e) {
      var $this = $(this)
          $selectors = $('.mobile-nav')

      $this.toggleClass('is-open')
      $selectors.toggleClass('is-open');

  }
  function onBtnClick (event) {
        var $this = $(this),
            href = $this.attr('href'),
            $target = $(href);

        if( $target.length > 0) {
            event.preventDefault();
            $body.animate({
                scrollTop: target.offset().top
            }, settings.duration);
        }
    }
  $(document).ready(function () {
      $mobileNavToggleBtn.on('click',onBtnClick);
      $blankATags.on('click', onBlankAClick);
  });

})(jQuery);
//sometimes, the "$" might not mean jQuery, so we use self invoking
*//////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////

function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
}

function designBGStuff() {
  // .design-img-link hover:
  $('.design-img-link').hover(function(){
    // find a color > apply that color to the bg
    // go up two parents
    //.col-50.flex.flex--center.dribbble
      //.col-1
        //a(href="#{link}" data-color='#{color}').design-img-link
    //so from design-img-link -> col-1 -> .dribbble
    $(this).parent().parent().css('background-color', $(this).data('color'));
  }, function(){
    // off > revert the color
    $(this).parent().parent().css('background-color', $(this).parent().parent().data('orig-color'));
  });
}

///////////////////////////////////////////////////
// Articles - makes a random article wiggle
function articleTada(){
  var randNum = Math.floor(Math.random() * $('.article-thumb').length) + 1
 //random number
 $('.article-thumb').eq(randNum).addClass('is-emph')
  .siblings().removeClass('is-emph');
}



///////////////////////////////////////////////////
// Mentoring Part 2
function mentoringBubbleClick() {
  //HR7.2
  $('.face').on('click',function(){
    var $this = $(this),
        faceTop = $this.parent().position().top, //position top not offset top
        vertMath = -1 * (faceTop - 230);
        // for @media HGR7.3
        faceLeft = $this.position().left,
        horizMath = 0 - (faceLeft) + 30;
        console.log(faceTop);
        console.log((vertMath));

    if($this.parent().hasClass('blog')){
          //if we are clicking the back button
          //mentoringNarrowStart();
          //$this.siblings().css('top', + vertMath + 'px')
          $this.parent().parent().css('top', + vertMath + 'px')
          //this points to faces
        } else {
          $this.parent().css('left', + horizMath + 'px')
        }



    //console.log(vertMath);
    //HR7.3
    /*if($(window).width() > 640){
      /////////////////////////////////////////// HR7.2 carried forward
      $this.parent().css('top', + vertMath + 'px')
    } else {
      if($this.hasClass('back-btn')){
        //if we are clicking the back button
        mentoringNarrowStart();
      } else {
        $this.parent().css('left', + horizMath + 'px')
      }
    }*/
    if(!$this.hasClass('back-btn')){ //only if not back button

      if($this.parent().hasClass('blog')){
          $this.parent().addClass('has-bubble-open')
          .siblings().removeClass('has-bubble-open');
        } else {
          $this.addClass('has-bubble-open')
          .siblings().removeClass('has-bubble-open');
          //.siblings().css('opacity', '0.8');
          // HR7.2,3:15 One speech bubble at a time
        }
      }
    });

  // when I click a face
  // get distance of the face from its parent
  // move the whole container up 115px + the count
  // add the is-open class to the face, pop the balloon
  // makes sure that the face is centered

  /////////////////////////////////////
}

///////////////////////////////////////////////////

///////////////////////////////////////////////////
$(window).scroll(function() {
//Things will trigger depending on how far you scroll
  youtubeVidScroll();
  startMentoring();
  startArticles();
});
// For Youtube Section - makes the video strip move
function youtubeVidScroll() {
  var wScroll = $(window).scrollTop();
  $('.video-strip').css('background-position','center -'+ wScroll +'px');
  console.log(wScroll);
}
////////////////////////////////////////////////////
function startArticles(){
  var wScroll = $(window).scrollTop();
  //assigns 'is-visible' class once we reach half past section
  if($('section.articles').offset().top - $(window).height()/2 < wScroll) {
    //what each does is that it loops and applies the function
    $('.article-thumb').each(function(i){
      //The set time out will make the article thumb square come in one at a time, the time "200 * i" is 300ms times each index number

      setTimeout(function(){
        $('.article-thumb').eq(i).addClass('is-visible');
      }, 200 * i);
    });
  }
  //if($('section.mentoring').offset().top - 500 < wScroll) {
}

////////////////////////////////////////////////////
// We want the faces to appear after scrolling to that section
function startMentoring() {
  var wScroll = $(window).scrollTop();

  //if($('section.mentoring').offset().top - 500 < wScroll) {
  if($('section.project').offset().top - $(window).height()/2 < wScroll) {
    if(($(window).width() > 640)) {
    $('.faces').addClass('launched'); // changes to top: 0px
    // now we want the bubble to come up after delay
      if(!$('.face').hasClass('has-bubble-open') && !$(this).hasClass('back-btn')){
      // Aactivates only if there are no has-bubble-open present
      //The if makes sure that the bubble auto-pops up only once
        setTimeout(function(){
          //$('.face').first().addClass('has-bubble-open')
          $('.face:nth-child(2)').addClass('has-bubble-open')
          $('.face-wrap:nth-child(3)').addClass('has-bubble-open')
          //makes it so that the third picture is on by default
        }, 400);
      }
    } else {
      mentoringNarrowStart();
    }

  }
}
//////////////////////////////////////////HR7.3,23:00

function mentoringNarrowStart() {
  $('.faces').css({
    'top': '0px',
    'left': '0px'
  });
  $('.faces').addClass('launched');
  $('.face:nth-child(2)').addClass('has-bubble-open')
  //$('.face').first().addClass('has-bubble-open')
    .siblings().removeClass('has-bubble-open');
    // For the mentoring section / face bubbles
    // when shrinking to small screen, selection resets to first in order
    $('.face-wrap:nth-child(3)').addClass('has-bubble-open')
    // $('.face-wrap').first().addClass('has-bubble-open')
      .siblings().removeClass('has-bubble-open');
}

function mentoringWideStart() {
  $('.faces').css({
    'top': '0px',
    'left': '0px'
  });
  //$('.face').first().addClass('has-bubble-open')
  $('.face:nth-child(2)').addClass('has-bubble-open')
  //$('.face:nth-child(3)').first().addClass('has-bubble-open')
    .siblings().removeClass('has-bubble-open');
    // For the mentoring section / face bubbles
    // when shrinking to big screen, selection resets to third in order
    $('.face-wrap:nth-child(3)').addClass('has-bubble-open')
      .siblings().removeClass('has-bubble-open');
    //for blog section, we use face-wrap
}

$(window).resize(function() {
  if($(window).width() > 640){
    mentoringWideStart();
  }  else {
    mentoringNarrowStart();
  }
})

/////////////////////////////////////////////////////

// smoothScroll function is applied from the document ready function
function smoothScroll(duration) {
	// it looks in the document for all anchors with the #
	// .on is so it will be ready
	$('a[href^="#"]').on('click', function(event) {

			// "this" is the link you clicked
			// then stores it in target
			//for example the link <a href="$about">about</a>
			//it will take the #about
			// and take you to the one with the id=about
			//<h3> id="about">ABOUT ME</h3>
	    var target = $( $(this).attr('href') );

      //if the link clicked has a length, not zero
	    if( target.length ) {
          //dont go to section normally
          //normally the browser will reload
	        event.preventDefault();
          //instead take the html and body and animate
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}


/*
$(document).ready(function(){

  $('p').css('border', '4px solid red');

});

*/
////////////////
