<?php
    $connecter= new mysqli("localhost", "root", "", "songo");

    $id= $_GET['id'];

    $valeur = $_GET['valeur'];

    $req = $connecter->query("UPDATE infos_game SET valeur=$valeur WHERE id=$id");
?>