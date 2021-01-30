<?php
	$monFichier=fopen("../donnees/QA.txt","r");
	$modeActuel=fgets($monFichier);
	fclose($monFichier);
	echo($modeActuel);
?>
