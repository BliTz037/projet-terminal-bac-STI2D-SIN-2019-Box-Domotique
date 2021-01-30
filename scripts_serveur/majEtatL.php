<?php
	$monFichier=fopen("../donnees/etatL.txt","r");
	$etatR=fgets($monFichier);
	fclose($monFichier);
	echo($etatR);
?>
