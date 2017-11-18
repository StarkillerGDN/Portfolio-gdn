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


    require '/vendor/autoload.php';

    $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
    try {
        //Server settings
        $mail->SMTPDebug = 2;                                 // Enable verbose debug output
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'smtp.sfr.fr';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'geoffrey211295@gmail.com';                 // SMTP username
        $mail->Password = 'Masseffect3';                           // SMTP password
        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                    // TCP port to connect to
    
        //Recipients
        $mail->setFrom('geoffrey211295@gmail.com', 'GeogeoROBOT');
        $mail->addAddress('geoffreyd21@hotmail.fr', 'Joe User');     // Add a recipient
        $mail->addReplyTo('info@example.com', 'Information');
    
    
        //Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Here is the subject';
        $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    
        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    }
?>