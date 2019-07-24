<?php
/**
 * Register Custom Post Type
 *
 * @package Avidly-Frappe-Charts
 */

function frappe_register_post_type() {

	$labels = [
		'name'                  => _x( 'Charts', 'Post Type General Name', 'avidly-frappe' ),
		'singular_name'         => _x( 'Chart', 'Post Type Singular Name', 'avidly-frappe' ),
		'menu_name'             => __( 'Charts', 'avidly-frappe' ),
		'name_admin_bar'        => __( 'Chart', 'avidly-frappe' ),
		'archives'              => __( 'Chart Archives', 'avidly-frappe' ),
		'attributes'            => __( 'Chart Attributes', 'avidly-frappe' ),
		'parent_item_colon'     => __( 'Parent Item:', 'avidly-frappe' ),
		'all_items'             => __( 'All Charts', 'avidly-frappe' ),
		'add_new_item'          => __( 'Add New Chart', 'avidly-frappe' ),
		'add_new'               => __( 'Add New', 'avidly-frappe' ),
		'new_item'              => __( 'New Chart', 'avidly-frappe' ),
		'edit_item'             => __( 'Edit Chart', 'avidly-frappe' ),
		'update_item'           => __( 'Update Chart', 'avidly-frappe' ),
		'view_item'             => __( 'View Chart', 'avidly-frappe' ),
		'view_items'            => __( 'View Charts', 'avidly-frappe' ),
		'search_items'          => __( 'Search Charts', 'avidly-frappe' ),
		'not_found'             => __( 'Not found', 'avidly-frappe' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'avidly-frappe' ),
		'featured_image'        => __( 'Featured Image', 'avidly-frappe' ),
		'set_featured_image'    => __( 'Set featured image', 'avidly-frappe' ),
		'remove_featured_image' => __( 'Remove featured image', 'avidly-frappe' ),
		'use_featured_image'    => __( 'Use as featured image', 'avidly-frappe' ),
		'insert_into_item'      => __( 'Insert into chart', 'avidly-frappe' ),
		'uploaded_to_this_item' => __( 'Uploaded to this chart', 'avidly-frappe' ),
		'items_list'            => __( 'Charts list', 'avidly-frappe' ),
		'items_list_navigation' => __( 'Charts list navigation', 'avidly-frappe' ),
		'filter_items_list'     => __( 'Filter charts list', 'avidly-frappe' ),
	];
	$args = [
		'label'               => __( 'Chart', 'avidly-frappe' ),
		'labels'              => $labels,
		'supports'            => array( 'title' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'menu_position'       => 5,
		'menu_icon'           => 'dashicons-chart-bar',
		'show_in_admin_bar'   => false,
		'show_in_nav_menus'   => false,
		'can_export'          => true,
		'has_archive'         => false,
		'exclude_from_search' => true,
		'publicly_queryable'  => false,
		'rewrite'             => false,
		'capability_type'     => 'page',
		'show_in_rest'        => false,
	];
	register_post_type( 'frappe-chart', $args );

}
