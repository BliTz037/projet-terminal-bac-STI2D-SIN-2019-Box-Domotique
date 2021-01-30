<?php require '../templates/top.php'; ?>
<?php require '../donnees/connexionBD.php'?>

<main>
    <h2>Historique</h2>
    <?php $requeteSQL='TRUNCATE TABLE `historique`'; ?>
     <?php $donnees=$maBD->query($requeteSQL); ?>
    <img src="../img/historique.png" class="imgHistoriqueMain">
    <br>
        <br>
    <h2>L'historique à été supprimé !</h2>
    
    
    
    </main>

<?php require '../templates/bottom.php'; ?>

