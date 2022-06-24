# Fundamentos, Função e Estruturas de Controle.

<h2>Exercícios</h2>

<h3>Questão - 1:</h3><h5>Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>2 + 2</td>
        <td>4</td>
    </tr>
    <tr>
        <td>3 - 2</td>
        <td>1</td>
    </tr>
    <tr>
        <td>2 * 2</td>
        <td>4</td>
    </tr>
    <tr>
        <td>10 / 2</td>
        <td>5</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 2:</h3><h5>Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>a = 2, b = 2, c = 2</td>
        <td>Equilátero</td>
    </tr>
    <tr>
        <td>a = 2, b = 4, c = 5</td>
        <td>Isósceles</td>
    </tr>
    <tr>
        <td>a = 5, b = 5, c = 4</td>
        <td>Escaleno</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 3:</h3><h5>Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>5 elevado à segunda potência</td>
        <td>25</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">
  
<h3>Questão - 4:</h3><h5>Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>11 / 2</td>
        <td>5, resto = 1</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 5:</h3><h5>Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>0.30000000000000004</td>
        <td>R$ 0,30</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 6:</h3><h5>Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>Capital(2000), Taxa de Juros Simples(0.2) e Tempo de Aplicação(24)</td>
        <td>11600</td>
    </tr>
    <tr>
        <td>Capital(2000), Taxa de Juros Composto(0.2) e Tempo de Aplicação(24)</td>
        <td>160993.69</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 7:</h3><h5>Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>ax2 = 1, bx = -5, c = 6</td>
        <td>x1 = 3; x = 2</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 8:</h3><h5>Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).</h5>
<br>
<strong>Observação:</strong>
O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)

<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>Pontuações por jogos: 10, 20, 20, 40, 0, 50</td>
        <td>Bateu recorde: 3, Pior jogo: 5</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 9:</h3><h5>Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>Nota = 38</td>
        <td>Aprovado com nota 40</td>
    </tr>
    <tr>
        <td>Nota = 29</td>
        <td>Reprovado com nota 29</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 10:</h3><h5> Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>10</td>
        <td>False</td>
    </tr>
    <tr>
        <td>12</td>
        <td>True</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 11:</h3><h5>As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>2020</td>
        <td>True</td>
    </tr>
    <tr>
        <td>2021</td>
        <td>False</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 12:</h3><h5>Faça um algoritmo que calcule o fatorial de um número.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>5</td>
        <td>120</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 13:</h3><h5>Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>1</td>
        <td>Fim de semana</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Dia útil</td>
    </tr>
     <tr>
        <td>'dia'</td>
        <td>Dia inválido</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 14:</h3><h5>Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>Maçã</td>
        <td>Não vendemos esta fruta aqui.</td>
    </tr>
    <tr>
        <td>Kiwi</td>
        <td>Estamos com escassez de kiwi.</td>
    </tr>
     <tr>
        <td>Melancia</td>
        <td>Aqui está, custa R$ 3,00 o quilo.</td>
    </tr>
    </tr>
     <tr>
        <td>Banana</td>
        <td>Erro, fruta inválida.</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 15:</h3><h5>Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>Hatch</td>
        <td>Compra efetuada com sucesso</td>
    </tr>
    <tr>
        <td>Sedan</td>
        <td>Tem certeza que não prefere esse modelo?</td>
    </tr>
     <tr>
        <td>Motocicleta</td>
        <td>Tem certeza que não prefere esse modelo?</td>
    </tr>
    </tr>
     <tr>
        <td>Caminhonete</td>
        <td>Tem certeza que não prefere esse modelo?</td>
    </tr>
     <tr>
        <td>Avião</td>
        <td>Não trabalhamos com este tipo de automóvel aqui</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 16:</h3><h5> Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>2 '+' 2</td>
        <td>4</td>
    </tr>
    <tr>
        <td>3 '#' 3</td>
        <td>Operador inválido</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 17:</h3><h5>Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:</h5>
