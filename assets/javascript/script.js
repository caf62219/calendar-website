

  //save the events to local storage
function saveEvent(event) {
  var parentId = this.parentElement.id;
  console.log(parentId);
  var event = this.previousElementSibling.value;
  console.log(event);
  localStorage.setItem(parentId, JSON.stringify(event));
}

//event listener on the save button
$(".saveBtn").on("click", saveEvent);

//Get event data from local storage 
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  //function that changes the timeColor
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

  // // Code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMM D, YYYY hh:mmA'));