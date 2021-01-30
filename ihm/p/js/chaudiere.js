document.getElementById("fire").addEventListener("click",clickFire);
document.getElementById("eco").addEventListener("click",clickEco);
document.getElementById("poten").addEventListener("click",clickPoten);

setInterval(function(){majTemp();},2000);
setInterval(function(){majModeC();},2000);
setInterval(function(){majTempS();},2000);
setInterval(function(){majEtatC();},2000);
//Fonction D'envoie de la température et du mode

function clickFire()
{   
    var requeteHTTP = new XMLHttpRequest();
	requeteHTTP.open("GET", "../../scripts_serveur/passageModeChauffage.php", true);
	requeteHTTP.send();
    alert("Mode chauffage lancé !");
}

function clickPoten()
{   
    var requeteHTTP = new XMLHttpRequest();
	requeteHTTP.open("GET", "../../scripts_serveur/passageModePhysique.php", true);
	requeteHTTP.send();
    alert("Mode Manuel Physique lancé !");
}

function clickEco()
{
    var requeteHTTP = new XMLHttpRequest();
	requeteHTTP.open("GET", "../../scripts_serveur/passageModeEco.php", true);
	requeteHTTP.send();
    alert("Mode Economie lancé !");
}

function changementTemp()
{
	var requeteHTTP = new XMLHttpRequest();
	requeteHTTP.open("GET", "../../scripts_serveur/changementTemp.php?temp="+document.getElementById("temperatureInputId").value, true);
	requeteHTTP.send();
    
    var requeteHTTP1 = new XMLHttpRequest();
	requeteHTTP1.open("GET", "../../scripts_serveur/passageModeIhm.php", true);
	requeteHTTP1.send();
    
    alert("La température souhaitée à été envoyée !");
}

//Mise à Jour de la T°

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

//Mise à Jour du mode actuel
function majModeC()
{
	var requeteHTTP = new XMLHttpRequest();
	requeteHTTP.onreadystatechange = function()
	{
		if (requeteHTTP.readyState == 4 && requeteHTTP.status == 200)
		{
			document.getElementById("modeHouseC").innerHTML=requeteHTTP.responseText;
            console.log(requeteHTTP.responseText);
            if (requeteHTTP.responseText == 0){
                document.getElementById("modeHouseC").innerHTML="Manuel Physique";
            }
            else if(requeteHTTP.responseText == 1){
                document.getElementById("modeHouseC").innerHTML="Chauffage";
            }
            else if(requeteHTTP.responseText == 2){
                document.getElementById("modeHouseC").innerHTML="Eco";
            }
            else if(requeteHTTP.responseText == 3){
                document.getElementById("modeHouseC").innerHTML="Manuel IHM";
            }
		}
	}
	requeteHTTP.open("GET", "../../scripts_serveur/majModeC.php", true);
	requeteHTTP.send();
}

//Mise à Jour de la température souhaitée
function majTempS()
{
    var requeteHTTP = new XMLHttpRequest();
	requeteHTTP.onreadystatechange = function()
	{
		if (requeteHTTP.readyState == 4 && requeteHTTP.status == 200)
		{
			document.getElementById("tempS").innerHTML=requeteHTTP.responseText;
		}
	}
	requeteHTTP.open("GET", "../../scripts_serveur/majTempS.php", true);
	requeteHTTP.send();
}

//Mise à Jour de l'etat du Relais
function majEtatC()
{
	var requeteHTTP = new XMLHttpRequest();
	requeteHTTP.onreadystatechange = function()
	{
		if (requeteHTTP.readyState == 4 && requeteHTTP.status == 200)
		{
			document.getElementById("etatC").innerHTML=requeteHTTP.responseText;
            console.log(requeteHTTP.responseText);
            if (requeteHTTP.responseText == 0){
                document.getElementById("etatC").innerHTML="OFF";
            }
            else if(requeteHTTP.responseText == 1){
                document.getElementById("etatC").innerHTML="ON";
            }
            }
		}

	requeteHTTP.open("GET", "../../scripts_serveur/majEtatC.php", true);
	requeteHTTP.send();
    }
    
 //tempHouse modeHouseC tempS etatC ID HTML