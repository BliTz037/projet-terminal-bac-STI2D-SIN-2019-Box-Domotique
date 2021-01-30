setInterval(function(){majQA();},2000);
setInterval(function(){majTemp();},2000);
setInterval(function(){majHum();},2000);
setInterval(function(){majPressure();},2000);

//Chaudière
setInterval(function(){majTempS();},2000);
setInterval(function(){majEtatC();},2000);
setInterval(function(){majModeC();},2000);

//Ventilation
setInterval(function(){majEtatV();},2000);

//Lumière
setInterval(function(){majEtatL();},2000);
setInterval(function(){majModeL();},2000);


var imgBon = new Image();
var imgMoyen = new Image();
var imgMauvais = new Image();
var imgDanger = new Image();

console.log("Script Accueil.js Lancé !");
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

function majPressure()
{
	var requeteHTTP = new XMLHttpRequest();
	requeteHTTP.onreadystatechange = function()
	{
		if (requeteHTTP.readyState == 4 && requeteHTTP.status == 200)
		{
			document.getElementById("pressureHouse").innerHTML=requeteHTTP.responseText;
		}
	}
	requeteHTTP.open("GET", "../../scripts_serveur/majPressure.php", true);
	requeteHTTP.send();
}

function majQA()
{
	var requeteHTTP = new XMLHttpRequest();
	requeteHTTP.onreadystatechange = function()
	{
		if (requeteHTTP.readyState == 4 && requeteHTTP.status == 200)
		{
			document.getElementById("houseQA").innerHTML=requeteHTTP.responseText;
            console.log(requeteHTTP.responseText);
            if (requeteHTTP.responseText == 3){
                document.getElementById("houseQA").innerHTML="Bien";
                document.getElementById("imgHouseQA").src = imgBon.src;
            }
            else if(requeteHTTP.responseText == 2){
                document.getElementById("houseQA").innerHTML="Moyen";
                document.getElementById("imgHouseQA").src = imgMoyen.src;
            }
            else if(requeteHTTP.responseText == 1){
                document.getElementById("houseQA").innerHTML="Mauvais";
                document.getElementById("imgHouseQA").src = imgMauvais.src;
            }
            else if(requeteHTTP.responseText == 0){
                document.getElementById("houseQA").innerHTML="DANGER !";
                document.getElementById("imgHouseQA").src = imgDanger.src;
            }
		}
	}
	requeteHTTP.open("GET", "../../scripts_serveur/majQA.php", true);
	requeteHTTP.send();
}

//Chaudière

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



//Ventilation

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
        
    }  

///Lumière

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
                document.getElementById("etatL").innerHTML="Éteint";
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

	requeteHTTP.open("GET", "../../scripts_serveur/majEtatL.php", true);
	requeteHTTP.send();
    }

imgBon.src = "../img/maisonEtatE.png";
imgMoyen.src = "../img/maisonEtatM.png";
imgMauvais.src = "../img/maisonEtatMauvais.png";
imgDanger.src = "../img/maisonEtatAlert.png";  
