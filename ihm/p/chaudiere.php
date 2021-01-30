<?php require '../templates/top.php'; ?>

<div id="loader"></div>
<main id="loading" style="display:none;">
    <h2>Chaudière</h2>
    <p class="etat">Etat chaudière : <span id="etatC">OFF</span></p>
    <img src="../img/picto-chauffage.png" class="imgChauffageMain">
    
    <p>Température Maison : <span id="tempHouse">XX</span> C°</p>
	<p>Mode actuel : <span id="modeHouseC">XX</span></p>
	<p>Température souhaitée : <span id="tempS">XX</span> C°</p>
        <p>Veuillez saisir la température souhaitée</p>
        
        <div id="form">
	   <p>
     <input type="range" name="temperatureInputName" id="temperatureInputId" value="16" min="9" max="32" oninput="temperatureOutputId.value = temperatureInputId.value">
           
        <output name="temperatureOutputName" id="temperatureOutputId">16</output>
           <input type="submit" value="Valider" onclick="changementTemp()"/>
	   </p>
        </div>
        
        <h2>Modes de chauffage</h2>
        <div class="mode">
            
            <div id="fire">
            <img src="../img/feu.png" id="feuimg">
                <p>Chauffage</p>
            </div>
			
			<div id="eco">
    
	<img src="../img/feuille.png" class="ecoimg">
                <p>Eco</p>
            </div>
			
			<div id="poten">
            <img src="../img/potentiomètre.png" id="potenimg">
                <p>Manuel Physique</p>
            </div>
           
        </div>	
</main>

<script type="text/javascript" src="js/chaudiere.js"> </script>
<?php require '../templates/bottom.php'; ?>