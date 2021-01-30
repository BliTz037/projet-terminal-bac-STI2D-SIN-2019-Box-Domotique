<?php
	$etatV=fopen("../donnees/donneesApache/etatV.txt","w");
	fputs($etatV,1);
	fclose($etatV);

    $autoV=fopen("../donnees/donneesApache/autoV.txt","w");
	fputs($autoV,0);
	fclose($autoV);
?>