float v,a;

void setup() {
  pinMode(A0, INPUT);
  Serial.begin(9600);
}

void loop() {
  a = analogRead(A0);
  v = a*5/(10.23);
  Serial.print(v);
  Serial.print(" °c \n");
  Serial.print(a);
  delay(5000);
}
