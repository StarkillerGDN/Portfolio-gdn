$(document).ready(
    function(){
        $('#en').click(
            function(){
                //Modification bouton + image
                
                
                //Nav
                $("a:contains('Présentation')").text("Presentation");
                $("a:contains('Mes compétences')").text("My skills");
                $("a:contains('Mes projets')").text("My projects");
                $("a:contains('Contact')").text("Contact");
                $(".dropdown:first-child").html("Languages<span class='caret'></span>");
                
                //Présentation
                $("#presentation h1").html("<span class='fa fa-user-circle-o'></span>Presentation");
                $("#quiSuisJe h2").text("Who am I ?");
                $("#quiSuisJe p:nth-child(2)").html("My name is <b>Geoffrey DAHURON</b>, I graduated of a Degree in Web and Mobile programming <a href='http://www.iut-orsay.u-psud.fr/fr/formations/licences_professionnelles/info_lp_prism.html' target='_blank' id='prism'>(PRISM)</a>, done in IUT of Orsay. I'm doing web development for 1 year and it fascinates me more and more !");
                $("#quiSuisJe p:nth-child(3)").text("I'm also a great fan of Star Wars, video games and hardware.");
                $("#quiSuisJe p:nth-child(4)").text("I'm motivated, rigourous, perseverent and I want to learn more about web programming.");
                $("#dlCV a").text("Download Resume");

                //Mes compétences
                $("#competences h1").html("<span class='fa fa-check-circle-o'></span>My Skills");
                $("#autres h2").text("Others");
                $("#logiciels h2").text("Softwares");

                //Mes projets
                $("#projets h1").html("<span class='fa fa-terminal'></span>My Projects");
                $("p:contains('spectacle de M6')").text("A project for an intermittent show of M6 ");
                $("h3:contains('Formulaire de visite')").text("Visit form GEEPS");
                $("p:contains('Formulaire de visite')").text("Visit form for the GEEPS laboratory of Orsay");
                $("p:contains('Jeu android fait avec Android Studio')").text("Android game made with Android Studio");
                $("p:contains('Jeu android réalisé avec AppInventor')").text("Android game made with AppInventor");
                $("h3:contains('CDF')").text("French robotics cup");
                $("p:contains('2 robots capables')").text("2 robots which are capable to realize various objectives"); 
                $("h3:contains('Commande robot')").text("Control for a mindstorm robot");     
                $("p:contains('Application de contôle')").text("A control application for a balls picker robot");
                //Modals (commun)
                $(".modal-body h3:contains('Description fonctionnelle')").text("Functional description");
                $(".infosModal h3:contains('Cadre')").html("Context : <i class='fa fa-university' aria-hidden='true'></i>");
                $(".modal-footer button").text("Close");
                //Book-me
                $("#bookme .modal-body p").html("Application requested by an intermittent show.<br>It must help to build audio-visual post-productions plannings, create, fill, display  and modify them. To do that, it must allow the management of <span id='pige' style='font-weight: bold;'>freelance</span> and intermittent.");
                $("#bookme .modal-body blockquote").text("Freelance : A term inherited from journalism and defining a mission in an audiovisual production.");
                $("#bookme .infosModal h3:contains('Date')").text("Date : March to June 2017");
                $("#bookme .infosModal h3:nth-child(3)").text("Language :");
                //Formulaire geeps
                $("#geeps .modal-header h2").text("Visit form GEEPS");
                $("#geeps .modal-body p").text("A form created for the GEEPS laboratory of Orsay.It allows a person to prevent, that he will make a visit. After the submit, there are a mail which is send to the administrator with the contact informations in CSV and PDF, and send a confirmation mail to the visitor.");
                $("#geeps .infosModal h3:contains('Date')").text("Date : April to May 2017");
                $("#geeps .infosModal h3:nth-child(3)").text("Languages / Framework :");
                //Challenge-me
                $("#challengeme .modal-body p").html("This application is a quizz for Android smartphones on differents themes like music, the monuments or also the films.<br>Depending on the level of difficulty, the way to play the game is different. For the easy level, 4 awnsers are possible. For the mid level, a custom keyboard and boxes appear. Finally for the hardest level, the player uses his keyboard to awnser(no help for this level).");
                $("#challengeme .infosModal h3:contains('Date')").text("Date : January to February 2017");
                $("#challengeme .infosModal h3:nth-child(3)").text("Language :");
                //Pokebattle
                $("#pokebattle .modal-body p").html("A game based on pokemon, with a similar style to the first versions, released on Gameboy (round by round).<br>The player can custom his avatar and choose his pokemon for the fight. To play, it must 2 players connected in bluetooth. The 2 players have a health bar and a 'mana' bar. This bar allows to use the 3 skills.");
                $("#pokebattle .infosModal h3:contains('Date')").text("Date : November 2016 to January 2017");
                $("#pokebattle .infosModal h3:nth-child(3)").text("Language :");
                //CDF robot
                $("#cdfrobotique .modal-body p").html("The theme of this French robotics cup was the beach. We created, with the Mines high school of Paris and the Léonard de Vinci high school of Melun, 2 robots which must accomplish various objectives like collecting shells, building a sand castle or catch fish. The BTS SNIR had to deal with the programming of the controllers boards and the different sensors of the robots. The Mines high school was in charge of logistics and the BTS Mechanics of the modeling and machining of different parts for robots.<br>We finished 17th on more than one hundred participants.");
                $("#cdfrobotique .infosModal h3:contains('Date')").text("Date : December 2015 to May 2016");
                $("#cdfrobotique .infosModal h3:nth-child(3)").text("Language :");
                //Commande robot
                $("#commanderobot .modal-body p").html("This application activates the robot pickup cycle, that we created with my project group. It has many features like stop the robot and connect the robot in bluetooth.");
                $("#commanderobot .infosModal h3:contains('Date')").text("Date : November 2013 to May 2014");
                $("#commanderobot .infosModal h3:nth-child(3)").text("Language :");

                //Contactez moi
                $("#contact h1").html("<span class='fa fa-envelope-o'></span>Contact me");
                $("#nomPrenom").attr("placeholder", "Name and Firstname");
                $("#submit").text("Submit");
                //Footer
                $("#textFooter").html("<p>Copyright &copy; 2017 Geoffrey DAHURON. Created by Geoffrey DAHURON</p>");

            }
        );
    },
);
