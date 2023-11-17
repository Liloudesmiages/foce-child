<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    //chargt du theme parent puis du theme eenfant
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/css/style.css' );
 // Ajout des scripts
 wp_enqueue_script( 'my-script', get_stylesheet_directory_uri() . '/js/script.js', array(), null, true );
 wp_enqueue_script( 'my-navigation-script', get_stylesheet_directory_uri() . '/js/navigation.js', array(), null, true );}
