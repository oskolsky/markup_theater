//****************************************************************************************************
//
// .. READY
//
//****************************************************************************************************
$(function() {
  
  setSectionHeight();

  $('.form-el.__phone').mask('+7 (999) 999-9999');

  
  
  //****************************************************************************************************
  //
  // .. SCROLL
  //
  //****************************************************************************************************
  $(window).scroll(function() {});



  //****************************************************************************************************
  //
  // .. RESIZE
  //
  //****************************************************************************************************
  $(window).smartresize(function() {
    
    setSectionHeight();
    
  });
  
});



//****************************************************************************************************
//
// .. LOAD
//
//****************************************************************************************************
$(window).load(function() {});



//****************************************************************************************************
//
// .. FUNCTION
//
//****************************************************************************************************
function setSectionHeight() {
  var windowH = $(window).outerHeight();
  $('.section.__full').each(function() {
    $(this).height(windowH);
  });  
}