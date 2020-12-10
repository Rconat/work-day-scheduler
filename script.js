var d = new Date()

var year = d.getFullYear()
var month = d.getMonth()
var day = d.getDay()
var dayOfMonth = d.getDate()



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

var dateDisplay = $('#currentDay').text("It is " + dayText.dayName[day] + ", " + monthText.monthName[month] + " " + toOrdinalSuffix(dayOfMonth) + " " + year)

var calendar = $('.calendar');

for(i=0; i<13; i++){
    var row = $('<div>').addClass('hour').text((i+9) + ":00 AM");
    var activity = $('<textarea>').addClass('activity').text('activity ' + (i+1));
    var saveBtn = $('<button>').addClass('saveBtn').text('SAVE');

    calendar.append(row);
    calendar.append(activity);
    calendar.append(saveBtn);
}

//

$('.calendar').append(table);