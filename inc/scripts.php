<?php

/**
 * Register scripts and styles
 */

function frappe_register_scripts() {
	wp_register_script(
		'js-code-editor',
		plugin_dir_url( __DIR__ ) . 'dist/admin.js',
		[ 'jquery' ],
		'0.1',
		true
	);
	wp_register_script(
		'frappe-chart',
		plugin_dir_url( __DIR__ ) . 'dist/app.js',
		[],
		'0.2',
		true
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
		wp_enqueue_script( 'frappe-chart' );
	}
}
