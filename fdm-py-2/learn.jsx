<p>Em Python também é possível realizar operações arimitéticas utilizando comandos específicos.
  Você pode praticamente calcular o que você quiser! Confira os principais operadores na tabela a seguir.</p>

<Table striped bordered hover>
  <thead>
    <tr>
      <th>Operação</th>
      <th>Operador</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>adição</td>
      <td>+</td>
    </tr>
    <tr>
      <td>subtração</td>
      <td>-</td>
    </tr>
    <tr>
      <td>multiplicação</td>
      <td>*</td>
    </tr>
    <tr>
      <td>divisão</td>
      <td>/</td>
    </tr>
    <tr>
      <td>exponenciação</td>
      <td>**</td>
    </tr>
    <tr>
      <td>módulo</td>
      <td>%</td>
    </tr>
    <tr>
      <td>parte inteira</td>
      <td>//</td>
    </tr>
  </tbody>
</Table>
<p>Para executar as operações aritiméticas você pode utilizar os operadores combinados com a função <code>print</code>.</p>
<CodeViewer>
  {
    'print (2 + 2)\n' +
    'print (100 * 150)\n' +
    'print ((20 * 2.5)/2)'
  }
</CodeViewer><br />
<p>É necessário seguir a ordem correta das operações matemáticas:</p>
<ul>
  <li>1º Parêntesis</li>
  <li>2º Exponencial</li>
  <li>3º Multiplicações e Divisões (da esquerda para a direita)</li>
  <li>4º Somas e Subtrações (da esquerda para a direita)</li>
</ul><br />
<b>Arredondamentos</b>
<p>
  Você pode facilmente arredondar valores para casas decimais específicas utilizando a 
  função <code>round(valor, casas_decimais)</code>.</p>
<p>
  O campo <code>valor</code> indica o número a ser arredondado e o campo <code>casas_decimais</code>{' '}
  indica a quantidade de casas decimais.
  Veja o exemplo abaixo:
</p>
<CodeViewer>
  {
    '>>> print(round(100.43222111, 2))\n' +
    '100.42'
  }
</CodeViewer>

Observe que o valor foi arredondado para duas casas decimais.