<br>
<table border="1">
  <tr>
        <td>Plano</td>
        <td>Aumento</td>
    </tr>
  <tr>
        <td>A</td>
        <td>10%</td>
    </tr>
    <tr>
        <td>B</td>
        <td>15%</td>
    </tr>
    <tr>
        <td>C</td>
        <td>20%</td>
    </tr>
  </table>
  <h5>Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>A, R$ 1000</td>
        <td>R$ 1100</td>
    </tr>
    <tr>
        <td>B, R$ 2000</td>
        <td>R$ 2300</td>
    </tr>
    <tr>
        <td>C, R$3000</td>
        <td>R$ 3600</td>
    </tr>
    <tr>
        <td>D, R$4000</td>
        <td>Plano inválido/td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 18:</h3><h5>Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>5</td>
        <td>Cinco</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Número fora do intervalo</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 19:</h3><h5>O cardápio de uma lanchonete é o seguinte:</h5>
<br>
<table border="1">
  <tr>
        <td>Código</td>
        <td>Descrição do Produto</td>
        <td>Preço</td>
    </tr>
  <tr>
        <td>100</td>
        <td>Cachorro Quente</td>
        <td>R$ 3,00</td>
    </tr>
    <tr>
        <td>200</td>
        <td>Hambúrguer Simples</td>
        <td>R$ 4,00</td>
    </tr>
    <tr>
        <td>300</td>
        <td>Cheeseburguer</td>
        <td>R$ 5,50</td>
    </tr>
  <tr>
        <td>400</td>
        <td>Bauru</td>
        <td>R$ 7,50</td>
    </tr>
    <tr>
        <td>500</td>
        <td>Refrigerante</td>
        <td>R$ 3,50</td>
    </tr>
    <tr>
        <td>600</td>
        <td>Suco</td>
        <td>R$ 2,80</td>
    </tr>
  </table>
<h5>Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>Código: 400, Quantidade: 5</td>
        <td>37.56</td>
    </tr>
    <tr>
        <td>Código: 700, Quantidade: 8</td>
        <td>Produto não existente!</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 20:</h3><h5>Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>R$153,00</td>
        <td>1 nota(s) de R$ 100. 1 nota(s) de R$ 50. 3 nota(s) de R$ 1. </td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 21:</h3><h5>Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>Idade: 5</td>
        <td>Valor a ser pago: R$ 180,00.</td>
    </tr>
    <tr>
        <td>Idade: 65</td>
        <td>Valor a ser pago: R$295,00.</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 22:</h3><h5>Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>Mês: 4, Valor: R$2000</td>
        <td>R$2315.25</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 23:</h3><h5>Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>Código:07, Notas: 8, 6, 3</td>
        <td>Código:07 Notas: 8, 6, 3 Média: 5.90 Aprovado</td>
    </tr>
    <tr>
        <td>Código:11, Notas: 5, 4, 1</td>
        <td>Código:07 Notas: 5, 4, 1 Média: 3.50 Reprovado</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 24:</h3><h5>Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>Função Hello World</td>
        <td>Hello World</td>
    </tr>
    <tr>
        <td></td>
        <td>Hello World</td>
    </tr>
    <tr>
        <td></td>
        <td>Hello World</td>
    </tr>
    <tr>
        <td></td>
        <td>Hello World</td>
    </tr>
    <tr>
        <td></td>
        <td>Hello World</td>
    </tr>
    <tr>
        <td></td>
        <td>Hello World</td>
    </tr>
    <tr>
        <td></td>
        <td>Hello World</td>
    </tr>
    <tr>
        <td></td>
        <td>Hello World</td>
    </tr>
    <tr>
        <td></td>
        <td>Hello World</td>
    </tr>
    <tr>
        <td></td>
        <td>Hello World</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 25:</h3><h5>Escrever um programa para exibir os números de 1 até 50 na tela.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>Função contador50</td>
        <td>1, 2, 3, ..., 48, 49, 50</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 26:</h3><h5>Fazer um programa para encontrar todos os pares entre 1 e 100.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>Função acharPares</td>
        <td>2, 4, 6, ..., 96, 98, 100</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 27:</h3><h5> Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>Altura1: 120,Taxa1: 3, Altura2: 150, Taxa2: 2</td>
        <td>A criança menor ultrapassará a maior em 30 anos</td>
    </tr>
    <tr>
        <td>Altura1: 110,Taxa1: 2, Altura2: 130, Taxa2: 3</td>
        <td>A criança menor não ultrapassará a maior.</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 28:</h3><h5>Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]</td>
        <td>6 números pares e 7 números ímpares.</td>
    </tr>
  </table>
  <strong>Observação:</strong>
  Zero também conta como número!
  <br>
  <hr size="1" width="100%" align="center">

