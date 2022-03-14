<p> A <b>Lista</b> é uma <b>estrutura de dados</b> flexível que pode ser incrementada ou decrementada e que aceita uma ampla
  quantidade de <b>variáveis</b>.</p>

<p>Exemplo: <code>lista = [25,54,39,23,41,32,19,21]</code></p>

<p>Os índices da <b>lista</b> (as posições de cada elemento) vão de <code>0</code> a <code>n-1</code>, sendo <code>n</code> a quantidade de elementos da <b>lista</b>.</p>

<p><b>IMPORTANTE:</b> Os índices atribuídos não devem ser menores que <code>0</code> ou maiores que <code>n-1</code>, caso você
  tente atribuir um valor à um elemento de índice menor que <code>0</code> em uma <b>lista</b> você receberá o erro <code>Stack UnderFlow</code> e se
  você tentar atribuir um valor a um elemento de uma <b>lista</b> cujo índice seja maior que <code>n-1</code> você receberá a mensagem de erro <code>Stack OverFlow</code>.</p>

<p>A <b>lista</b> é uma <b>Estrutura de Dados</b> mãe de várias outras estruturas comuns no meio acadêmico, os tipos de lista mais populares são as <b>pilhas</b> e as <b>filas</b>.</p>

<p>A <b>pilha</b> é um tipo de <b>lista</b> que implementa a metodologia <b>LIFO</b>, que significa <b>"Primeiro a entrar, último a sair."</b>, em outras
  palavras, o primeiro elemento vai ser o último a ser capturado.Por outro lado a <b>fila</b> implementa a metodologia <b>FIFO</b>, ou
  seja, <b>"Primeiro a entrar, primeiro a sair."</b>, na <b>fila</b> o primeiro elemento será o primeiro a ser capturado. </p>

<p><b>OBSERVAÇÃO: </b>Vale salientar que essas restrições de manipulação de elementos não se aplicam á <b>lista</b> básica do <code>Python</code>, é
  possível utilizar os comandos comuns à essa estrutura (no caso <code>pop</code> e <code>push</code>)  mas, não é obrigatório e
  normalmente utilizamos na programação o próprio índice para manipular essas <b>variáveis</b>.</p>

<p>O comando para declarar uma lista é  <code>lista = [43,87,31,23,16,98,45]</code>, os elementos são totalmente personalizáveis,
  podem ser tipos primários como : <code>float</code>,<code>string</code>,<code>char</code> e <code>boolean</code> ou tipos derivados
  como: <code>dict</code>,<code>matriz</code> e até mesmo outras <code>listas</code>.</p>
<p>Caso seja necessário manipular uma <b>lista</b> que já existe podemos utilizar o comando <code>lista.remove(elemento_a_ser_removido)</code> para remover um elemento da <b>lista</b> e o comando <code>lista.append(elemento_a_ser_adicionado)</code> para adicionar um elemento na <b>lista</b>.</p>
<p>Também há situações em que queremos verificar cada elemento de uma <b>lista</b>, nesse caso é necessário utilizarmos o laço de repetição <code>for</code> ou <code>while</code>, conforme o exemplo abaixo:</p>

<CodeViewer>{`for i,elemento in enumerate(lista):
  if lista[i] % 2 == 0:
    print("É par!")
  else:
    print("É ímpar!")`}</CodeViewer>

<p>Caso seja necessário saber quantas vezes um certo elemento aparece na <b>lista</b> utilize o comando <code>lista.count(elemento_desejado)</code>.</p>

<p>O comando para exibir o tamanho de uma <b>lista</b> é o comando <code>len(lista)</code>, o tamanho se refere á quantidade total de elementos.</p>

<p>O comando para converter uma <b>Estrutura de Dados</b> iterável (como o <b>dicionário</b>) em uma <b>lista</b> é o comando <code>list(dicionario)</code>.</p>

<p>O comando para eliminar elementos idênticos de uma <b>lista</b> é <code>lista = list(set(variavel_lista))</code>.</p>