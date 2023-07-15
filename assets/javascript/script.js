// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function save () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
// var description = $("#input-9")
  

$(".btn").on("click", function(){
    localStorage.setItem("event", )

  })
})




function timeColor() {
  // get current number of hours
  var currentHour = dayjs().hour();
  console.log(currentHour)

  // loop over time blocks
  $('.time-block').each(function () {
    var hourBlock = parseInt($(this).attr('id').split('-')[1]);

    // check if we've moved past this time
    if (hourBlock < currentHour) {
      $(this).addClass('past');
    } else if (hourBlock === currentHour) {
      $(this).removeClass('past');
      $(this).addClass('present');
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
}

timeColor();

  //
  // // TODO: Add code to get any user input that was saved in localStorage and set
  // // the values of the corresponding textarea elements. HINT: How can the id
  // // attribute of each time-block be used to do this?
  


  // // Code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMM D, YYYY hh:mmA'));