//Global chart configurations

Chart.defaults.global.hover.mode = 'single';



// diffrent charts data for updating

//hourly chart

var hourly_data = {
    labels: ["10am-12pm", "12pm-2pm", "2pm-4pm", "4pm-6pm"],
    datasets: [{
        data: [250, 550, 750, 600, 200],
        backgroundColor: 'rgba(232, 37, 21, 0.2',
        borderColor: 'rgba(232, 37, 21, 1',
        borderWidth: 0.2
    }]
};



//Daily chart

var daily_data = {
    labels: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
    datasets: [{
        data: [250, 2250, 2000, 2500, 2000, 2500, 750],
        backgroundColor: 'rgba(43, 167, 198, 0.2)',
        borderColor: 'rgba(43, 167, 198, 1',
        borderWidth: 0.4
    }]
};

//weekly chart

var weekly_data = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [550, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
        backgroundColor: 'rgba(0, 0, 132, 0.2)',
        borderColor: 'rgba(169, 173, 255, 1)',
        borderWidth: 0.7
    }]
};

//monthly chart

var monthly_data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        data: [950, 750, 1500, 1000, 1700, 2500, 1350],
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

//click through the traffic tabs

$("#hourly").click(function() {
    myChart.config.data = hourly_data;
    myChart.update();

});

$("#daily").click(function() {
    myChart.config.data = daily_data;
    myChart.update();

});

$("#weekly").click(function() {
    myChart.config.data = weekly_data;
    myChart.update();

});

$("#monthly").click(function() {
    myChart.config.data = monthly_data;
    myChart.update();

});


//bar chart  for daily traffic

var barChart = $('#bar-chart');
var myBarChart = new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            data: [950, 750, 1500, 1000, 1700, 2500, 1350],
            backgroundColor: 'rgba(54, 202, 21, 0.2)',
            borderColor: 'rgba(54, 202, 21, 1)',
            borderWidth: 1
        }]
    }

});




//donut chart for mobile users


var donutChart = $('#donut-chart');
var myDoughnutChart = new Chart(donutChart, {
    type: 'doughnut',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            data: [950, 750, 1500, 1000, 1700, 2500, 1350],
            backgroundColor: 'rgba(54, 202, 21, 0.2)',
            borderColor: 'rgba(54, 202, 21, 1)',
            borderWidth: 1
        }]
    }

});























