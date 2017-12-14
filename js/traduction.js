$(document).ready(
    function(){
        $('#en').click(
            function(){
                var script = document.createElement('script');
                script.src = 'js/main.js';
                //Modification bouton + image
                
                
                //Nav
                $("a:contains('Présentation')").text("Presentation");
                $("a:contains('Mes compétences')").text("My skills");
                $("a:contains('Mes projets')").text("My projects");
                $(".dropdown-toggle").html("Languages<span class='caret'></span>");
                $("li a:contains('Français')").text("French");
                $("li a:contains('Anglais')").text("English");
                
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
                $("h3:contains('Formulaire de visite')").text("Visit form");
                $("p:contains('Formulaire de visite')").text("Visit form for the GEEPS laboratory of Orsay");
                $("p:contains('Jeu android fait avec Android Studio')").text("Android game made with Android Studio");
                $("p:contains('Jeu android réalisé avec AppInventor')").text("Android game made with AppInventor");
                $("h3:contains('CDF')").text("French robotics cup");
                $("p:contains('2 robots capables')").text("2 robots which are capable to realize various objectives"); 
                $("h3:contains('Commande robot')").text("Control for a robot");     
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
                $("#pokebattle .modal-body p").html("A game based on pokemon, with a similar style to the first versions, released on Gameboy (round by round).<br>The player can custom his avatar and choose his pokemon for the fight. To play, it must 2 players connected in bluetooth. The 2 players have a health bar and a \"mana\" bar. This bar allows to use the 3 skills.");
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

                //Permet de reload le script principal
                document.body.appendChild(script);

            }
        )
        $('#fr').click(
            function(){
                var script = document.createElement('script');
                script.src = 'js/main.js';

                //Modification bouton + image
                
                
                //Nav
                $("a:contains('Presentation')").text("Présentation");
                $("a:contains('My skills')").text("Mes compétences");
                $("a:contains('My projects')").text("Mes projets");
                $(".dropdown-toggle").html("Langues<span class='caret'></span>");
                $("li a:contains('French')").text("Français");
                $("li a:contains('English')").text("Anglais");
                
                //Présentation
                $("#presentation h1").html("<span class='fa fa-user-circle-o'></span>Présentation");
                $("#quiSuisJe h2").text("Qui suis je ?");
                $("#quiSuisJe p:nth-child(2)").html("Mon nom est <b>Geoffrey DAHURON</b>, je suis actuellement jeune diplômé d'une Licence Pro <a href='http://www.iut-orsay.u-psud.fr/fr/formations/licences_professionnelles/info_lp_prism.html' target='_blank' id='prism'>PRISM</a>, effectué à l'IUT d'Orsay. Je fais du développement web depuis maintenant un an et ça me passionne de plus en plus !");
                $("#quiSuisJe p:nth-child(3)").text("Je suis également un grand fan de Star Wars, de jeux vidéos et de hardware.");
                $("#quiSuisJe p:nth-child(4)").text("Je suis motivé, rigoureux, persévérant et désireux d'apprendre.");
                $("#dlCV a").text("Télécharger CV");
        
                //Mes compétences
                $("#competences h1").html("<span class='fa fa-check-circle-o'></span>Mes Compétence");
                $("#autres h2").text("Autres");
                $("#logiciels h2").text("Logiciels");
        
                //Mes projets
                $("#projets h1").html("<span class='fa fa-terminal'></span>Mes Projets");
                $("p:contains('show of M6')").text("Projet pour un intermittent du spectacle de M6");
                $("h3:contains('Visit form GEEPS')").text("Formulaire de visite");
                $("p:contains('Visit form')").text("Formulaire de visite pour le laboratoire du GEEPS, à Orsay");
                $("p:contains('Android game made with Android Studio')").text("Jeu android fait avec Android Studio");
                $("p:contains('Android game made with AppInventor')").text("Jeu android réalisé avec AppInventor");
                $("h3:contains('French robotics cup')").text("CDF de Robotique");
                $("p:contains('2 robots which are capable')").text("2 robots capables de réaliser divers objectifs"); 
                $("h3:contains('Control for a robot')").text("Commande robot");     
                $("p:contains('A control application')").text("Application de contôle d'un robot ramasseur de balles");
                //Modals (commun)
                $(".modal-body h3:contains('Functional description')").text("Description fonctionnelle");
                $(".infosModal h3:contains('Context')").html("Cadre : <i class='fa fa-university' aria-hidden='true'></i>");
                $(".modal-footer button").text("Fermer");
                //Book-me
                $("#bookme .modal-body p").html("Application demandée par un intermittent du spectacle.<br>Elle doit aider à la fabrication de plannings de post-productions audiovisuelles, les créer, les remplir,les visualiser et les modifier. Pour cela, elle doit permettre la gestion de <span id='pige' style='font-weight: bold;'>piges</span> et des intermittents.");
                $("#bookme .modal-body blockquote").text("Pige : Terme hérité du journalisme et définissant une mission dans une production audiovisuelle.");
                $("#bookme .infosModal h3:contains('Date')").text("Date : mars à juin 2017");
                $("#bookme .infosModal h3:nth-child(3)").text("Langage : ");
                //Formulaire geeps
                $("#geeps .modal-header h2").text("Formulaire de visite GEEPS");
                $("#geeps .modal-body p").text("Formulaire créé pour le laboratoire du GEEPS, à Orsay. Il permet à une personne de prévenir, qu'il va faire une visite. Le formulaire une fois soumis, envoi un mail à l'administrateur avec les coordonnées de la personne en CSV et en PDF, et envoi un mail de confirmation au visiteur.");
                $("#geeps .infosModal h3:contains('Date')").text("Date : avril à mai 2017");
                $("#geeps .infosModal h3:nth-child(3)").text("Langages / Framework :");
                //Challenge-me
                $("#challengeme .modal-body p").html("Cette application est un quizz pour les smartphones Android sur différents thèmes comme la musique, les monuments ou encore les films.<br> En fonction du niveau de difficulté, la façon de jouer au jeu est différente. Pour le niveau facile, 4 réponses sont possibles. Pour le niveau moyen, un clavier personnalisé et des cases apparaissent. Enfin pour le niveau difficile, le joueur utilise son clavier pour répondre (aucune indication pour cette difficulté).");
                $("#challengeme .infosModal h3:contains('Date')").text("Date : janvier à février 2017");
                $("#challengeme .infosModal h3:nth-child(3)").text("Langage :");
                //Pokebattle
                $("#pokebattle .modal-body p").html("Mini jeu sur le thème de pokemon, avec un style similaire aux premières versions sorties sur Gameboy (tour par tour).<br>Le joueur peut personnaliser son avatar et choisir son pokemon pour le combat. Pour faire une partie, il faut 2 joueurs connectés en bluetooh. Les 2 joueurs ont une barre de vie et une barre de \"mana\", cette dernière permettant d'utiliser des compétences qui sont aux nombre de 3.");
                $("#pokebattle .infosModal h3:contains('Date')").text("Date : novembre 2016 à janvier 2017");
                $("#pokebattle .infosModal h3:nth-child(3)").text("Langage :");
                //CDF robot
                $("#cdfrobotique .modal-body p").html("Le thème de cette coupe de France de robotique était la plage. Nous avons créé, en partenariat avec l'école des Mines de Paris et le lycée Léonard de Vinci de Melun, 2 robots devant réaliser divers objectifs comme ramasser des coquillages, construire un chateau de sable ou encore pêcher des poissons. Le BTS SNIR devait s'occuper de la programmation des cartes controlleurs ainsi que des différents capteurs des robots. L'école des Mines s'occupait de la logistique et le BTS Mécanique de la modélisation et usinage des différentes pièces pour les robots.<br>Nous avons terminé 17ème sur plus d'une centaine de participants.");
                $("#cdfrobotique .infosModal h3:contains('Date')").text("Date : décembre 2015 à mai 2016");
                $("#cdfrobotique .infosModal h3:nth-child(3)").text("Langage :");
                //Commande robot
                $("#commanderobot .modal-body p").html("Cette application permet d'activer le cycle de ramassage d'un robot ramasseur de balles que nous avons créé avec mon groupe de projet. Elle possède plusieurs fonctionnalités comme la possibilité d'arrêter le robot en urgence et se connecter au robot en bluetooth.");
                $("#commanderobot .infosModal h3:contains('Date')").text("Date : novembre 2013 à mai 2014");
                $("#commanderobot .infosModal h3:nth-child(3)").text("Langage :");
        
                //Contactez moi
                $("#contact h1").html("<span class='fa fa-envelope-o'></span>Contactez-moi");
                $("#nomPrenom").attr("placeholder", "Nom et Prenom");
                $("#submit").text("Envoyer");
                //Footer
                $("#textFooter").html("<p>Copyright &copy; 2017 Geoffrey DAHURON. Conçu par Geoffrey DAHURON</p>");
                
                document.body.appendChild(script);
            }
        )
    }    
);
