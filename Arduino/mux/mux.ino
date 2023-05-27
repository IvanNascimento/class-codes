int s = 13, ABC,a,b,c,
    A=10,B=11,C=12,
    i0=2,i1=3,i2=4,i3=5,
    i4=6,i5=7,i6=8,i7=9;

void setup() {
 pinMode(i0, INPUT); pinMode(i1, INPUT);pinMode(i2, INPUT); pinMode(i3, INPUT);
 pinMode(i4, INPUT); pinMode(i5, INPUT);pinMode(i6, INPUT); pinMode(i7, INPUT);
 pinMode(A, INPUT);  pinMode(B, INPUT);  pinMode(C, INPUT);
 pinMode(s, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  
  a=digitalRead(A);b=digitalRead(B);c=digitalRead(C);
  bitWrite(ABC, 2, a);bitWrite(ABC, 1, b);bitWrite(ABC, 0, c);
  
  Serial.println(ABC, BIN);
  switch(ABC) {
    case 000:
      digitalWrite(s, digitalRead(i0));
      break;
    case 001:
      digitalWrite(s, digitalRead(i1));
      break;
    case 010:
      digitalWrite(s, digitalRead(i2));
      break;
    case 011:
      digitalWrite(s, digitalRead(i3));
      break;
    case 100:
      digitalWrite(s, digitalRead(i4));
      break;
    case 101:
      digitalWrite(s, digitalRead(i5));
      break;
    case 110:
      digitalWrite(s, digitalRead(i6));
      break;
    case 111:
      digitalWrite(s, digitalRead(i7));
      break;
  delay(5000);
  }
}
