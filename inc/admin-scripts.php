<?php
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
