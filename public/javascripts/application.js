// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
//
//
$('.cust a').click(function() {
  var url = $(this).attr('href');
  var link = this;

  $.ajax({
    url: url,
    success: function(data) {
    var $fullContent = $('#cusdetail', data);
    var $Content = $('#cprod', data);
    var html = $fullContent.html();
    var html2 = $Content.html();
    $('#cinfo').html(html);
    $('#cinfo').append(html2);
    }
  });
  return false;
});


$(window).scroll(function(e){ 
    $el = $('#cinfo'); 
    if ($(this).scrollTop() < 135){ 
      $('#cinfo').css({'position': 'fixed','margin-left': '290px', 'top': '130px'}); 
    } 
    else {
      $('#cinfo').css({'position': 'fixed','margin-left': '290px', 'top': '2px'}); 
    }  
});
