#include "HX711.h"

// HX711.DOUT   - pin 10
// HX711.PD_SCK - pin 11
HX711 scale(A1, A0);

void setup() {
  scale.power_up();
  //scale.tare();
  Serial.begin(9600);  
}

void loop() {
  Serial.print("Peso: ");
  Serial.print(scale.get_units());
  Serial.println(" KG");
  delay(2000);
}
