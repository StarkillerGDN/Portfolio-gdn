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
        //console.log(top)
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

//Modal hover pige
$('#pige').hover(
    function(){
        $('blockquote').css('visibility', 'visible');
        $('blockquote').css('display', 'block');
    },
    function(){
        $('blockquote').css('visibility', 'hidden');
        $('blockquote').css('display', 'none');
        
    }
);

//Submit du form
$('form').submit(
    function(event){
        //Données du formulaire
        var nomPrenom = $('input[name=nomPrenom]').val();
        var mail = $('input[name=mail]').val();
        var message = $('textarea[name=message]').val();
        //Vérification des champs
        if(nomPrenom != "" && mail != "" && message != ""){
            if(validerNomPrenom(nomPrenom) == true){
                if(validerMail(mail) == true){
                    //AJAX
                    $.ajax({
                        type : 'POST',
                        url : '././contact/contact.php',
                        data : {
                            nomPrenom : nomPrenom,
                            mail : mail,
                            message : message
                        }
                    })
                    .done(function(){
                        console.log("Envoi reussi à contact.php");
                        //Message SUCCES
                       $("#messageForm").html("<div id='succes' class='alert alert-success alert-dismissable col-md-12'><a href='#'class='close' data-dismiss='alert' aria-label='close' >&times;</a><i id='check' class='fa fa-check' aria-hidden='true'></i>Le mail a bien été envoyé</div>");
                    })
                    .fail(function(jqxhr, textStatus, error){
                        var erreur = textStatus + ", " + error;
                        console.log(erreur);
                    })
                    //Clear champs
                    $('input[name=nomPrenom]').val("");
                    $('input[name=mail]').val("");
                    $('textarea[name=message]').val("");
                }else{
                    //ERREUR => FORME MAIL incorrect
                    $('#messageForm').html("<div id='echec' class='alert alert-danger alert-dismissable col-md-12'><a href='#' class='close' data-dismiss='alert' aria-label='close' >&times;</a><i class='dangerIcone fa fa-exclamation-triangle' aria-hidden='true'></i>Le format du mail est incorrecte</div>");
                }
            }else{
                //ERREUR => NomPrenom = only lettre
                $('#messageForm').html("<div id='echec' class='alert alert-danger alert-dismissable col-md-12'><a href='#' class='close' data-dismiss='alert' aria-label='close' >&times;</a><i class='dangerIcone fa fa-exclamation-triangle' aria-hidden='true'></i>Le champs \"Nom et Prénom\" ne doit contenir que des lettres.</div>");
            }
        }else{
            //ERREUR => Tout les champs doivent être rempli
            $('#messageForm').html("<div id='echec' class='alert alert-danger alert-dismissable col-md-12'><a href='#' class='close' data-dismiss='alert' aria-label='close' >&times;</a><i class='dangerIcone fa fa-exclamation-triangle' aria-hidden='true'></i>Tout les champs doivent être rempli.</div>");
        }
        //Empêche le rechargement de la page
        event.preventDefault();
    }
    
    
);

//Fonctions validation des champs du form
function validerNomPrenom(champs){
    var regex = /\D[a-zA-Z]*$/;
    return regex.test(champs);
}

function validerMail(champs){
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(champs);
}


//Social icone animation
$('#facebook').hover(
    function(){
        //Intrduction du nouvel elem
        $(this).html(" <svg style='width:40px;height:40px' viewBox='0 0 24 24'><path fill='#000000' d='M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z' /></svg>");
    },
    //Quand on quitte le hover
    function(){
        $(this).html(" <svg style='width:40px;height:40px' viewBox='0 0 24 24'><path fill='#56739A' d='M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z' /></svg>")
    }
);

$('#linkedin').hover(
    function(){
        //Intrduction du nouvel elem
        $(this).html("<svg style='width:40px;height:40px' viewBox='0 0 24 24'><path fill='#000000' d='M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z' /></svg>");
    },
    //Quand on quitte le hover
    function(){
        $(this).html("<svg style='width:40px;height:40px' viewBox='0 0 24 24'><path fill='#56739A' d='M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z' /></svg>");
    }
);

$('#gmail').hover(
    function(){
        //Intrduction du nouvel elem
        $(this).html("<svg style='width:40px;height:40px' viewBox='0 0 24 24'><path fill='#000000' d='M20,18H18V9.25L12,13L6,9.25V18H4V6H5.2L12,10.25L18.8,6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z' /></svg>");
    },
    //Quand on quitte le hover
    function(){
        $(this).html("<svg style='width:40px;height:40px' viewBox='0 0 24 24'><path fill='#56739A' d='M20,18H18V9.25L12,13L6,9.25V18H4V6H5.2L12,10.25L18.8,6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z' /></svg>");
    }
);
//Smoothscroll
$(document).ready(
    function(){
        $('.scrollJs').click(
            function(){
                var page = $(this).attr('href');
                var speed = 500;
                $('html, body').animate( {scrollTop: $(page).offset().top }, speed );
                return false;
            }
        );

    }
);