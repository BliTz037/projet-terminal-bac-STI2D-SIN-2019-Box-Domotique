document.getElementById("onL").addEventListener("click",clickOnL);
document.getElementById("offL").addEventListener("click",clickOffL);
document.getElementById("autoL").addEventListener("click",clickAutoL);

setInterval(function(){majEtatL();},2000);
setInterval(function(){majModeL();},2000);

function majEtatL()    
{
	var requeteHTTP = new XMLHttpRequest();
	requeteHTTP.onreadystatechange = function()
	{
		if (requeteHTTP.readyState == 4 && requeteHTTP.status == 200)
		{
			document.getElementById("etatL").innerHTML=requeteHTTP.responseText;
            console.log(requeteHTTP.responseText);
            if (requeteHTTP.responseText == 0){
                document.getElementById("etatL").innerHTML="Eteinte";
            }
            else if(requeteHTTP.responseText == 1){
                document.getElementById("etatL").innerHTML="Allumé";
            }
            }
		}

	requeteHTTP.open("GET", "../../scripts_serveur/majEtatL.php", true);
	requeteHTTP.send();
    }

function majModeL()    
{
	var requeteHTTP = new XMLHttpRequest();
	requeteHTTP.onreadystatechange = function()
	{
		if (requeteHTTP.readyState == 4 && requeteHTTP.status == 200)
		{
			document.getElementById("modeL").innerHTML=requeteHTTP.responseText;
            console.log(requeteHTTP.responseText);
            if (requeteHTTP.responseText == 0){
                document.getElementById("modeL").innerHTML="Désactivé";
            }
            else if(requeteHTTP.responseText == 1){
                document.getElementById("modeL").innerHTML="Activé";
            }
            }
		}

	requeteHTTP.open("GET", "../../scripts_serveur/majModeL.php", true);
	requeteHTTP.send();
    }

function clickOnL()
{   
    var requeteHTTP = new XMLHttpRequest();
    requeteHTTP.open("GET", "../../scripts_serveur/onL.php", true);
    requeteHTTP.send();
    alert("La lumière a été allumé ! \nMode automatique désactivé !");
}

function clickOffL()
{   
    var requeteHTTP = new XMLHttpRequest();
    requeteHTTP.open("GET", "../../scripts_serveur/offL.php", true);
    requeteHTTP.send();
    alert("La lumière a été éteinte \nMode automatique désactivé !");
} 

function clickAutoL()
{   
    var requeteHTTP = new XMLHttpRequest();
    requeteHTTP.open("GET", "../../scripts_serveur/autoL.php", true);
    requeteHTTP.send();
    alert("La lumière est passé en mode automatique");
}