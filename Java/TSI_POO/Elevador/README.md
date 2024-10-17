# Instruções

## Descrição do problema

Implemente a classe Elevador para armazenar as informações de um elevador dentro de um prédio.

A classe deve armazenar o andar atual que se encontra o elevador (térreo = 0), total de andares no prédio, capacidade do elevador (em número de pessoas), e a quantidade de pessoas presentes nele.

## Métodos requiridos

1. entra: acrescenta uma pessoa ao elevador (somente se o mesmo não estiver cheio);
   - O método entra deve receber uma variável com o total de pessoas que irá entrar no elevador;
2. sai: retira uma pessoa do elevador (somente se houver alguém dentro dele);
   - O método sai deve receber uma variável com o total de pessoas que irá sair do elevador;
3. sobe: faz um elevador subir um andar (não deve subir se já estiver no último andar);
   - O método sobe deverá receber como parâmetro o total de andares que irá subir;
4. desce: faz o elevador descer um andar (não deve descer se já estiver no térreo).
   - O método desce deverá receber como parâmetro o total de andares que o elevador irá descer;
