<?php
    //Vérification que la requête est POST
   /* if($_SERVER["REQUEST_METHOD"] == "POST"){
        //Récupération des champs et vérifs contre les injections
        $nomPrenom = test_donnees($_POST["nomPrenom"]);
        $mail = test_donnees($_POST["mail"]);
        $message = test_donnees($_POST["message"]);
        //Création du mail
        $to = 'geoffrey211295@gmail.com';
        $sujet = "Mail envoyer depuis geogeoquidev.fr";
        $corps_message = "Vous avez reçu un message.\r\n\r\nVoici le détail :\r\n- Nom et Prénom : $nomPrenom\r\n- E-mail : $mail\r\n- Message :\r\n$message";
        $header = "From : \"GeogeoLeRobot\"<noreply@geogeoquidev.fr>\r\n";
        $header.= "Reply-to : \"GeogeoLeRobot\"<noreply@geogeoquidev.fr>\r\n";
        //Envoi du mail
        mail($to, $sujet, $corps_message, $header);
    }
    //Fonction de vérification des champs contre les hacks
    function test_donnees($data){
        $data = trim($data);
        $data = stripcslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    } */

    use PHPMailer\PHPMailer\PHPMailer;
    require '../vendor/autoload.php';

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $mail = new PHPMailer(false);                             // TRUE = activer les exceptions
        //Server settings
        $mail->SMTPDebug = 0;                                 //Desactiver le Debug pour la prod
        $mail->isSMTP();                                      //Force PHP Mailer à utiliser SMTP
        $mail->Host = 'smtp.gmail.com';                       //Hôte SMTP
        $mail->SMTPAuth = true;                               // Authentification SMT
        $mail->Username = 'geoffrey211295@gmail.com';                 // Username
        $mail->Password = '35JCXtUEPeUE';                           // Password
        $mail->SMTPSecure = 'tls';                            // TLS encrypte
        $mail->Port = 587;                                    // Port TLS
        
        //Récupération des champs et vérifs contre les injections
        $nomPrenom = test_donnees($_POST["nomPrenom"]);
        $mail = test_donnees($_POST["mail"]);
        $message = test_donnees($_POST["message"]);

        //Entête
        $mail->setFrom('noreply@geogeoquidev.fr', 'GeogeoROBOT');
        $mail->addAddress('geoffrey211295@gmail.com', 'Geoffrey DAHURON');    
        $mail->addReplyTo('noreply@geogeoquidev.fr', 'GeogeoROBOT');
    
    
        //Contenu
        $mail->isHTML(true);                                  // Email au format HTML
        $mail->Subject = 'Mail envoyer depuis geogeoquidev.fr';
        $mail->Body    = 'Vous avez reçu un message.<br><br>Voici le détail :<br>- Nom et Prénom : $nomPrenom <br>- E-mail : $mail <br>- Message : <br>$message';
        $mail->AltBody = 'Vous avez reçu un message.\r\n\r\nVoici le détail :\r\n- Nom et Prénom : $nomPrenom\r\n- E-mail : $mail\r\n- Message :\r\n$message';
        
        //Envoi du mail
        $mail->send();
    }

     //Fonction de vérification des champs contre les hacks
     function test_donnees($data){
        $data = trim($data);
        $data = stripcslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>