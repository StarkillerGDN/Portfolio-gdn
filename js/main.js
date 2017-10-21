// Script to Activate the Carousel
$(function(){
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    });
})

//Textillate (animation) pour le texte dans le nav
$(function(){
    $('.textillate').textillate({in: {effect: 'fadeIn'}});
    
})^

//Animation competences
jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},3000);
	});
});