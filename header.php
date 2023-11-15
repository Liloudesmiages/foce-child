<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>
     <header id="masthead" class="site-header">
		<nav id="site-navigation" class="main-navigation">
        <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
            <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </button>
        <div id="menu-content" class="menu-content">
            <div class="menu-liens">
                <a href="#hero-header"><img class="logo-header2" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?>" alt="Logo Fleurs d'oranger & chats errants"/></a>
                <a href="#story">Histoire</a>
                <a href="#characters">Personnages</a>
                <a href="#place">Lieu</a>
                <a href="#studio">Studio Koukaki</a>
                <a href="#"class="studio-koukaki-fin">STUDIO KOUKAKI</a>
            </div>
           <div class="menu-elements">
             <div class="fleurs">    
                 <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/orchid.png'; ?>" alt="orchidée" class="fleur-violette"/>
                 <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/fleurblanche2.png' ; ?>" alt="fleur blanche" class="fleur-blanche"/>
                 <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/hibiscus.png' ; ?>" alt="hibiscus" class="hibiscus"/>
                 <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/fleursoranges.png' ; ?>" alt="fleurs oranges" class="fleurs-oranges"/>
                 <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/fleurrose.png' ; ?>" alt="fleur rose" class="fleur-rose"/>
                </div>
            <div class="chats">
                 <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/chatnoir.png' ; ?>" alt="chat noir" class="chat-noir"/>
                 <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/chatviolet.png' ; ?>" alt="chat-violet" class="chat-violet"/>
                 <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/chatroux.png' ; ?>" alt="chat-roux" class="chat-roux"/>
             </div>
           </div>
		</nav>
	</header>