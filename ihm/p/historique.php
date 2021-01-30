<?php require '../templates/top.php'; ?>
<?php require '../donnees/connexionBD.php'?>

<main>
    <h2>Historique</h2>
    <img src="../img/historique.png" class="imgHistoriqueMain">
    <br>
        <br>
    
    <?php $requeteSQL='SELECT * FROM historique'; ?>
    <?php $donnees=$maBD->query($requeteSQL); ?>
    
    <table>
        <tr>
            <th>Date</th>
            <th>T°</th>
            <th>Humidité</th>
            <th>Pression</th>
            <th>Qualité D'air</th>
        </tr>
        <?php
        while($enregistrement=$donnees->fetch()){
            echo '<tr>';
            echo '<td>'.$enregistrement['date'].'</td>';
            echo '<td>'.$enregistrement['temperature'].'</td>';
            echo '<td>'.$enregistrement['humidite'].'</td>';
            echo '<td>'.$enregistrement['pression'].'</td>';
            
            if($enregistrement['air'] == "0"){
                echo "<td>DANGER</td>";
            }
            elseif($enregistrement['air'] == "1"){
                echo "<td>Mauvais</td>";
            }
            elseif($enregistrement['air'] == "2"){
                echo "<td>Moyen</td>";
            }
            elseif($enregistrement['air'] == "3"){
                echo "<td>Bon</td>";
            }
            
            //echo '<td>'.$enregistrement['air'].'</td>';
            echo '</tr>';

            
                        

        }
        ?>
    </table>
   <br>
    <div class="action">
    <div id="add" onclick="addHistorique()">
        <img src="../img/add.png" id="addImg"> <br> <br>
        <p>Ajouter</p>
    </div>
        
    <div id="remove" onclick="delHistorique()">
        <img src="../img/remove.png" id="removeImg">
        <p>Supprimer <br/> 
        l'historique</p>
    </div>    
    </div>
    
    
</main>
<script src="../p/js/historique.js"></script>

<?php require '../templates/bottom.php'; ?>