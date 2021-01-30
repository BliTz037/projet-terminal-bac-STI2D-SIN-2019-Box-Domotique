<?php require '../templates/top.php'; ?>

<div id="loader"></div>
<main id="loading" style="display:none;">
        <h2>Accueil</h2>
        <h3>Etat de l'air</h3>

        <img src="../img/maisonEtatDeco.png" id="imgHouseQA" />
        <p id="houseQA">Déconnectée</p>
        
    <div class="meteo">
        
        <p><img src="../img/temperature.png"><span id="tempHouse"> XX </span> C°</p>
        <p><img src="../img/humidity.png"><span id="humHouse"> XX</span> %</p>
        <p><img src=../img/pressure.png><span id="pressureHouse"> XX</span> hPA</p>
        </div>

        <div class="info">
            <div class="chaudiere">
                <h3>Chaudière</h3>
                <img src="../img/picto-chauffage.png" class="imgChauffage">
                <p>Etat de la chaudière : <span id="etatC">OFF</span></p>
                <p>Température demandé : <span id="tempS">XX</span> C°</p>
                <p>Mode Actuel : <span id="modeHouseC">XX</span></p>
            </div>

            <div class="ventilation">
                <h3>Ventilation</h3>
                <img src="../img/picto-ventilation.png" class="imgVentilation">
                <p>Etat de la Ventilation : <span id="etatV">OFF</span></p>
                <p>Mode Automatique : <span id="modeV">OFF</span></p>
            </div>

            <div class="lumiere">
                <h3>Lumière</h3>
                <img src="../img/picto-lumiere.png" class="imgLum">
                <p>Ampoule : <span id="etatL">Eteint</span></p>
                <p>Mode Automatique : <span id="modeL">OFF</span></p>
            </div>
        </div>
    </main>
<script type="text/javascript" src="js/accueil.js"> </script>
<?php require '../templates/bottom.php'; ?>
