<?php require '../templates/top.php'; ?>
<?php require '../donnees/connexionBD.php'?>

<?php
	$temp_txt=fopen("../../donnees/temperature.txt","r");
	$temp=fgets($temp_txt);
	fclose($temp_txt);

    $hum_txt=fopen("../../donnees/humidity.txt","r");
	$hum=fgets($hum_txt);
	fclose($hum_txt);
    
    $press_txt=fopen("../../donnees/pressure.txt","r");
	$press=fgets($press_txt);
	fclose($press_txt);

    $qa_txt=fopen("../../donnees/QA.txt","r");
	$qa=fgets($qa_txt);
	fclose($qa_txt);
    
    $date = date("Y-m-d H:i:s")
?> 


<?php $requeteSQL='INSERT INTO historique (date, temperature, humidite, pression, air) VALUES (NOW(), '.$temp.','.$hum.','.$press.','.$qa.')';
$donnees=$maBD->query($requeteSQL); ?>

<main>
    <h2>Historique</h2>
    
    <img src="../img/historique.png" class="imgHistoriqueMain">
    <br>
        <br>
    <h2>L'historique a ajouter un évènement !</h2>
    
    <table>
        <tr>
            <th>Date</th>
            <th>T°</th>
            <th>Humidité</th>
            <th>Pression</th>
            <th>Qualité D'air</th>
        </tr>
        
        
         <?php
            echo '<tr>';
            echo '<td>'.$date.'</td>';
            echo '<td>'.$temp.'</td>';
            echo '<td>'.$hum.'</td>';
            echo '<td>'.$press.'</td>';
        
            if($qa == 0){
                    echo "<td>DANGER</td>";
                }
            elseif($qa == 1){
                    echo "<td>Mauvais</td>";
                }
            elseif($qa == 2){
                    echo "<td>Moyen</td>";
                }
            elseif($qa == 3){
                    echo "<td>Bon</td>";
                }
            echo '</tr>';
        ?>
        
    
    </table>
    
    </main>

<?php require '../templates/bottom.php'; ?>
