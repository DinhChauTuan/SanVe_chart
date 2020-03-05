var ctx = document.getElementById('chartjs-bar').getContext('2d');

Chart.defaults.global.defaultFontColor = '#464D5D';
Chart.defaults.global.defaultFontFamily = 'Montserrat';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontStyle = 'normal';

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
        datasets: [{
            data: [12,20,26,12,26,12,20,30,12,4,12,9,20,26,12,4,9,20,12,9,12,26,12,4,9,12,9,12,4,26],
            backgroundColor: '#6FCD98',
            hoverBackgroundColor: '#99FBC4',
            label: 'Số vé'
        }]
    },
     options: {
        
        tooltips: {
           
        },
        legend: {
            position:'bottom',

        }
    }
    
});

var ctx1 = document.getElementById('chartjs-pie-ticket').getContext('2d');

Chart.defaults.global.defaultFontColor = '#464D5D';
Chart.defaults.global.defaultFontFamily = 'Montserrat';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontStyle = 'normal';

var myChart = new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: ['IOS','Android','Admin'],
        datasets: [{
            data: [20,30,50],
            backgroundColor: ['#FFA26B','#9DC3FE','#6FCD98'],
            borderWidth: 0
        }]
    },
     options: {
        
        tooltips: {
           
        },
        legend: {
            position:'bottom',

        }
    }
    
});

var ctx2 = document.getElementById('chartjs-pie-list').getContext('2d');

Chart.defaults.global.defaultFontColor = '#464D5D';
Chart.defaults.global.defaultFontFamily = 'Montserrat';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontStyle = 'normal';

var myChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['IOS','Android','Admin'],
        datasets: [{
            data: [50000,250000,13213000],
            backgroundColor: ['#FFA26B','#9DC3FE','#6FCD98'],
            borderWidth: 0
        }]
    },
     options: {
        
        tooltips: {
           
        },
        legend: {
            position:'bottom',

        }
    }
    
});