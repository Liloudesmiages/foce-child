<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    //chargt du theme parent puis du theme eenfant
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/css/style.css' );
 
     // Ajout de Swiper CSS
   wp_enqueue_style( 'swiper-css', 'https://unpkg.com/swiper/swiper-bundle.min.css' );
  // Ajout de Swiper JS
  wp_enqueue_script( 'swiper-js', 'https://unpkg.com/swiper/swiper-bundle.min.js', array(), null, true );
  
//Ajout de scrollr
wp_enqueue_script('skrollr', 'https://cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.30/skrollr.min.js', array(), '0.6.30', true);

  // Ajout des scripts
 wp_enqueue_script( 'my-script', get_stylesheet_directory_uri() . '/js/script.js', array(), null, true );
 wp_enqueue_script( 'my-navigation-script', get_stylesheet_directory_uri() . '/js/navigation.js', array(), null, true );
 
}