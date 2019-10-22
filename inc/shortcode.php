<?php
/**
 * Set up the chart shortcode
 *
 * @param Array $atts Shortcode attributes
 */
function frappe_shortcode( $atts ) {
	$chart_id = absint( $atts['id'] );

	// Check that id is set and it belongs to a correct post type
	if ( ! ( $chart_id && 'frappe-chart' === get_post_type( $chart_id ) ) ) {
		return;
	}

	// Enqueue the scripts and styles
	wp_enqueue_script( 'frappe-chart' );

	// Localize chart settings
	wp_localize_script(
		'frappe-chart',
		'avidlyFrappeChart_' . $chart_id,
		[
			'data'  => get_post_meta( $chart_id, 'chart-settings' ),
			'title' => esc_html( get_the_title( $chart_id ) ),
		]
	);

	// Get the chart fallback image for legacy browsers
	$html  = '<div class="avidly-frappe-chart" data-frappe-id="' . $chart_id . '">';
	$html .= get_the_post_thumbnail( $chart_id ) ? '<div class="avidly-frappe-chart-fallback" hidden>' . get_the_post_thumbnail( $chart_id, 'large' ) . '</div>' : '';
	$html .= '</div>';

	return $html;
}
