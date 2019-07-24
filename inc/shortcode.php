<?php
/**
 * Register shortcode
 *
 * @package Avidly-Frappe-Charts
 */

function frappe_shortcode( $atts ) {
	$chart_id = intval( $atts['id'] );

	// Check that id is set and it belongs to a correct post type
	if ( ! ( $chart_id && 'frappe-chart' === get_post_type( $chart_id ) ) ) {
		return;
	}

	// Enqueue the scripts and styles
	wp_enqueue_script( 'frappe-js' );
	wp_enqueue_style( 'frappe-css' );
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
	return '<div class="avidly-frappe-chart" data-frappe-id="' . $chart_id . '"></div>';
}
