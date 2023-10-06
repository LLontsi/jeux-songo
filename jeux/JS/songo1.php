<?php
    $case = $_GET['val1'];
    $case1 = $_GET['val2'];
    $connect = new mysqli("localhost", "root", "", "songo");
    if($connect->connect_error){
        die('erreur:' .$connect->connect_error);
    }
    echo 'connexion reussi';

   $requette1 = $connect->query("SELECT * FROM joueur1  IDENTIFIANT=$case");
   /*for($i=1;$i<8;$i++){
      $modi = "UPDATE joueur1 SET IDENTIFIANT1 = $i valeur = $case" ;
    }  
    $conne=$connect->prepare($modi);
    $conne->execute();*/
    $requette2 = $connect->query("SELECT * FROM joueur2 WHERE id= $case1");
    foreach($requette1 as $response)
     $final;= $response['valeur1'];

    echo $final; 

?>