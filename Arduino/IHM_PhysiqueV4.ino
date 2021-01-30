#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <Adafruit_MPL3115A2.h>
#include "DHT.h"
#include "Air_Quality_Sensor.h"
#define DHTPIN 3
#define DHTTYPE DHT22
LiquidCrystal_I2C lcd(0x27, 20, 4);
DHT dht(DHTPIN, DHTTYPE);
AirQualitySensor sensor(A0);
Adafruit_MPL3115A2 baro = Adafruit_MPL3115A2();

int Bouton1 = 11;
int Bouton2 = 12;
int Bouton3 = 13;

int PotenM = A2;
int PotenV = A3;

int Buzzer = 5;
int Chauffage = 4;

int valPotenM;
int valPotenV;

int valBouton1;
int valBouton2;
int valBouton3;

int Mode = 0;
int ModeP = 0;

int TempM = 0;
int Hum = 0;
int Chauffe = 0;
int Ventile = 0;
int Lumiere = 0;
int Lum = 0;
int autoLum = 0;
int Ventil = 0;
int quality;
int Alarme = 0;

int VerrouLum = 0;
int VerrouAutoLum = 0;
int TempS = 0;
int mAlarme = 0;
int VerrouAlarme = 0;
int ArretAlarme = 0;

void setup()
{
  Serial.begin(9600);
  dht.begin();
  baro.begin();
  lcd.init();
  pinMode(Bouton1, INPUT_PULLUP);
  pinMode(Bouton2, INPUT_PULLUP);
  pinMode(Bouton3, INPUT_PULLUP);
  pinMode(PotenM, INPUT);
  pinMode(PotenV, INPUT);
  pinMode(Buzzer, OUTPUT);
  pinMode(Chauffage, OUTPUT);
}


