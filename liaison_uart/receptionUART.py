import serial
import time
uart=serial.Serial('/dev/ttyAMA0',9600)


while True:
	trameUART=uart.readline()

	if trameUART[0]=='T':
		monFichier=open("../donnees/temperature.txt","w")
		monFichier.write(trameUART[1:])
		monFichier.close()

	if trameUART[0]=='H':
		monFichier=open("../donnees/humidity.txt","w")
		monFichier.write(trameUART[1:])
 		monFichier.close()
		 
	if trameUART[0]=='Q':
		monFichier=open("../donnees/QA.txt","w")
		monFichier.write(trameUART[1:])
 		monFichier.close()
		 
	if trameUART[0]=='P':
		monFichier=open("../donnees/pressure.txt","w")
		monFichier.write(trameUART[1:])
 		monFichier.close()

	if trameUART[0]=='C':
		monFichier=open("../donnees/etatC.txt","w")
		monFichier.write(trameUART[1:])
 		monFichier.close()
		
	if trameUART[0]=='V':
		monFichier=open("../donnees/etatV.txt","w")
		monFichier.write(trameUART[1:])
		monFichier.close()
		
	if trameUART[0]=='L':
		monFichier=open("../donnees/etatL.txt","w")
		monFichier.write(trameUART[1:])
		monFichier.close()
		
	if trameUART[0]=='A':
		monFichier=open("../donnees/modeL.txt","w")
		monFichier.write(trameUART[1:])
		monFichier.close()

	if trameUART[0]=='V':
		monFichier=open("../donnees/etatV.txt","w")
		monFichier.write(trameUART[1:])
		monFichier.close()
		
	if trameUART[0]=='W':
		monFichier=open("../donnees/modeV.txt","w")
		monFichier.write(trameUART[1:])
		monFichier.close()	

	if trameUART[0]=='R':
		monFichier=open("../donnees/modeActuel.txt","w")
		monFichier.write(trameUART[1:])
		monFichier.close()

	if trameUART[0]=='D':
		monFichier=open("../donnees/donneesApache/temperature.txt","w")
		monFichier.write(trameUART[1:])
		monFichier.close()