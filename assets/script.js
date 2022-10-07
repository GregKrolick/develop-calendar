var timeDisplayEl = $('#current-date');

//records current hour
var hour = moment().format('H')

// gets the current date
function displayDate() {
    var date = moment().format('dddd[, ]MMMM[ ]Do');
    timeDisplayEl.text(date);
}

