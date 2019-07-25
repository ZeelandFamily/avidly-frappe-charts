<?php

/**
 * Register scripts and styles
 */

function frappe_register_scripts() {
	wp_register_script(
		'js-code-editor',
		plugin_dir_url( __DIR__ ) . 'js/code-editor.js',
		[ 'jquery' ],
		'0.1',
		true
	);
	wp_register_script(
		'frappe-js',
		plugin_dir_url( __DIR__ ) . 'js/frappe-charts.min.iife.js',
		[],
		'0.1',
		true
	);
	wp_register_script(
		'frappe-chart',
		plugin_dir_url( __DIR__ ) . 'js/chart.js',
		[],
		'0.1',
		true
	);
	wp_register_style(
		'frappe-css',
		plugin_dir_url( __DIR__ ) . 'js/frappe-charts.min.css',
		[],
		'0.1'
	);
}

/**
 * Enqueue the Code Editor and JS
 *
 * @param string $hook
 */
function frappe_enqueue_admin_scripts( $hook ) {
	if ( ! get_the_ID() ) {
		return;
	}
	if ( 'frappe-chart' !== get_post_type( get_the_ID() ) ) {
		return;
	}

	if ( 'post.php' === $hook || 'post-new.php' === $hook ) {
		wp_enqueue_code_editor( [ 'type' => 'application/json' ] );
		wp_enqueue_script( 'js-code-editor' );
		wp_enqueue_script( 'frappe-js' );
		wp_enqueue_style( 'frappe-css' );
		wp_enqueue_script( 'frappe-chart' );
	}
}
