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

// FIXME Some stupid bug in Autocomplete Search Blank Entries gets created //
$('input#searchbox').keypress(function(e) {
    if(e.keyCode == 13) {
	return false;
    }
});

$('input#searchbox').bind('focusout',function() {
  var url = '/consumers/' + $('input#id_element_placeholder').val();
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
    if ($(this).scrollTop() < 165){ 
      $('#cinfo').css({'position': 'fixed','margin-left': '290px', 'top': '212px'}); 
      $('#searchb').fadeIn();
    } 
    else {
      $('#cinfo').css({'position': 'fixed','margin-left': '290px', 'top': '2px'}); 
      $('#searchb').fadeOut();
    }  
});

$(document).ready(function() {
    $('#myList').listnav();
    $('#flash').delay(8000).fadeOut(500); 
});
