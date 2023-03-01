// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  var now = dayjs().format('dddd, DD MMMM YYYY');
  var saveBtnEl = $('.saveBtn');
  
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    saveBtnEl.on('click', function () {
      var parentIdEl = $(this).parent().attr('id');
      var textInput = $(this).siblings('textarea').val();

      localStorage.setItem(parentIdEl, textInput);
      $(this).siblings('textarea').val(localStorage.getItem(parentIdEl));
    });

    
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    var nowHour = dayjs().format('H');
    var nowHourId = 'hour-' + nowHour;

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


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    // loops through local storage and sets html elements with id corresponding to key in local storage with the value
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      var element = $('#' + key);
  
      element.children('textarea').val(value);
    }
    //
    // TODO: Add code to display the current date in the header of the page.
    $('#currentDay').text(now);
  });


  // When website opened, current date displays
  // color block on hours indicate whether that hour is past,present,future
  //can enter text into hour blocks
  //can save enterred text
  // saved text dispalys in hour block and saves on page refresh