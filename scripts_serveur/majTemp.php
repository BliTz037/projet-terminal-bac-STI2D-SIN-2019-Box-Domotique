<?php
	$monFichier=fopen("../donnees/temperature.txt","r");
	$luminosite=fgets($monFichier);
	fclose($monFichier);
	echo($luminosite);
?> 


