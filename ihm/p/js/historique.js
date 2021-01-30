function delHistorique() {
    
    var txt = "Êtes vous sur de vouloir supprimer entièrement l'historique ? Cette action est iréversible, toute les données seront perdu !"
    if(confirm(txt)){
        document.location.href="historiquesdel.php"; 
    }
}

function addHistorique() {
    
    var txt = "Souhaittez vous ajouter un évènement dans l'historique ?"
    if(confirm(txt)){
        document.location.href="historiqueadd.php"; 
    }
}