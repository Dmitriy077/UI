$('#datep').datepicker({
	create: function() {
			var c = $('#datep').val();
			$( ".test" ).html( c );
			console.log(c);	
			alert('Ghbdtn');
		},
	onSelect: function() {
			var i = $('#datep').val();
			$( ".test" ).html( i );
			console.log(i);	
		},
	onChangeMonthYear: function() {
			var i = $('#datep').val();
			$( ".test" ).html( i );
			console.log(i);	
		},
		dateFormat: 'dd',
});

// $('.ui-state-default').on('click', function() {
// 	var i = $('#datep').val();
// 	console.log(i);
// });
