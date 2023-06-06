// Não funciona

function letterGrade (nota) {
  if ((nota < 0) || (nota > 100))
    throw "Nota não suportada";
  else if (60 > nota)
    return "F";
  else if (70 > nota)
    return "D";
  else if (80 > nota)
    return "C";
  else if (90 > nota)
    return "B";
  else if (100 >= nota)
    return "A";
}

console.log(`Sua nota é ${letterGrade(100)}`);
console.log(`Sua nota é ${letterGrade(90)}`);
console.log(`Sua nota é ${letterGrade(80)}`);
console.log(`Sua nota é ${letterGrade(70)}`);
console.log(`Sua nota é ${letterGrade(60)}`);
console.log(`Sua nota é ${letterGrade(50)}`);
