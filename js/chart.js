/**
 * Initialize all Frappe charts found in DOM
 */
(function() {

	// Select all charts in a page
	var avidlyFrappeCharts = document.querySelectorAll( '.avidly-frappe-chart' );

	// Loop over charts
	for (var index = 0; index < avidlyFrappeCharts.length; index++) {

		var element = avidlyFrappeCharts[index];

		// Get the id
		var id = element.dataset.frappeId ? element.dataset.frappeId : 0;

		// Get the localized data
		var settings = window[ 'avidlyFrappeChart_' + id ] ? window[ 'avidlyFrappeChart_' + id ] : [];

		// Jump out if settings is empty
		if ( ! settings.data.length ) {
			continue;
		}

		// Initialize the chart
		var chart = new frappe.Chart( element, {
			data: JSON.parse( settings.data ),
			axisOptions: {
				xIsSeries: true,
				xAxisMode: 'tick',
			},
			lineOptions: {
				hideDots: 1,
			},
			title: settings.title,
			type: 'axis-mixed', // or 'bar', 'line', 'pie', 'percentage'
			height: 300,
			colors: ['#107737', '#F08627', '#4E96EF', '#874982', ],
		});
	}

})();