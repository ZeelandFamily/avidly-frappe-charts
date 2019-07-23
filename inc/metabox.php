<?php
/**
 * Set up metaboxes
 *
 * @package Avidly-Frappe-Charts
 */

if ( ! defined( 'ABSPATH' ) ) {
	return;
}

add_action( 'add_meta_boxes', 'frappe_add_metabox' );
/**
 * Register the metabox
 */
function frappe_add_metabox() {
	add_meta_box(
		'page-scripts',
		__( 'Chart', 'frappe-charts' ),
		'frappe_add_page_metabox_scripts_html',
		'frappe-chart',
		'advanced'
	);
}

/**
 * Meta box display callback.
 *
 * @param WP_Post $post Current post object.
 */
function frappe_add_page_metabox_scripts_html( $post ) {
	$chart_id       = $post->ID;
	$chart_settings = get_post_meta( $chart_id, 'chart-settings', true ) ? get_post_meta( $chart_id, 'chart-settings', true ) : file_get_contents( plugin_dir_path( __FILE__ ) . 'example.json' );
	// wp_nonce_field( 'frappe_chart_' . $post_id );
	wp_localize_script(
		'frappe-chart',
		'avidlyFrappeChart_' . $chart_id,
		[
			'data'  => get_post_meta( $chart_id, 'chart-settings' ),
			'title' => esc_html( get_the_title( $chart_id ) ),
		]
	);
	?>
	<h3>Shortcode</h3>
	<pre>[chart id='<?php echo esc_attr( $post->ID ); ?>']</pre>
	<h3>Preview</h3>
	<div class="avidly-frappe-chart" data-frappe-id="<?php echo esc_attr( $chart_id ); ?>"></div>
	<fieldset>
		<h3>Values</h3>
		<p class="description">Use JSON</p>
		<textarea id="code_editor_page_json" rows="5" name="chart-settings" class="widefat textarea"><?php echo wp_unslash( $chart_settings ); ?></textarea>
	</fieldset>
	<?php
}

/**
 * Save meta box content.
 *
 * @param int $post_id Post ID
 */
function page_scripts_save_meta_box( $post_id ) {
	if ( defined( 'DOING_AJAX' ) ) {
		return;
	}
	if ( ! wp_verify_nonce( $_REQUEST['_wpnonce'], 'frappe_chart_' . $post_id ) ) {
		// die( 'Security check' );
	}
	if ( isset( $_POST['chart-settings'] ) ) {
		$chart_settings = $_POST['chart-settings'];
		update_post_meta( $post_id, 'chart-settings', $chart_settings );
	}
}
add_action( 'save_post', 'page_scripts_save_meta_box' );
