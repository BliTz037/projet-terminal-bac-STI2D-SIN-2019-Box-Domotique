<?php require '../templates/top.php'; ?>

<main>
<h2>Paramètres</h2>
<img src="../img/parametres.png" class="imgParametresMain">
    <br><br>

    <h3>Thème<img src="../img/theme.png"></h3>
    
    <h3>Alarme<img src="../img/warning.png"></h3>
    <p>Activer ou désactiver l'alarme de la box domotique</p>
    <strong>ATTENTION ! En cas de qualité d'air au niveau danger, vous ne serez pas prévenu par l'alarme !</strong>
    <br>
    <p>
    <input type="radio" name="age" value="0" id="onAlarm" /> <label for="onAlarm">ON</label>
        
    <input type="radio" name="age" value="1" id="offAlarm" /> <label for="onAlarm">OFF</label>    
    </p>
    <h3>Historique<img src="../img/historique.png" class="imgHistoriqueMain"></h3>
    <p>Sélectionner ici le temps d'actuallisation de l'historique.</p>
    <input type="range" name="timeInputName" id="timeInputId" value="10" min="1" max="60" oninput="timeOutputId.value = timeInputId.value">
           
        <p><output name="timeOutputName" id="timeOutputId">10</output> minutes</p>
</main>

<?php require '../templates/bottom.php'; ?>