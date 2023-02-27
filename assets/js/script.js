// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$( document ).ready(function () {
  var now = dayjs().format('dddd, DD MMMM YYYY');
  var currentDayEl = $('#currentDay');

  var saveBtnEl = $('.saveBtn');

  // localStorage.setItem("hour-9", '');
  // localStorage.setItem("hour-10", '');
  // localStorage.setItem("hour-11", '');
  // localStorage.setItem("hour-12", '');
  // localStorage.setItem("hour-1", '');
  // localStorage.setItem("hour-2", '');
  // localStorage.setItem("hour-3", '');
  // localStorage.setItem("hour-4", '');
  // localStorage.setItem("hour-5", '');
  // var hour9El = $('#hour-9');
  // var hour10El = $('#hour-10');
  // var hour11El = $('#hour-11');
  // var hour12El = $('#hour-12');
  // var hour1El = $('#hour-1');
  // var hour2El = $('#hour-2');
  // var hour3El = $('#hour-3');
  // var hour4El = $('#hour-4');
  // var hour5El = $('#hour-5');
  
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    
    console.log('ready');
    saveBtnEl.on('click', function () {
      var parentIdEl = $(this).parent().attr('id');
      var textInput = $(this).siblings('textarea').val();
      console.log(parentIdEl);
      console.log(textInput);
      localStorage.setItem(parentIdEl, textInput);
      textInput.val() = localStorage.getItem(parentIdEl);
    });
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    currentDayEl.text(now);
  });
  console.log("hello world");

  // When website opened, current date displays
  // color block on hours indicate whether that hour is past,present,future
  //can enter text into hour blocks
  //can save enterred text
  // saved text dispalys in hour block and saves on page refresh