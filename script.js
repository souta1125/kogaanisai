$(window).load(function(){
  let w = $('.t-body').width();
  $('.t-body').attr('style', "--i:" + w + "px");
})

$(window).resize(function(){
  let w = $('.t-body').width();
  $('.t-body').attr('style', "--i:" + w + "px");
})
