<p>Em Python você pode criar variáveis e guardar informações, que depois podem ser utilizadas para realizar operações.</p>
Mas o que é uma variável? Neste caso, uma variável é um espaço na memória. Você pode criar uma variável com o nome que desejar e usar o símbolo <code>=</code> para atribuir ou guardar um dado dentro dela.
<CodeViewer> Valor = 10</CodeViewer>
No exemplo acima nós criamos uma variável chamada <code>Valor</code> e guardamos o número <code>10</code> nela com o símbolo de igual.
<p> O objetivo disso tudo é simplificar a quantidade de linhas de código. Veja a seguir como as variáveis podem ser criadas e utilizadas em operações matemáticas:</p>
<p>Você deseja calcular o custo total de X unidades de produto adquirido:</p>

<CodeViewer>{`>>> Custo_Unidade = 5000
>>> Quantidade_Unidades = 2
>>> Custo_Total = Custo_Unidade * Quantidade_Unidades
>>> print (Custo_Total)
10000`}</CodeViewer>

<p>É possível também guardar em uma variável o resultado de operações aritiméticas:</p>

<CodeViewer>
  {`>>> Total = (100*25)/12
>>> print (Total) 
208`}
</CodeViewer>

<b>Importante:</b>
<ol>
  <li>Algumas palavras não podem ser utilizadas para criação de variáveis (ex: 'True', 'and', 'False', 'while' e etc.) pois são reservadas para finalizados específicas.</li>
  <li>Python aceita acento e cedilha para criação de variáveis, mas é bom evitar. Não utilize também caracteres speciais.</li>
  <li>Python é sensível a maiúsculas e minúsculas, não só em variáveis!</li>
</ol>