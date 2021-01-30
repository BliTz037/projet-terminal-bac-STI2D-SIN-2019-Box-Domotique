<?php
	$monFichier=fopen("../donnees/etatC.txt","r");
	$etatR=fgets($monFichier);
	fclose($monFichier);
	echo($etatR);
?>
