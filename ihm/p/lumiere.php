<?php require '../templates/top.php'; ?>

<div id="loader"></div>
<main id="loading" style="display:none;">
    <h2>Lumière</h2>
    <img src="../img/picto-lumiere.png" class="imgLumMain">
    
    <p>Etat de la lumière : <span id="etatL">XX</span></p>
    
	<p>Mode automatique : <span id="modeL">XX</span></p>
        
        <h2>Modes d'éclairage</h2>
    <div class="interrupteur">
        <div class="on" id="onL">
        <p class="boutonInterrupteur">ON</p>
        </div>
        
        <div class="off" id="offL">
            <p class="boutonInterrupteur">OFF</p>
        </div>
    </div>
    
    <br/>
        <div class="mode">
            
			<div class="auto" id="autoL">
    
	<img src="../img/auto.png" id="autoimg">
            </div>
        </div>
    <script type="text/javascript" src="js/lumiere.js"> </script>
</main>

<?php require '../templates/bottom.php'; ?>