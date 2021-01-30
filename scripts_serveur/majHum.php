<?php
	$monFichier=fopen("../donnees/humidity.txt","r");
	$luminosite=fgets($monFichier);
	fclose($monFichier);
	echo($luminosite);
?> 


