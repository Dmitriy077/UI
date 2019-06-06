// $(document).ready(function(){
	
	$('#datep').datepicker({
		dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
		dateFormat: 'dd',
		firstDay: 1,
		selectOtherMonths: true,
		showOtherMonths: true,
		onSelect: function() {
				var i = $('#datep').val();
				$( ".calendar_date" ).html( i );
				console.log(i);	
			},
		onChangeMonthYear: function() {
				var i = $('#datep').val();
				$( ".calendar_date" ).html( i );
				console.log(i);	
			},
	});

// });

