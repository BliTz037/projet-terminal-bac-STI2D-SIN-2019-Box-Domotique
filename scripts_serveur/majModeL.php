<?php
	$monFichier=fopen("../donnees/modeL.txt","r");
	$modeActuel=fgets($monFichier);
	fclose($monFichier);
	echo($modeActuel);
?>
