<?php
	$monFichier=fopen("../donnees/modeV.txt","r");
	$modeActuel=fgets($monFichier);
	fclose($monFichier);
	echo($modeActuel);
?>
