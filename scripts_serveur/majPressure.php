<?php
	$monFichier=fopen("../donnees/pressure.txt","r");
	$luminosite=fgets($monFichier);
	fclose($monFichier);
	echo($luminosite);
?> 


