<?php
    $hote='localhost';
    $bd='domotique';
    $utilisateur='root';
    $mdp='raspberry';
    $gestionUTF8=array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\'');
    $maBD=new PDO('mysql:host='.$hote.';dbname='.$bd, $utilisateur, $mdp, $gestionUTF8);
?>