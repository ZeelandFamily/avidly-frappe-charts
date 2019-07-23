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
		},
			lineOptions: {
			hideDots: 1 // default: 0
		},
		title: settings.title,
		type: 'line', // or 'bar', 'line', 'pie', 'percentage'
		height: 400,
		colors: ['purple', '#ffa3ef', 'light-blue'],
	
		tooltipOptions: {
			formatTooltipX: d => d,
			formatTooltipY: d => d + ' %',
		}
	});
}