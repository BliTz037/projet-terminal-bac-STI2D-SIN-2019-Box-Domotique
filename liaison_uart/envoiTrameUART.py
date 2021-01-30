import time
import serial
uart=serial.Serial('/dev/ttyAMA0',9600)

while True :
	monFichier=open('../donnees/donneesApache/modeC.txt','r')
	mode=monFichier.readline()
	monFichier.close()
	uart.write('M')
	uart.write({int(mode)})
	time.sleep(0.25)

	monFichier=open('../donnees/donneesApache/temperature.txt','r')
	temperature=monFichier.readline()
	monFichier.close()
	uart.write('T')
	uart.write({int(temperature)})
	time.sleep(0.25)
