
$(document).ready(function () {

  // Get the current date and format it
  var now = dayjs().format('dddd, DD MMMM YYYY');
  var saveBtnEl = $('.saveBtn');

  // When a save button is clicked, the textarea value is saved to localStorage
    saveBtnEl.on('click', function () {
      // Get ID of parent element
      var parentIdEl = $(this).parent().attr('id');
      // Get the input of the siblings textarea
      var textInput = $(this).siblings('textarea').val();
      // Saves textarea value to saved value
      localStorage.setItem(parentIdEl, textInput);
      $(this).siblings('textarea').val(localStorage.getItem(parentIdEl));
    });
    
    // Formats time 
    var nowHour = dayjs().format('H');
    var nowHourId = 'hour-' + nowHour;
    // // For all elements with class 'time-block', add a class depending on its position relative to the current hour
    $('.time-block').each(function() {
      if ($(this).attr('id') == nowHourId) {
        $(this).addClass('present');
        $(this).prevAll().addClass('past');
        $(this).nextAll().addClass('future');
      } else if (nowHour < 9) {
        $(this).addClass('future');
      } else if (nowHour > 17) {
        $(this).addClass('past');
      }
    });

    // Loads saved values from local storage
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      var element = $('#' + key);
  
      element.children('textarea').val(value);
    }

    // Sets the value of 'id currentDay' to formatted date
    $('#currentDay').text(now);
  });

