var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center : {
			lat : 39.9941356,
			lng : -0.07112801
		},
		zoom : 13
	});
}

$('#opener').on('click', function() {		
	var map = $('#map-container');
	var container = $('#container');
	if (map.hasClass("col-md-4")) {
		map.removeClass('col-md-4')
		map.addClass('col-md-1')
		container.removeClass('col-md-8')
		container.addClass('col-md-11')
		$('#mapShadow').css('z-index', '50');
	} else {
		map.removeClass('col-md-1')
		map.addClass('col-md-4')
		container.removeClass('col-md-11')
		container.addClass('col-md-8')
		$('#mapShadow').css('z-index', '0');
	}	
	return false;	
});

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Reciclador', 'No reciclador'],
        datasets: [{
            data: [415790, 153785],
            backgroundColor: [
                'rgba(116, 6, 180, 1)',
                'rgba(207, 207, 207, 1)'
            ],
            borderColor: [
                'rgba(116, 6, 180, 0.2)',
                'rgba(207, 207, 207, 0.2)'
            ],
            borderWidth: 1
        }]
    },
    options: {
    	responsive : false
    }
});