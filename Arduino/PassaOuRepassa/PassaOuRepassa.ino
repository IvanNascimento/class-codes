//  Displays       A ,B , C, D, E, F, G
int display1[7] = {47,48,49,50,51,52,53};
int display2[7] = {40,41,42,43,44,45,46};
int display3[7] = {33,34,35,36,37,38,39};
int display4[7] = {26,27,28,29,30,31,32};

// Botões
int btn1 = 6;
int btn2 = 7;

// Sirenes
int srn1 = 12;
int srn2 = 13;

void setup(){
  // Displays
  for(int i = 0; i < 7;i++) {
    pinMode(display1[i], OUTPUT);
    pinMode(display2[i], OUTPUT);
    pinMode(display3[i], OUTPUT);
    pinMode(display4[i], OUTPUT);
  }
  // Botões
  pinMode(btn1, INPUT_PULLUP);
  pinMode(btn2, INPUT_PULLUP);
  // Sirene
  pinMode(srn1, OUTPUT);
  pinMode(srn2, OUTPUT);
}

void loop() {
  if(digitalRead(btn1) == HIGH) {
    digitalWrite(srn1, HIGH);
  }else {
    digitalWrite(srn1, LOW);
  }
  if(digitalRead(btn2) == HIGH) {
    digitalWrite(srn2, HIGH);
  }else {
    digitalWrite(srn2, LOW);
  }
  delay(250);
}