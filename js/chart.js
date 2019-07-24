const avidlyFrappeCharts = document.querySelectorAll( '.avidly-frappe-chart' );
for (let index = 0; index < avidlyFrappeCharts.length; index++) {
	const element = avidlyFrappeCharts[index];
	// Get the id
	const id = element.dataset.frappeId;
	// Get the localized data
	const settings = window[ 'avidlyFrappeChart_' + id ];
	let chart = new frappe.Chart( element, {
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