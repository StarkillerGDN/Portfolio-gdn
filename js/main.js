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
$(document).ready(function(e) {
    var index=0;
    $(document).scroll(function(){
        var top = $('#competences').height()-$(window).scrollTop();
        console.log(top)
        if(top<-300){
            if(index==0){
                loadSkillbar();
            }
            index++;
        }
    })
});

function loadSkillbar(){
    $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({
            width:$(this).attr('data-percent')
        },3000);
    });
}