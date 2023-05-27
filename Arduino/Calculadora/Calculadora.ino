#include <LiquidCrystal.h>

// LiquidCrystal lcd(2, 3, 4, 10, 11, 12, 13);// 16,2

String a, b, operacao;
boolean asA = false;

int pinosLinhas[]  = {11,10,9,8};
int pinosColunas[] = {7,6,5,4};

char teclas[4][4] = {
  {'1', '2', '3', 'A'},
  {'4', '5', '6', 'B'},
  {'7', '8', '9', 'C'},
  {'*', '0', '#', 'D'}
};

void setup() {
  for (int nL = 0; nL <= 3; nL++) {
    pinMode(pinosLinhas[nL], OUTPUT);
    digitalWrite(pinosLinhas[nL], HIGH);
  }

  for (int nC = 0; nC <= 3; nC++) {
    pinMode(pinosColunas[nC], INPUT_PULLUP);
  }

  Serial.begin(9600);
  // lcd.begin(16, 2);
}

void loop() {
  for (int nL = 0; nL <= 3; nL++) {
    digitalWrite(pinosLinhas[nL], LOW);
    for (int nC = 0; nC <= 3; nC++) {
      if (digitalRead(pinosColunas[nC]) == LOW) {
        while(digitalRead(pinosColunas[nC]) == LOW){}
        Serial.print("Tecla: ");
        Serial.println(teclas[nL][nC]);
        // numeros
        if ((teclas[nL][nC] != teclas[0][3]) || (teclas[nL][nC] != "B")
            || (teclas[nL][nC] != "C") || (teclas[nL][nC] != "D")
            || (teclas[nL][nC] != "#") || (teclas[nL][nC] != "*")) {
          if (!asA) {
            Serial.print("a += ");
            Serial.println(teclas[nL][nC]);
            a += teclas[nL][nC];
          } else {
            b += teclas[nL][nC];
          }
        }
        // teclas reservadas
        else {
          if (teclas[nL][nC] == '#') {
            // Resultado
            if (operacao == "A") {
              // lcd.print(a + " + " + b + " = " + (a.toInt() + b.toInt()));
              Serial.println(a + " + " + b + " = " + (a.toInt() + b.toInt()));
            } else if ( operacao == "B") {
              // lcd.print(a + " - " + b + " = " + (a.toInt() - b.toInt()));
              Serial.println(a + " - " + b + " = " + (a.toInt() - b.toInt()));
            } else if ( operacao == "C") {
              // lcd.print(a + " * " + b + " = " + (a.toInt()*b.toInt()));
              Serial.println(a + " * " + b + " = " + (a.toInt()*b.toInt()));
            } else if ( operacao == "D") {
              // lcd.print(a + " / " + b + " = " + (a.toInt() / b.toInt()));
              Serial.println(a + " / " + b + " = " + (a.toInt() / b.toInt()));
            }
          } else {
            operacao = teclas[nL][nC];
            asA = true;
          }
        }
      }
    }
    digitalWrite(pinosLinhas[nL], HIGH);
  }
  delay(10);
}
