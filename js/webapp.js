//variables

$bell_button = $('#notify-button');
$popup = $('.popup');
$popup_close = $('.popup-close');
$dot = $('.dot');
$alert = $('.alert');
$alert_close = $('.close-thik');
$search = $('#search');
$times_class = $('.time-button');
$modal = $('.message-alert');






//global chart settings 

Chart.defaults.global.defaultFontFamily = "'Josefin Sans', sans-serif";
Chart.defaults.global.maintainAspectRatio = false;
Chart.defaults.global.responsive = true;
Chart.defaults.bar.scaleShowVerticalLines = false;


// notify button trigger


$bell_button.click(function() {
    $popup.fadeIn().css('display', 'flex');
    $search.fadeOut();


});
$popup_close.click(function() {
    $popup.fadeOut();
    $search.fadeIn();


});

// nav bar avtivation
$('.left-nav a').click(function(){
    $('.left-nav a').removeClass('active-a');
    $(this).addClass('active-a');

});




/////// diffrent charts data for updating \\\\\\\

//hourly chart

var hourly_data = {
    labels: ["10am-12pm", "12pm-2pm", "2pm-4pm", "4pm-6pm"],
    datasets: [{
        data: [250, 550, 750, 600, 200],
        backgroundColor: 'rgba(232, 37, 21, 0.2)',
        borderColor: 'rgba(232, 37, 21, 1)',
        borderWidth: 0.2
    }]
};



//Daily chart

var daily_data = {
    labels: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
    datasets: [{
        data: [250, 1250, 2000, 1500, 2000, 1100, 750],
        backgroundColor: 'rgba(43, 167, 198, 0.2)',
        borderColor: 'rgba(43, 167, 198, 1',
        borderWidth: 0.4
    }]
};

//weekly chart

var weekly_data = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [550, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 1150, 1750, 1250],
        backgroundColor: 'rgba(0, 0, 132, 0.2)',
        borderColor: 'rgba(169, 173, 255, 1)',
        borderWidth: 0.7
    }]
};

//monthly chart

var monthly_data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        data: [950, 750, 1500, 1000, 1600, 1500, 1350],
        backgroundColor: 'rgba(54, 202, 21, 0.2)',
        borderColor: 'rgba(54, 202, 21, 1)',
        borderWidth: 1
    }]
};

// summing the chart

var ctx = $("#line-chart");

var myChart = new Chart(ctx, {
    type: 'line',
    data: monthly_data,
    options: {
        legend: {
            display: false
        }

    }
});



//bar chart  for daily traffic

var barChart = $('#bar-chart');
var myBarChart = new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: 'PM',
            data: [950, 750, 1500, 1000, 1700, 2500, 1350],
            backgroundColor: 'rgba(138, 0, 255, 1)',

        }, {
            label: 'AM',
            data: [450, 750, 1200, 1600, 1200, 2000, 1000],
            backgroundColor: 'rgba(54, 202, 21, 1)',

        }]
    },
    options: {
        legend: {
            display: true,
            position: "bottom"
        }

    }

});








//donut chart for mobile users


var donutChart = $('#donut-chart');
var myDoughnutChart = new Chart(donutChart, {
    type: 'doughnut',
    data: {
        labels: ["Desktop", "Tablet", "Mobile", "other"],
        datasets: [{
            data: [250, 350, 1500, 20],
            backgroundColor: [
                "#336699",
                "#00CC33",
                "#3333CC",
                "#6633ff"
            ]
        }]
    },
    options: {

        responsive: true,
        legend: {
            position: 'bottom',
            labels: {
                fontFamily: 'Roboto, sans-serif',
                boxWidth: 14
            }
        }
    }

});


//click through the traffic tabs

$("#hourly").click(function(event) {
    event.preventDefault(event);
    $times_class.removeClass('active');
    $(this).addClass('active');
    myChart.config.data = hourly_data;
    myChart.update();

});

$("#daily").click(function(event) {
    event.preventDefault(event);
    $times_class.removeClass('active');
    $(this).addClass('active');
    myChart.config.data = daily_data;
    myChart.update();

});

$("#weekly").click(function(event) {
    event.preventDefault(event);
    $times_class.removeClass('active');
    $(this).addClass('active');
    myChart.config.data = weekly_data;
    myChart.update();

});

$("#monthly").click(function(event) {
    event.preventDefault(event);
    $times_class.removeClass('active');
    $(this).addClass('active');
    myChart.config.data = monthly_data;
    myChart.update();

});


// click functions for closing the alert

$alert_close.click(function() {
    $alert.fadeOut(700);
});


// auto complete for search bars


$(function() {
    var users = [
        "phil johnson",
        "thot leader",
        "lady lexy",
        "zaki warfel ",
        "kourosh mirzaei",
        "jam goodarzi",
        "fohdla mcarthy",
        "amanda winchester"
    ];
    $("#search-user").autocomplete({
        source: users
    });
});

 ////////// sent message alerts \\\\\\\\\\\

function checking() {

    if ($('#search-user').val() === '' && $('#user-message').val() === '') {
        $modal.html('<p>the fields are empty.</p>');
        $modal.fadeIn(900).delay(900).fadeOut(900);

    } else if ($('#search-user').val() !== '' && $('#user-message').val() !== '') {
        $modal.html('<p>Message Sent.</p>');
        $modal.css("background-color", "green");
        $modal.fadeIn(900).delay(900).fadeOut(900);
    }
    else if ($('#search-user').val() !== '' && $('#user-message').val() === '') {
        $modal.html('<p>You Need to Write a Message.</p>');
        $modal.css("background-color", "orange");
        $modal.fadeIn(900).delay(900).fadeOut(900);

    }else{
        $modal.html('<p>Choose a Person to Send the Message to.</p>');
        $modal.css("background-color", "orange");
        $modal.fadeIn(900).delay(900).fadeOut(900);
    }
}

$('#btn-message-send').click(function(event) {
    event.preventDefault(event);
    checking();
    console.log($modal);
});


 ////////// saving in local storage \\\\\\\\\\\


// email slider



$(function () {
    var data = localStorage.getItem("showning");
    if (data !== null) {
        $('#email-pref').attr("checked", "checked");
    }
});

$('#email-pref').click(function () {

    if ($(this).is(":checked")) {
        localStorage.setItem("showning", 1);
    } else {
        localStorage.removeItem("showning");
    }
  
});

// profile slider
$(function () {
    var data = localStorage.getItem("profiling");
    if (data !== null) {
        $('#profile-pref').attr("checked", "checked");
    }
});

$('#profile-pref').click(function () {

    if ($(this).is(":checked")) {
        localStorage.setItem("profiling", 1);
    } else {
        localStorage.removeItem("profiling");
    }
  
});

// select value

$(function() {
    $('#user-timezone').change(function() {
        localStorage.setItem('todoData', this.value);
    });
    if(localStorage.getItem('todoData')){
        $('#user-timezone').val(localStorage.getItem('todoData'));
    }
});




///// saving alert \\\\\\\\


$('#btn-settings-save').click(function(event){
    event.preventDefault(event);
    alert('Settings Saved!');

});
















