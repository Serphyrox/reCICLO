var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center : {
			lat : -34.397,
			lng : 150.644
		},
		zoom : 8
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