<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="jeu.css">
    <title>songo</title>
    
</head>
<body >
    <header>
        <a href="a" class="logo"><span>I</span>nfluenceur</a>
        <ul class="navbar">
            <li><a href="acceuil.html">accueil</a></li>
            <li><a href="exemple1.html">menu</a></li>
            <li><a href="gastronomie.html">gastronomie</a></li>
            <li><a href="habillement.html">habillement</a></li>
        </ul>
    </header>
    
    <h1>BIENVENUE AU JEU DE SONGO PLUS</h1>

    
    <table class="trd"  > 
        <tr id="trd1"; >
            <td id="td1">
                <input  type="button" value ="5" name="c1" id="1" class= "c1"  onclick="jeu1(id)" > 
            </td>
            <td id="td1">
                <input type="button"  value ="5" name="c2" id = "2" class= "c1"  onclick="jeu1(id)" >
            </td>
            <td id="td1">
                <input type="button" value ="5" name="c3" id = "3" class= "c1"  onclick="jeu1(id)"  > 
            </td >
            <td id="td1">
                <input type = "button" value ="5" name="c4" id = "4" class= "c1"  onclick="jeu1(id)" > 
            </td >
            <td id="td1">
                <input type = "button" value ="5" name=c5 id = "5"class= "c1" onclick="jeu1(id)" >
            </td>
            <td class="td1">
                <input type = "button" value ="5" name="c6" id = "6" class= "c1"  onclick="jeu1(id)" >
            </td>
            <td class="td1"> 
                <input type = "button" value ="5" name="c7" id = "7" class= "c1" onclick="jeu1(id)" > 
            </td>

        </tr>
        <tr class=trd1>
            <td colspan="2" >
                <input type = "button" value ="0" id = "1"class= "a1"onclick="jeu2(id)" >  
            </td>
            <td colspan="3"></td>
            <td colspan="2">
                <input type = "button" value ="0" id = "2" class= "a1" onclick="jeu2(id)"> 
            </td>
        </tr>
        <tr id="trd2">
            <td>
                <input type = "button" value ="5" id = "1" class= "s1" onclick="jeu2(id)"> 
            </td>
            <td>
                <input type = "button" value ="5" id = "2" class= "s1" onclick="jeu2(id)">
            </td>
            <td>
                <input type = "button" value ="5" id = "3" class= "s1" onclick="jeu2(id)"> 
            </td>
            <td>
                <input type = "button" value ="5" id = "4" class= "s1" onclick="jeu2(id)"> 
            </td>
            <td>
                <input type = "button" value ="5" id = "5" class= "s1" onclick="jeu2(id)">
            </td>
            <td>
                <input type = "button" value ="5" id = "6" class= "s1" onclick="jeu2(id)"> 
            </td>
            <td>
                <input type = "button" value ="5" id = "7" class= "s1" onclick="jeu2(id)"> 
            </td>
        </tr>
    </table>
    <script src="jeu1.js"></script>
    

</body>
</html>


<?php
§file = 'jeu.txt' ;   
§f = fopen(§file,'w');

?>
