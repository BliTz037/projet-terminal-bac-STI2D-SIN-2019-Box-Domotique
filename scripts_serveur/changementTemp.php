<?php
	$monFichier=fopen("../donnees/donneesApache/temperature.txt","w");
	fputs($monFichier,$_GET['temp']);
	fclose($monFichier);
?>
