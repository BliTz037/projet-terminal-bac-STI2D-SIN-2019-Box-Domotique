//ZIGBEE
char lettreRecue;
int modeLum = 0;

//photorésistance
int captLum = A6;
int lum;

//LED
int ledPin = 2;

//Capteur présence
int inputPin = 9;               // choose the input pin (for PIR sensor)
int pirState = LOW;             // we start, assuming no motion detected
int val = 0;

void setup() {
  Serial.begin(9600);
  pinMode(captLum, INPUT);
  pinMode(ledPin, OUTPUT);      // declare LED as output
  pinMode(inputPin, INPUT);     // declare sensor as input

  Serial.println('O');
  Serial.println('B');
}

void loop() {
  while (Serial.available()) {
    lettreRecue = Serial.read();
    if (lettreRecue == 'I') {
      digitalWrite(ledPin, HIGH);
      Serial.println("I");
    }
    else if (lettreRecue == 'O') {
      digitalWrite(ledPin, LOW);
      Serial.println("O");
    }
    else if (lettreRecue == 'A') {
      modeLum = 1;
    }
    else if (lettreRecue == 'B') {
      modeLum = 0;
    }
  }
  lum = analogRead(captLum);
  val = digitalRead(inputPin);

  if (modeLum == 1) {
    if (val == HIGH || lum <= 150 ) {           // check if the input is HIGH
      digitalWrite(ledPin, HIGH);  // turn LED ON
      Serial.println("I");
      if (pirState == LOW) {
        pirState = HIGH;
      }
      delay(2000);

    } else {
      digitalWrite(ledPin, LOW); // turn LED OFF
      Serial.println("O");
      if (pirState == HIGH) {
        // we have just turned of
        Serial.println("Motion ended!");
        // We only want to print on the output change, not state
        pirState = LOW;
      }
    }
  }

  delay(1000);

}
