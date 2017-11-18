<?php
    use PHPMailer\PHPMailer\PHPMailer;
    require '../vendor/autoload.php';

    //Vérification que la requête est POST
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        //Récupération des champs et vérifs contre les injections
        $nomPrenom = test_donnees($_POST["nomPrenom"]);
        $email = test_donnees($_POST["mail"]);
        $message = test_donnees($_POST["message"]);

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

        //Entête
        $mail->setFrom('noreply@geogeoquidev.fr', 'GeogeoROBOT');
        $mail->addAddress('geoffreyd21@hotmail.fr', 'Geoffrey DAHURON');    
        $mail->addReplyTo('noreply@geogeoquidev.fr', 'GeogeoROBOT');
    
        //Contenu
        $mail->isHTML(true);                                  // Email au format HTML
        $mail->Subject = 'Mail envoyer depuis geogeoquidev.fr';
        $mail->Body    = 'Vous avez reçu un message.<br><br>Voici le détail :<br>- Nom et Prénom : ' .$nomPrenom.'<br>- E-mail : '  .$email.'<br>- Message : <br>' .$message;
        
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