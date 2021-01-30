<?php
	$monFichier=fopen("../donnees/temperature.txt","r");
	$tempS=fgets($monFichier);
	fclose($monFichier);
	echo($tempS);
?>

