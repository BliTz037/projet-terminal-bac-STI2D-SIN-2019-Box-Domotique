import time
import serial
uart=serial.Serial('/dev/ttyAMA0',9600)

while True:
	
	trameUART=uart.readline()
	
	#Chaudiere
	monFichier=open('../donnees/donneesApache/modeC.txt','r')
	modeC=monFichier.readline()
	monFichier.close()
		
	if modeC == '0':
		uart.write('P')
		time.sleep(0.25)
		print("Mode Physique")
			
	if modeC == '1':
		uart.write('F')
		time.sleep(0.25)
		print("Mode hot")
			
	if modeC == '2':
		uart.write('E')
		time.sleep(0.25)
		print("Mode ECO")
			
	if modeC == '3':
		monFichier=open('../donnees/donneesApache/temperature.txt','r')
		temperature=monFichier.readline()
		monFichier.close()
		print("Mode Manuel IHM")
			
		uart.write('T')	
		print(temperature)
		uart.write(int(temperature))
		time.sleep(0.25)
	
	#Ventilation
	
	ventilation=open('../donnees/donneesApache/etatV.txt','r')
	etatV= ventilation.readline()
	ventilation.close()
	
	ventilationA=open('../donnees/donneesApache/autoV.txt','r')
	autoV= ventilationA.readline()
	ventilationA.close()
	
	if etatV == '1':
		uart.write('V')
		time.sleep(0.25)
		print("Ventilation ON")
	
	if etatV == '0':
		uart.write('Y')
		time.sleep(0.25)
		print("Ventilation OFF")
	
	if autoV == '1':
		uart.write('M')
		time.sleep(0.25)
		print("AUTO V ON")
		
	
	#Lumiere
	
	lumiere=open('../donnees/donneesApache/etatL.txt','r')
	etatL= lumiere.readline()
	lumiere.close()
	
	lumiereA=open('../donnees/donneesApache/autoL.txt','r')
	autoL= lumiereA.readline()
	lumiereA.close()
	
	if etatL == '1':
		uart.write("I")
		time.sleep(0.25)
		print("lumiere ON")
	
	if etatL == '0':
		uart.write("O")
		time.sleep(0.25)
		print("lumiere OFF")
	
	if autoL == '1':
		uart.write("A")
		time.sleep(0.25)
		print("AUTO V ON")
		

