var d = new Date()

var year = d.getFullYear()
var month = d.getMonth()
var day = d.getDay()
var dayOfMonth = d.getDate()

var calendar = $('.calendar');

var schedulingHours = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM']

var monthText = {
    monthName: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};

var dayText = {
    dayName: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};


// used https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-122.php for a quick way to add ordinal suffixes to numbers
var toOrdinalSuffix = num => {
    var int = parseInt(num),
    digits = [int % 10, int % 100]
    ordinals = ['st', 'nd', 'rd', 'th'],
    oPattern = [1, 2, 3, 4],
    tPattern = [11, 12, 13, 14 , 15, 16, 17, 18, 19];
    return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
    ? int + ordinals[digits[0]-1]
    : int + ordinals[3];
}

setInterval(function(){
    var dateDisplay = $('#currentDay').text("It is " + moment().format('h:mm:ss a') + " on " + dayText.dayName[day] + ", " + monthText.monthName[month] + " " + toOrdinalSuffix(dayOfMonth) + ", " + year)
}, 100);
// var dateDisplay = $('#currentDay').text("It is " + moment().format('h:mm:ss a') + " on " + dayText.dayName[day] + ", " + monthText.monthName[month] + " " + toOrdinalSuffix(dayOfMonth) + ", " + year)

// for loop for each hour of the day you want to include in the scheduler
for(i=0; i < schedulingHours.length; i++){
    // add hour column
    var time = $('<div>').addClass('hour').attr('id', schedulingHours[i]).text(schedulingHours[i]);
    // add text area column
    var activity = $('<textarea>').addClass('activity').attr('id', schedulingHours[i]).text('Add an event here...');
    // add save
    var saveBtn = $('<button>').addClass('saveBtn').attr('id', schedulingHours[i]).text('SAVE');

    calendar.append(time);
    calendar.append(activity);
    calendar.append(saveBtn);
}

$('.saveBtn').on('click', function() {
    var selectedHour = $(this).attr('id')
    var selectedActivity = $('textarea[#'+ selectedHour + ']').text()
    
    //($('textarea # + selectedHour).attr('id'))

    console.log(selectedHour)
    console.log(selectedActivity)
    
    // localStorage.setItem('selectedHour', 'selectedActivity')
})