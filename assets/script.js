var timeDisplayEl = $('#current-date');

// records current hour in military time
var hour = moment().format('H');

// gets the current date
function displayDate() {
    var date = moment().format('dddd[, ]MMMM[ ]Do');
    timeDisplayEl.text(date);
    
}

// function loops 9 time for each schedule row 
// on each pass it ignores all non integer characters and
// checks if the current hour is greater than or equal to the schedule row hour
// if current hour is greater than scheduled hour row turns gray
// if current hour is equal to scheduled hour row turns red
// if current hour is less than scheduled hour row turns green
$('.time-block').each(function(){
    var rowHour = parseInt($(this).attr('id'))
    if (rowHour === hour) {
        $(this).children('.col-sm-10').attr('class', 'present col-sm-10 description')
      } else if (hour > rowHour) {
        $(this).children('.col-sm-10').attr('class', 'past col-sm-10 description')
      } else {
        $(this).children('.col-sm-10').attr('class', 'future col-sm-10 description')
      }
    })

setInterval(displayDate, 1000);