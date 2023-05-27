#include<LiquidCrystal.h>

#define in1 7
#define in2 6

LiquidCrystal lcd(12,11,5,4,3,2);

int aa = 1; // Andar Atual
int bt1,bt2; // Botão n
int pa1= 9, pa2 = 8;// Pin Andar n°

byte Graus[8] = {
  B11000, B11000, B00000, B00000,
  B00000, B00000, B00000, B00000
};

void setup() {
  pinMode(7, OUTPUT);pinMode(6, OUTPUT);
  pinMode(pa1, INPUT);pinMode(pa2, INPUT);
  lcd.createChar(0,Graus); // Graus(nome do array)
  lcd.begin(16,2); // Define o numero de colunas e linhas
  Serial.begin(9600);
}

void loop() {
  // pegando dados
  // Verificar qual o proximo andar
  bt1 = !digitalRead(pa1);
  bt2 = !digitalRead(pa2);
  // Parte do motor
    // Próximo Andar
    if (bt1 == 1) {
      irAndar(1);
    }else if (bt2 == 1) {
      irAndar(2);
    }
  // Parte do lcd
  lcd.clear();
  lcd.setCursor(0,0);
  lcd.print("Elevador no: ");
  lcd.setCursor(0,1);
  lcd.print(aa);
  lcd.write(byte(0));
  lcd.print(" Andar");
  delay(200);
}

void irAndar(int andar) {
  Serial.print(andar);
  Serial.println("° andar");
  if (andar > aa) {
    // Subir
    Serial.println("Subir");
    for (int i = andar;i < aa;i++) {
      digitalWrite(in1, HIGH);
      digitalWrite(in2, LOW);
      delay(2000); // 2s
      digitalWrite(in1, LOW);
      digitalWrite(in2, LOW);
    }
  }else if (andar < aa) {
    // Decer
    Serial.println("Decer");
    for (int i = andar; i > aa; i--) {
      digitalWrite(in1, LOW);
      digitalWrite(in2, HIGH);
      delay(2000); // 2s
      digitalWrite(in1, LOW);
      digitalWrite(in2, LOW);
    }
  }
  aa = andar;
}
