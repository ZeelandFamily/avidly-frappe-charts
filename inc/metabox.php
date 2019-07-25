<?php
/**
 * Set up metaboxes
 *
 * @package Avidly-Frappe-Charts
 */

/**
 * Set up chart metabox
 */
function frappe_add_metabox() {
	add_meta_box(
		'page-scripts',
		__( 'Chart', 'frappe-charts' ),
		'frappe_display_metabox',
		'frappe-chart',
		'advanced'
	);
}

/**
 * Metabox display callback.
 *
 * @param WP_Post $post Current post object.
 */
function frappe_display_metabox( $post ) {

	$chart_id = $post->ID;

	// Load example values on first time
	$chart_settings = get_post_meta( $chart_id, 'chart-settings', true ) ? get_post_meta( $chart_id, 'chart-settings', true ) : file_get_contents( plugin_dir_path( __DIR__ ) . 'example.json' );

	// Localize chart data and options for preview
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
		<textarea id="code_editor_page_json" rows="40" name="chart-settings" class="widefat textarea">
			<?php echo esc_textarea( wp_unslash( $chart_settings ) ); ?>
		</textarea>
		<?php wp_nonce_field( 'frappe_chart_' . $chart_id, 'frappe_nonce' ); ?>
	</fieldset>
	<style>
		.CodeMirror {
			height: 100%;
		}
	</style>
	<?php
}

/**
 * Save metabox content
 *
 * @param int $post_id Post ID
 */
function frappe_save_metabox( $post_id ) {
	if ( defined( 'DOING_AJAX' ) ) {
		return;
	}
	if ( isset( $_POST['chart-settings'] ) && ! wp_verify_nonce( $_POST['frappe_nonce'], 'frappe_chart_' . $post_id ) ) {
		die( 'Security check' );
	}
	if ( isset( $_POST['chart-settings'] ) && json_decode( wp_unslash( $_POST['chart-settings'] ) ) ) {
		$chart_settings = $_POST['chart-settings'];
		update_post_meta( $post_id, 'chart-settings', $chart_settings );
	}
}
