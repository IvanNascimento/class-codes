int led = 5;
int pir = 2;

void setup(){
  pinMode(led, OUTPUT);
  pinMode(pir, INPUT);
}

void loop(){
  if(digitalRead(pir) == HIGH){
    digitalWrite(led, HIGH);
  }else{
    digitalWrite(led, LOW);
  }
  delay(2500);
}
