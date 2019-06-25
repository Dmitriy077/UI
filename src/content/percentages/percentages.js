$(function() {
        $('.chart').easyPieChart({
            size: 172,
            barColor: '#E65635',
            scaleColor: false,
            lineWidth: 8,
            trackColor: 'white',
            lineCap: 'circle',
            animate: 1000, //animation duration
        });
    });




var barChart = {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'Population',
            data: [11, 26, 30, 33],
            backgroundColor: [ '#737373', '#E65635', '#4DB6A7', '#E4E4E4'],
            borderWidth: 0
        }]
    },
    options: {
        cutoutPercentage: 65
    }
};
$(document).ready(function(){
var popCanvas = $("#popChart");
window.line = new Chart(popCanvas, barChart);
});


