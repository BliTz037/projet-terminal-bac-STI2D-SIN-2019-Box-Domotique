<?php require '../templates/top.php'; ?>

<div id="loader"></div>
<main id="loading" style="display:none;">
    <h2>Ventilation</h2>
    <p class="etat">Etat ventilation : <span id="etatV">XX</span></p>
    <img src="../img/picto-ventilation.png" class="imgVentilationMain">
    
    <p>Température Maison : <span id="tempHouse">XX</span> C°</p>
    <p>Taux d'Humidité : <span id="humHouse">XX</span> %</p>
    
	<p>Mode automatique : <span id="modeV">XX</span></p> 
        <h2>Modes de ventilation</h2>
    <div class="interrupteur">
        <div class="on" id="onV">
        <p class="boutonInterrupteur">ON</p>
        </div>
        
        <div class="off" id="offV">
            <p class="boutonInterrupteur">OFF</p>
        </div>
    </div>
    
    <br/>
        <div class="mode">
            
			<div class="auto" id="autoV">
    
	<img src="../img/auto.png" id="autoimg">
            </div>
        </div>
    <script type="text/javascript" src="js/ventilation.js"> </script>
</main>

<?php require '../templates/bottom.php'; ?>