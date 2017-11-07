<?php 
    $nomPrenom = "";
    $mail = "";
    $message = "";
    //Vérification que la requête est POST
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $nomPrenom = test_donnees($_POST["nomPrenom"]);
        $mail = test_donnees($_POST["mail"]);
        $message = test_donnees($_POST["message"]);
    }

    //Fonction de vérification des champs
    function test_donnees($data){
        $data = trim($data);
        $data = stripcslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>