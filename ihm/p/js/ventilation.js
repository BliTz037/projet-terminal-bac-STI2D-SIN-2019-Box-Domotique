document.getElementById("onV").addEventListener("click",clickOnV);
document.getElementById("offV").addEventListener("click",clickOffV);
document.getElementById("autoV").addEventListener("click",clickAutoV);

setInterval(function(){majTemp();},2000);
setInterval(function(){majHum();},2000);
setInterval(function(){majEtatV();},2000);
setInterval(function(){majModeV();},2000);

function majTemp()
{
	var requeteHTTP = new XMLHttpRequest();
	requeteHTTP.onreadystatechange = function()
	{
		if (requeteHTTP.readyState == 4 && requeteHTTP.status == 200)
		{
			document.getElementById("tempHouse").innerHTML=requeteHTTP.responseText;
		}
	}
	requeteHTTP.open("GET", "../../scripts_serveur/majTemp.php", true);
	requeteHTTP.send();
}

function majHum()
{
	var requeteHTTP = new XMLHttpRequest();
	requeteHTTP.onreadystatechange = function()
	{
		if (requeteHTTP.readyState == 4 && requeteHTTP.status == 200)
		{
			document.getElementById("humHouse").innerHTML=requeteHTTP.responseText;
		}
	}
	requeteHTTP.open("GET", "../../scripts_serveur/majHum.php", true);
	requeteHTTP.send();
}

function majEtatV()
{
	var requeteHTTP = new XMLHttpRequest();
	requeteHTTP.onreadystatechange = function()
	{
		if (requeteHTTP.readyState == 4 && requeteHTTP.status == 200)
		{
			document.getElementById("etatV").innerHTML=requeteHTTP.responseText;
            console.log(requeteHTTP.responseText);
            if (requeteHTTP.responseText == 0){
                document.getElementById("etatV").innerHTML="OFF";
            }
            else if(requeteHTTP.responseText == 1){
                document.getElementById("etatV").innerHTML="ON";
            }
            }
		}

	requeteHTTP.open("GET", "../../scripts_serveur/majEtatV.php", true);
	requeteHTTP.send();
    }

function majModeV()    
{
	var requeteHTTP = new XMLHttpRequest();
	requeteHTTP.onreadystatechange = function()
	{
		if (requeteHTTP.readyState == 4 && requeteHTTP.status == 200)
		{
			document.getElementById("modeV").innerHTML=requeteHTTP.responseText;
            console.log(requeteHTTP.responseText);
            if (requeteHTTP.responseText == 0){
                document.getElementById("modeV").innerHTML="Désactivé";
            }
            else if(requeteHTTP.responseText == 1){
                document.getElementById("modeV").innerHTML="Activé";
            }
            }
		}

	requeteHTTP.open("GET", "../../scripts_serveur/majModeV.php", true);
	requeteHTTP.send();
    }

function clickOnV()
{   
    var requeteHTTP = new XMLHttpRequest();
    requeteHTTP.open("GET", "../../scripts_serveur/onV.php", true);
    requeteHTTP.send();
    alert("La Ventilation a été lancée ! \nMode automatique désactivé !");
}

function clickOffV()
{   
    var requeteHTTP = new XMLHttpRequest();
    requeteHTTP.open("GET", "../../scripts_serveur/offV.php", true);
    requeteHTTP.send();
    alert("La Ventilation a été coupé ! \nMode automatique désactivé !");
} 

function clickAutoV()
{   
    var requeteHTTP = new XMLHttpRequest();
    requeteHTTP.open("GET", "../../scripts_serveur/autoV.php", true);
    requeteHTTP.send();
    alert("La Ventilation a été mis en mode automatique");
}