<h3>Questão - 29:</h3><h5> Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>[7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]</td>
        <td>8 números dentro do intervalo. 4 números fora do intervalo.</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 30:</h3><h5>Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>[10, 5, 7, 3, 1, 3, 11, 20, 6, 9]</td>
        <td>[ 20, 0 ]</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 31:</h3><h5>Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>[5, 10, -3, 33, -1, 22, -55, -10, 0, 99]</td>
        <td>4</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 32:</h3><h5>Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>[5, 5, 5]</td>
        <td>5</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 33:</h3><h5> Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.</h5>
<br>
vetorInteiro = [10, 20, 30, 40]
vetorString = ['João', 'Chico', 'Laura', 'Emily']
vetorDouble = [1.1, 2.2, 3.3, 4.4]
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>vetorInteiro, vetorDouble</td>
        <td>[10, 20, 30, 40, 1.1, 2.2, 3.3, 4.4]</td>
    </tr>
    <tr>
        <td>vetorInteiro, vetorString</td>
        <td>[10, 20, 30, 40, 'João', 'Chico', 'Laura', Emily']</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 34:</h3><h5>Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>'abc', 'cba'</td>
        <td>True</td>
    </tr>
    <tr>
        <td>'DEF', 'fea'</td>
        <td>False</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 35:</h3><h5>Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console.</h5>
<br>
vetorPilha = [1, 2, 3, 4, 5]
vetorAdiciona = [6, 7, 8, 9, 10]
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>vetorPilha, vetorAdiciona</td>
        <td>Vetor adicionado: 6,7,8,9,10 Vetor final: 1,2,3,4,5,6,7,8,9,10</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 36:</h3><h5>Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>[1, 2, 3, 4, 5], 5</td>
        <td>[5, 10, 15, 20, 25]</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 37:</h3><h5>Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>pA(10, 10, 15)</td>
        <td>10, 25, 40, 55, ..., 130, 145 Soma dos elementos: 775</td>
    </tr>
    <tr>
        <td>pG(10, 5, 3)</td>
        <td>5, 15, 45, 135, ..., 32805, 98415 Soma dos elementos: 147620</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 38:</h3><h5>) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>17, 5</td>
        <td>5, 7, 9, 11, 13, 15, 17</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 39:</h3><h5>Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.</h5>
<br>
vetorA = [1, 2, 3]
vetorB = [4, 5, 6]
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>vetorA, vetorB</td>
        <td>Novo vetor A: 4,5,6 Novo vetor B: 1,2,3</td>
    </tr>
  </table>
  <hr size="1" width="100%" align="center">

<h3>Questão - 40:</h3><h5>Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.</h5>
<br>
<table border="1">
  <tr>
        <td>Exemplo de Entrada</td>
        <td>Exemplo de Saída</td>
    </tr>
  <tr>
        <td>[10, 13, 9, 8.2, 2.5, 7.7, 6.8]</td>
        <td>['A', 'Nota inválida', 'A', 'B', 'D', 'B', 'C']</td>
    </tr>
  </table>