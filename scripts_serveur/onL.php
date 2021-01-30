<?php
	$etatL=fopen("../donnees/donneesApache/etatL.txt","w");
	fputs($etatL,1);
	fclose($etatV);

    $autoL=fopen("../donnees/donneesApache/autoL.txt","w");
	fputs($autoL,0);
	fclose($autoL);
?>