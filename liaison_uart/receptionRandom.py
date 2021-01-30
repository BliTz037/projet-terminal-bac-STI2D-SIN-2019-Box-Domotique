import random
import time

while True:
        temp = random.randint(18,26)
        hum = random.randint(10,100)
        press = random.randint(1200,1290)
        qa = random.randint(0,3)
        etatC = random.randint(0,1)
        etatV = random.randint(0,1)
        etatL = random.randint(0,1)

        monFichier=open("../donnees/temperature.txt","w")
        monFichier.write(str(temp))
        monFichier.close()

        monFichier=open("../donnees/humidity.txt","w")
        monFichier.write(str(hum))
        monFichier.close()

        monFichier=open("../donnees/QA.txt","w")
        monFichier.write(str(qa))
        monFichier.close()

        monFichier=open("../donnees/pressure.txt","w")
        monFichier.write(str(press))
        monFichier.close()

        monFichier=open("../donnees/etatC.txt","w")
        monFichier.write(str(etatC))
        monFichier.close()

        monFichier=open("../donnees/etatV.txt","w")
        monFichier.write(str(etatV))
        monFichier.close()

        monFichier=open("../donnees/etatL.txt","w")
        monFichier.write(str(etatL))
        monFichier.close()

	time.sleep(2)
