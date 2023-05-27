#include<LiquidCrystal.h>

LiquidCrystal lcd(2,3,4,10,11,12,13);
float c, f, a;

byte celsius[8] = {
  B11000,
  B11000,
  B00111,
  B01000,
  B01000,
  B01000,
  B00111,
  B00000
};

byte fahrenheit[8] = {
  B11000,
  B11000,
  B00000,
  B01111,
  B01000,
  B01111,
  B01000,
  B01000
};

void setup() {
  pinMode(A4, INPUT);
  lcd.createChar(0,celsius);
  lcd.createChar(1,fahrenheit);
  lcd.begin(16,2);
}

void loop() {
  a = analogRead(A4);
  c = a*5/(10.23); // °C
  f = c*1.8+32; // °F

  lcd.clear();
  lcd.setCursor(0,0);
  lcd.print(c);
  lcd.write(byte(0));
  lcd.setCursor(0,1);
  lcd.print(f);
  lcd.write(byte(1));
  delay(5000);
}

