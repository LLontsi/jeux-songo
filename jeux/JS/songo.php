<?php
    $connect= new mysqli("localhost","root","","songo");

    $id=$_GET['idj'];

    $response= $connect->query("SELECT * FROM infos_game WHERE id = $id");
    foreach ($response as $key ) {
        $valeur_a_envoyer= $key['valeur'];
    }
    echo $valeur_a_envoyer;
?>