void loop()
{
  //Initialisation et récupération de variables
  lcd.backlight();
  valPotenM = analogRead(PotenM);
  valPotenV = analogRead(PotenV);
  valBouton1 = digitalRead(Bouton1);
  valBouton2 = digitalRead(Bouton2);
  valBouton3 = digitalRead(Bouton3);
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  Hum = h;
  TempM = t;
  //Pression
  float  PressionP = baro.getPressure();
  float PressionhP = PressionP / 99.995;
  //Qualité de l'air
  quality = sensor.slope();

  //Détermination du mode
  if (valPotenM < 200)
  {
    Mode = 4;
  }
  if (valPotenM > 200 && valPotenM < 400)
  {
    Mode = 3;
  }
  if (valPotenM > 400 && valPotenM < 600)
  {
    Mode = 2;
  }
  if (valPotenM > 600 && valPotenM < 800)
  {
    Mode = 1;
  }
  if (valPotenM > 800)
  {
    Mode = 0;
  }

  //Ventilation de la maison
  if (Hum < 60 && Hum > 40 || quality == AirQualitySensor::FRESH_AIR || quality == AirQualitySensor::LOW_POLLUTION)
  {
    Ventil = 0;
  }
  else
  {
    Ventil = 1;
  }

  //Chauffe de la maison
  if (TempM < TempS && TempS > 9)
  {
    Chauffe = 1;
    digitalWrite(Chauffage, HIGH);
  }
  else
  {
    Chauffe = 0;
    digitalWrite(Chauffage, LOW);
  }

  //Alarme air
  if (quality == AirQualitySensor::FORCE_SIGNAL)
  {
    Alarme = 1;
  }
  else
  {
    Alarme = 0;
  }
  if (Alarme == 1 && mAlarme == 1)
  {
    while (ArretAlarme == 0)
    {
      valBouton2 = digitalRead(Bouton2);
      digitalWrite(Buzzer, HIGH);
      delay(250);
      digitalWrite(Buzzer, LOW);
      delay(250);
      if (valBouton2 == 0)
      {
        ArretAlarme = 1;
        digitalWrite(Buzzer, LOW);
      }
    }
  }
  if (ArretAlarme == 1)
  {
    mAlarme = 0;
    ArretAlarme = 0;
  }

  //Mode Accueil
  if (Mode == 0)
  {
    lcd.setCursor(6, 0);
    lcd.print("Accueil");
    lcd.setCursor(0, 1);
    lcd.print("Temperature :");
    lcd.setCursor(14, 1);
    lcd.print(TempM);
    lcd.setCursor(0, 2);
    lcd.print("Humidite :");
    lcd.setCursor(11, 2);
    lcd.print(Hum);
    lcd.setCursor(0, 3);
    lcd.print("Pression :");
    lcd.setCursor(11, 3);
    lcd.print(PressionhP);
  }

  //Mode Chauffage
  if (Mode == 1)
  {
    TempS = analogRead(PotenV) / 35 + 6;
    lcd.setCursor(5, 0);
    lcd.print("Chaudiere");
    lcd.setCursor(0, 1);
    lcd.print("Temperature :");
    lcd.setCursor(14, 1);
    lcd.print(TempM);
    lcd.setCursor(0, 2);
    lcd.print("Temp voulue :");
    if (TempS > 9)
    {
      lcd.setCursor(14, 2);
      lcd.print(TempS);
      lcd.setCursor(16, 2);
      lcd.print(" ");
    }
    else
    {
      lcd.setCursor(14, 2);
      lcd.print("OFF");
    }
    lcd.setCursor(0, 3);
    lcd.print("Chauffage :");
    if (Chauffe == 0)
    {
      lcd.setCursor(12, 3);
      lcd.print("OFF");
    }
    else
    {
      lcd.setCursor(12, 3);
      lcd.print("ON ");
    }
  }

  //Mode Ventilation
  if (Mode == 2)
  {
    lcd.setCursor(4, 0);
    lcd.print("Ventilation");
    lcd.setCursor(0, 1);
    lcd.print("Ventilation :");
    lcd.setCursor(14, 1);
    if (Ventil == 0)
    {
      lcd.print("OFF");
    }
    else
    {
      lcd.print("ON ");
    }
    lcd.setCursor(0, 2);
    lcd.print("Humidite :");
    lcd.setCursor(11, 2);
    lcd.print(Hum);
    lcd.setCursor(0, 3);
    lcd.print("Qualite air :");
    lcd.setCursor(14, 3);
    if (quality == AirQualitySensor::FORCE_SIGNAL)
    {
      lcd.print("DANGER ");
    }
    else if (quality == AirQualitySensor::HIGH_POLLUTION)
    {
      lcd.print("Mauvais");
    }
    else if (quality == AirQualitySensor::LOW_POLLUTION)
    {
      lcd.print("Moyen  ");
    }
    else if (quality == AirQualitySensor::FRESH_AIR)
    {
      lcd.print("Bon    ");
    }
  }

  //Mode Eclairage
  if (Mode == 3)
  {
    lcd.setCursor(6, 0);
    lcd.print("Lumiere");
    lcd.setCursor(0, 1);
    lcd.print("Lumiere :");
    lcd.setCursor(10, 1);
    if (Lum == 0)
    {
      lcd.print("OFF");
    }
    else
    {
      lcd.print("ON ");
    }
    if (valBouton1 == 0 && VerrouLum == 0)
    {
      if (Lum == 1)
      {
        Lum = 0;
      }
      else
      {
        Lum = 1;
      }
      VerrouLum = 1;
    }
    if (valBouton1 == 1 && VerrouLum == 1)
    {
      VerrouLum = 0;
    }
    lcd.setCursor(0, 2);
    lcd.print("Mode auto :");
    lcd.setCursor(12, 2);
    if (autoLum == 0)
    {
      lcd.print("OFF");
    }
    else
    {
      lcd.print("ON ");
    }
    if (valBouton2 == 0 && VerrouAutoLum == 0)
    {
      if (autoLum == 1)
      {
        autoLum = 0;
      }
      else
      {
        autoLum = 1;
      }
      VerrouAutoLum = 1;
    }
    if (valBouton2 == 1 && VerrouAutoLum == 1)
    {
      VerrouAutoLum = 0;
    }
  }

  //Mode Paramètre
  if (Mode == 4)
  {
    lcd.setCursor(5, 0);
    lcd.print("Parametre");
    lcd.setCursor(0, 1);
    lcd.print("Alarme :");
    lcd.setCursor(9, 1);
    if (mAlarme == 1)
    {
      lcd.print("ON ");
    }
    else
    {
      lcd.print("OFF");
    }
    if (valBouton1 == 0 && VerrouAlarme == 0)
    {
      if (mAlarme == 1)
      {
        mAlarme = 0;
      }
      else
      {
        mAlarme = 1;
      }
      VerrouAlarme = 1;
    }
    if (valBouton1 == 1 && VerrouAlarme == 1)
    {
      VerrouAlarme = 0;
    }
  }

  //Rafraichissement écran
  if (Mode != ModeP)
  {
    lcd.clear();
    ModeP = Mode;
  }
  if (valBouton3 == 0)
  {
    lcd.clear();
  }
}
