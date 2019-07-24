<?php

/**
 * Plugin Name: Frappe Charts for WordPress
 * Plugin URI:
 * Author: Niku Hietanen
 * Version: 0.1
 * Author URI:
 *
 * @package Avidly-Frappe-Charts
*/

if ( ! defined( 'ABSPATH' ) ) {
	return;
}

/**
 * Includes
 */

require_once 'inc/metabox.php';
require_once 'inc/custom-post-type.php';
require_once 'inc/shortcode.php';
require_once 'inc/admin-scripts.php';

/**
 * Actions & filters
 */

add_action( 'init', 'frappe_register_post_type', 0 );
add_action( 'wp_enqueue_scripts', 'frappe_register_scripts', 10, 1 );
add_action( 'admin_enqueue_scripts', 'frappe_register_scripts', 10, 1 );
add_action( 'admin_enqueue_scripts', 'frappe_enqueue_admin_scripts', 80, 1 );
add_action( 'save_post', 'frappe_save_metabox' );
add_action( 'add_meta_boxes', 'frappe_add_metabox' );
add_shortcode( 'chart', 'frappe_shortcode' );

/**
 * Register scripts and styles
 */

function frappe_register_scripts() {
	wp_register_script(
		'js-code-editor',
		plugin_dir_url( __FILE__ ) . 'js/code-editor.js',
		[ 'jquery' ],
		'0.1',
		true
	);
	wp_register_script(
		'frappe-js',
		plugin_dir_url( __FILE__ ) . 'js/frappe-charts.min.iife.js',
		[],
		'0.1',
		true
	);
	wp_register_script(
		'frappe-chart',
		plugin_dir_url( __FILE__ ) . 'js/chart.js',
		[],
		'0.1',
		true
	);
	wp_register_style(
		'frappe-css',
		plugin_dir_url( __FILE__ ) . 'js/frappe-charts.min.css',
		[],
		'0.1'
	);
}
