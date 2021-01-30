import mysql.connector
import time

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="raspberry",
  database="domotique"
)

while True:
	now = time.strftime('%Y-%m-%d %H:%M:%S')

	temp_txt=open("../donnees/temperature.txt","r")
	temp = temp_txt.read()

	hum_txt=open("../donnees/humidity.txt","r")
	hum = hum_txt.read()

	press_txt = open("../donnees/pressure.txt","r")
	press = press_txt.read()

	qa_txt = open("../donnees/QA.txt","r")
	qa = qa_txt.read()

	mycursor = mydb.cursor()

	sql = "INSERT INTO historique (date, temperature, humidite, pression, air) VALUES (%s, %s, %s,%s,%s)"
	val = (now,temp,hum,press,qa)
	mycursor.execute(sql, val)

	mydb.commit()

	time.sleep(180)
