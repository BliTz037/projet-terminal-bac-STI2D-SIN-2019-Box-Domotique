<?php
	$monFichier=fopen("../donnees/etatV.txt","r");
	$etatR=fgets($monFichier);
	fclose($monFichier);
	echo($etatR);
?>
