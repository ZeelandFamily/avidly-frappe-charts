<?php
/**
 * Register shortcode
 */

if ( ! defined( 'ABSPATH' ) ) {
	return;
}

function frappe_shortcode( $atts ) {
	// Attributes
	$atts = shortcode_atts(
		array(
			'id' => 0,
		),
		$atts
	);

	// Check that id is set and it's the correct post type
	if ( ! intval( $atts['id'] ) ) {
		return;
	}
	$chart_id = intval( $atts['id'] );
	if ( 'frappe-chart' !== get_post_type( $chart_id ) ) {
		return;
	}
	// Enqueue the scripts and styles
	wp_enqueue_script( 'frappe-js' );
	wp_enqueue_style( 'frappe-css' );
	wp_enqueue_script( 'frappe-chart' );
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
add_shortcode( 'chart', 'frappe_shortcode' );
