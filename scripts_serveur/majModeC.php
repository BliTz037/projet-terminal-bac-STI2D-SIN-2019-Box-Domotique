<?php
	$monFichier=fopen("../donnees/donneesApache/modeC.txt","r");
	$modeActuel=fgets($monFichier);
	fclose($monFichier);
	echo($modeActuel);
?>
