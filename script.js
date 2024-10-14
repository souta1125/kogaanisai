$('.list-day-item > button').click(function(){
  let list = $('.list-day')
  ,   body = $('.t-content-body')
  ,   items = body.find('.t-item')
  ,   field = $(this).attr('data-field');

  list.find('.list-day-item > button').attr('aria-disabled', true);
  $(this).attr('aria-disabled', false);

  items.attr('aria-disabled', true);
  for (let i = 0; i < items.length; i++) {
    let item = body.find('.t-item').eq(i)
    ,   day = item.attr('data-field');

    if(field === day){
      item.attr('aria-disabled', false);
    }
  }
})
