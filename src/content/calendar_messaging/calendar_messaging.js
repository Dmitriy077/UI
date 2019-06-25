$(document).ready(function(){

	var date = new Date().getDate();
	$( ".calendar_date" ).html( date );

});

$('#datep').datepicker({
	dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
	dateFormat: 'dd',
	firstDay: 1,
	selectOtherMonths: true,
	showOtherMonths: true,
	onSelect: function() {
			var i = $('#datep').val();
			$( ".calendar_date" ).html( i );
		},
	onChangeMonthYear: function() {
			var i = $('#datep').val();
			$( ".calendar_date" ).html( i );
		},
});