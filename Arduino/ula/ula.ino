int a1 = 2, a2 = 3,
    b1 = 4, b2 = 5,
    M = 7, D = 8, E = 9, 
    C1 = 10, C2 = 11, CN = 12,
    a, b, c, d, MDE, i=0;

void setup() {
  pinMode(2, INPUT); pinMode(3, INPUT);
  pinMode(4, INPUT); pinMode(5, INPUT);
  pinMode(7, INPUT);  pinMode(8, INPUT);  pinMode(9, INPUT);
  pinMode(10, OUTPUT);pinMode(11, OUTPUT);pinMode(12, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  i++;
  Serial.print("Executando ");Serial.print(i);Serial.println(" vez");
  
  M=digitalRead(7);D=digitalRead(8);E=digitalRead(9);
  a=digitalRead(a1);b=digitalRead(a2);
  c=digitalRead(b1);d=digitalRead(b2);
  
  bitWrite(MDE, 2, M);bitWrite(MDE, 1, D);bitWrite(MDE, 0, E);
  Serial.println(MDE, BIN);
  switch(MDE) {
    case 000:
      
      Serial.println("Adição");
      if(a^c){
        digitalWrite(10, HIGH);
      }else{
        digitalWrite(10, LOW);
      }if(!a&b&d | b&!c&!d | !b&!c&d | !a&b&c&!d | a&!b&c&!d){
        digitalWrite(11, HIGH);
      }else{
        digitalWrite(11, LOW);
      }if(b&d | a&b&c&!d | a&!b&c&d){
        digitalWrite(12, HIGH);
      }else{
        digitalWrite(12, LOW);
      }
      break;
    case 001:
      
      Serial.println("Subtração");
      if(a^c){
        digitalWrite(10, HIGH);
      }else{
        digitalWrite(10, LOW);
      }if(b&!c&!d | a&!b&d | a&!b&!d | !b&!c&d | !a&b&c&d | !a&!b&c&!d){
        digitalWrite(11, HIGH);
      }else{
        digitalWrite(11, LOW);
      }if(!b&d | !a&!b&c&!d){
        digitalWrite(12, HIGH);
      }else{
        digitalWrite(12, LOW);
      }
      break;
    case 010:
      
      if(a&!c | b&!c&!d | a&b&!d){
        digitalWrite(12, HIGH);
      }else{
        digitalWrite(12, LOW);
      }
      break;
    case 011:
      
      if(a&b&c&d |  !a&!b&!c&!d | a&!b&c&!d | !a&b&!c&d){
        digitalWrite(12, HIGH);
      }else{
        digitalWrite(12, LOW);
      }
      break;
    case 100:
      
      if(a&b){
        digitalWrite(10, HIGH);
      }else{
        digitalWrite(10, LOW);
      }if(c&d){
        digitalWrite(11, HIGH);
      }else{
        digitalWrite(11, LOW);
      }
      break;
    case 101:
      
      if(a|b){
        digitalWrite(10, HIGH);
      }else{
        digitalWrite(10, LOW);
      }if(c|d){
        digitalWrite(11, HIGH);
      }else{
        digitalWrite(11, LOW);
      }
      break;
    case 110:
      
      if(!(a&b)){
        digitalWrite(10, HIGH);
      }else{
        digitalWrite(10, LOW);
      }if(!(c&d)){
        digitalWrite(11, HIGH);
      }else{
        digitalWrite(11, LOW);
      }
      break;
    case 111:
      
      if(!(a|b)){
        digitalWrite(10, HIGH);
      }else{
        digitalWrite(10, LOW);
      }if(!(c|d)){
        digitalWrite(11, HIGH);
      }else{
        digitalWrite(11, LOW);
      }
      break;
  }
  delay(10000);
}
