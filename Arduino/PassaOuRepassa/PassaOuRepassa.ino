#include <Keypad.h>

// Displays A ,B , C, D, E, F, G
int display2[7] = {47, 48, 49, 50, 51, 52, 53};
int display1[7] = {40, 41, 43, 44, 42, 45, 46};
int display4[7] = {33, 34, 35, 36, 37, 38, 39};
int display3[7] = {26, 27, 28, 29, 30, 31, 32};

int teclado[8] = {A0, A1, A2, A3, A4, A5, A6, A7};

// Numeros
// 0 - 9
const int nums[10][7] = {
    {LOW, LOW, LOW, LOW, LOW, LOW, HIGH},
    {HIGH, LOW, LOW, HIGH, HIGH, HIGH, HIGH},
    {LOW, LOW, HIGH, LOW, LOW, HIGH, LOW},
    {LOW, LOW, LOW, LOW, HIGH, HIGH, LOW},
    {HIGH, LOW, LOW, HIGH, HIGH, LOW, LOW},
    {LOW, HIGH, LOW, LOW, HIGH, LOW, LOW},
    {LOW, HIGH, LOW, LOW, LOW, LOW, LOW},
    {LOW, LOW, LOW, HIGH, HIGH, HIGH, HIGH},
    {LOW, LOW, LOW, LOW, LOW, LOW, LOW},
    {LOW, LOW, LOW, HIGH, HIGH, LOW, LOW}};

const int teclado_matrix[4][4] = {
    {'1', '2', '3', 'A'},
    {'4', '5', '6', 'B'},
    {'7', '8', '9', 'C'},
    {'*', '0', '#', 'D'}};

const int linhas[4] = {9, 10, 11, 12};
const int colunas[4] = {5, 6, 7, 8};

// Pontos
int pnt1 = 0;
int pnt2 = 0;

// Botões
int btn1 = 6;
int btn2 = 7;

// Sirenes
int srn1 = 11;
int srn2 = 12;

// Temp Vars
String tempString = "";
int tempInt = 0;
char tecla = '';

Keypad teclado = Keypad(makekeymap(teclado_matrix), linhas, colunas, 4, 4);

void setup()
{
  // Serial
  Serial.begin(9600);

  // Displays
  for (int i = 0; i < 7; i++)
  {
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

  // Desligando as sirenes
  digitalWrite(srn1, HIGH);
  digitalWrite(srn2, HIGH);

  // Setando display para 0
  mostrar(display1, 0);
  mostrar(display2, 0);
  mostrar(display3, 0);
  mostrar(display4, 0);
}

void loop()
{
  if (digitalRead(btn1) == LOW)
  {
    pri();
  }
  if (digitalRead(btn2) == LOW)
  {
    seg();
  }
  tecla = tecla.getKey();
  if (tecla != '')
  {
    Serial.println(tecla);
  }
}

// Mostra os numeros
void aplicar(int dis[7], int dis2[7])
{
  for (int i = 0; i < 7; i++)
  {
    digitalWrite(dis[i], dis2[i]);
  }
}

// Pontuação
// 1 - Primeiro Jogador
// N != 1 - Segundo Jogador
void pontuacao(int pontos = 1)
{
  if (pontos == 1)
  {
    if (pnt1 > 9)
    {
      tempString = String(pnt1);
      mostrar(display1, String(tempString[1]).toInt());
      mostrar(display2, String(tempString[0]).toInt());
    }
    else
    {
      mostrar(display2, 0);
      mostrar(display1, pnt1);
    }
  }
  else
  {
    if (pnt2 > 9)
    {
      tempString = String(pnt2);
      mostrar(display3, String(tempString[1]).toInt());
      mostrar(display4, String(tempString[0]).toInt());
    }
    else
    {
      mostrar(display4, 0);
      mostrar(display3, pnt2);
    }
  }
}

void mostrar(int visor[7], int num)
{
  aplicar(visor, nums[num]);
};

// Primeiro botão
void pri()
{
  digitalWrite(srn1, LOW);
  delay(1000);
  digitalWrite(srn1, HIGH);
}

// Segundo Botão
void seg()
{
  digitalWrite(srn2, LOW);
  delay(1000);
  digitalWrite(srn2, HIGH);
}

void addpontoSerial()
{
  Serial.print("\nN M");
  Serial.print("\nN: Qual o Jogador\nM: Pontos a adicionar");
  while (Serial.available() == 0)
  {
  };
  tempString = Serial.readString();
  Serial.print("\nValor lido: ");
  Serial.print(tempString);
  if (String(tempString[0]) == "1")
  {
    pnt1 += String(String(tempString[2]) + String(tempString[3])).toInt();
    pontuacao(1);
  }
  else
  {
    pnt2 += String(String(tempString[2]) + String(tempString[3])).toInt();
    pontuacao(2);
  }
}

void lerTeclado()
{
  for(int i = 0; i < 8;i++) {
    
  }
}