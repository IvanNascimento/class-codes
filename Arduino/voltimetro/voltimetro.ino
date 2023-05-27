#include<LiquidCrystal.h>
LiquidCrystal lcd(2,3,4,10,11,12,13);
int v;

void setup() {
  // put your setup code here, to run once:
  
lcd.begin(16,2);
}

void loop() {
  // put your main code here, to run repeatedly:
  
  v=analogRead(A0)*5/1023;
  v=v*4;
  lcd.setCursor(0,0);
  lcd.write(byte(0));
  lcd.print("valor:");
  lcd.print(v);
  lcd.setCursor(0,1);
  if(v<=5){
    lcd.print("escala 5");
    }
    if(v<=10 && v>=6){
    lcd.print("escala 10 ");
    }
    if(v<=15 && v>=11){
    lcd.print("escala 15 ");
    }
    if(v<=20 && v>=16){
    lcd.print("escala 20 ");
    }
  delay(1000);
  lcd.clear();
}
