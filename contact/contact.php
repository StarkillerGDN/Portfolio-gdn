<?php 
    $nomPrenom = "";
    $mail = "";
    $message = "";
    $erreurNomPrenom = "";
    $erreurMail = "";
    $erreurMessage = "";
    $erreurEnvoi ="";
    //Vérification que la requête est POST
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        //Vérification que les champs ne sont pas nuls
        if(empty($_POST["nomPrenom"])){
            $erreurNomPrenom = "Le champs \"Nom et Prénom\" est obligatoire";
        }else{
            $nomPrenom = test_donnees($_POST["nomPrenom"]);
            //Vérification de la syntax
            if(!preg_match("/^[a-zA-Z]*$/",$nomPrenom)){
                $erreurNomPrenom = "Seulement les lettres et les espaces sont autorisées";
            }
        }
        if(empty($_POST["mail"])){
            $erreurMail = "Le champs \"E-mail\" est obligatoire";
        }else{
            $mail = test_donnees($_POST["mail"]);
            //Vérifie le format du mail
            if(!filter_var($mail, FILTER_VALIDATE_EMAIL)){
                $erreurMail = "Format du mail invalide";
            }
        }
        if(empty($_POST["message"])){
            $erreurMessage = "Le champs \"Message\" est obligatoire";
        }else{
            $message = test_donnees($_POST["message"]);
            //Vérifie la syntax
            if(!preg_match("/^[a-zA-Z]*$/",$message)){
                $erreurMessage = "Seulement les lettres et les espaces sont autorisées";
            }
        }

        //Si les variables erreurs sont vides alors envoyer le mail
        if($erreurNomPrenom == "" && $erreurMail == "" && $erreurMessage == ""){
            //Variables pour le mail
            $to = 'geoffreyd21@hotmail.fr';
            $sujet = "Mail envoyer depuis geogeoquidev.fr";
            $corps_message = "Vous avez reçu un message.\r\n\r\nVoici le détail :\r\n- Nom et Prénom : $nomPrenom \r\n
            - E-mail : $mail\r\n- Message :\r\n$message";
            $header = 'From: noreply@geogeoquidev.fr' . "\r\n" .
            "Reply-To: $mail";
            //Envoi du mail
            if(mail($to, $sujet, $corps_message, $header)){
                //Succes
            }else{
                //Erreur en json
            }
        }else{
            //Renvoi des erreurs de champs en json
        }
    }

    //Fonction de vérification des champs contre les hacks
    function test_donnees($data){
        $data = trim($data);
        $data = stripcslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>