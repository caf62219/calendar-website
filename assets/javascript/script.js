// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  
 
  
})
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var nineAm =$("#hour-9");
  var tenAm = $("#hour-10");
  var elevenAm = $("#hour-11");
  var twelvePm = $("#hour-12");
  var onePm = $("#hour-13");
  var twoPm = $("#hour-14");
  var threePm = $("#hour-15");
  var fourPm = $("#hour-16");
  var fivePm = $("#hour-17");
  var workDay= ["nineAm", "tenAm", "elevenAm", "twelvePm", "onePm", "twoPm", "threePm", "fourPm", "fivePm"]
 var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMM D, YYYY hh:mmA'));
 
let currentHour =today.format("HH");


if (currentHour ===9){
  nineAm.addClass("present");
}  else if (currentHour > 9) {
    nineAm.addClass("past")  }
else {
  nineAm.addClass("future");
}

if (currentHour ===10){
 tenAm.addClass("present");
}  else if (currentHour > 10) {
    tenAm.addClass("past")  }
else {
  tenAm.addClass("future");
}

if (currentHour ===11){
  elevenAm.addClass("present");
}  else if (currentHour > 11) {
    elevenAm.addClass("past")  }
else {
  elevenAm.addClass("future");
}

if (currentHour ===12){
  twelvePm.addClass("present");
}  else if (currentHour > 12) {
    twelvePm.addClass("past")  }
else {
  twelvePm.addClass("future");
}

if (currentHour ===13){
  onePm.addClass("present");
}  else if (currentHour > 13) {
    onePm.addClass("past")  }
else {
  onePm.addClass("future");
}

if (currentHour ===14){
  twoPm.addClass("present");
}  else if (currentHour > 14) {
    twoPm.addClass("past")  }
else {
  twoPm.addClass("future");
}

if (currentHour ===15){
  threePm.addClass("present");
}  else if (currentHour > 15) {
    threePm.addClass("past")  }
else {
  threePm.addClass("future");
}

if (currentHour ===16){
  fourPm.addClass("present");
}  else if (currentHour > 16) {
    fourPm.addClass("past")  }
else {
  fourPm.addClass("future");
}

if (currentHour ===17){
  fivePm.addClass("present");
}  else if (currentHour > 17) {
    fivePm.addClass("past")  }
else {
  fivePm.addClass("future");
}
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  


  // Code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMM D, YYYY hh:mmA'));