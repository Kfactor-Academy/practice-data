<p>Ao manipular dados com Python é importante saber os tipos de dados que podem ser atribuídos nas variáveis. Afinal, você não quer correr o risco de multiplicar uma palavra (ex: Brasil) por um número (ex: 2), confere?</p>
<p>Veja abaixo os tipos de dados mais comuns utilizados em Python para Data Science:</p>

<Table striped bordered hover>
  <thead>
    <tr>
      <th>Tipo</th>
      <th>Exemplos</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Textos (string)</td>
      <td>“Brasil”, “João”, ‘tartaruga'</td>
    </tr>
    <tr>
      <td>Números decimais (float)</td>
      <td>3.1415926536</td>
    </tr>
    <tr>
      <td>Números inteiros (int)</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Boleano (bool)</td>
      <td>True, False</td>
    </tr>
  </tbody>
</Table>
<p>Muitas vezes é preciso saber qual o tipo de dado na variável para que se possa aplicar os comandos corretos.</p>
<p>Suponha que você queira printar na tela o saldo final de uma aplicação financeira de R$ 100 que rendeu 20% ao ano durante 5 anos.
  Você atribuiu o resultado em uma variável chamada <code>X</code> e gostaria de printar a seguinte mensagem: <code>Saldo final: R$X</code>.</p>
<p>Você poderia tentar algo como:</p>
<CodeViewer>X = 100*1.2**5</CodeViewer>
<CodeViewer>print ("Saldo final: R$" + X)</CodeViewer>
<p>Este comando geraria um erro pois você está tentando "somar" uma string (<code>"Saldo final: R$"</code>) com o número que está guardado dentro do <code>X</code>.
  É necessário converter o dado da variável <code>X</code> para string utilizando o comando <code>str()</code>. Assim, você poderá "somar" string com string.</p>
<p>Outros comandos semelhantes de conversão de tipos de dados são: <code>int()</code>, <code>float()</code> e <code>bool()</code>, que convertem para tipos específicos conforme a tabela apresentada.</p>