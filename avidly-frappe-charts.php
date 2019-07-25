<?php

/**
 * Plugin Name: Frappe Charts for WordPress
 * Plugin Description: Add interactive and animated custom SVG charts to your content
 * Plugin URI: https://github.com/ZeelandFamily/avidly-frappe-charts
 * Author: Avidly / Niku Hietanen
 * Version: 0.2
 * Author URI: https://www.avidlyagency.com/
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
require_once 'inc/scripts.php';

/**
 * Load the plugin
 */

function frappe_load_plugin() {
	// Register post type
	add_action( 'init', 'frappe_register_post_type', 0 );

	// Register and enqueue scripts
	add_action( 'wp_enqueue_scripts', 'frappe_register_scripts', 10, 1 );
	add_action( 'admin_enqueue_scripts', 'frappe_register_scripts', 10, 1 );
	add_action( 'admin_enqueue_scripts', 'frappe_enqueue_admin_scripts', 80, 1 );

	// Register meta box and add save hook
	add_action( 'add_meta_boxes', 'frappe_add_metabox' );
	add_action( 'save_post', 'frappe_save_metabox' );

	// Register shortcode
	add_shortcode( 'chart', 'frappe_shortcode' );
}

add_action( 'plugins_loaded', 'frappe_load_plugin' );
