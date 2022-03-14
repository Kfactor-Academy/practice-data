<p><h3><b>Métodos de Arquivos</b></h3></p>

<p>Normalmente utilizamos <b>arquivos</b> para armazenar algo que foi processado que não queremos que seja perdido quando o computador
  for desligado (porque dessa forma é armazenado na memória principal) e para capturar dados rapidamente ao invés de digitar um
  por um, por isso é extremamente importante conhecer comandos de manipulação de <b>arquivos</b> em <code>Python</code>.</p>

<p>O primeiro comando que conheceremos é o <code>open('caminho_do_arquivo', 'r')</code>, ele é responsável por abrir uma
  conexão entre o programa e o <b>arquivo</b> especificado, o segundo parâmetro do comando especifica qual opção você quer utilizar no <b>arquivo</b>, existem várias mas, as mais comuns são <code>r</code> e <code>w</code>, <code>r</code> significa <code>read</code> e é utilizada quando queremos apenas ler o conteúdo do <b>arquivo</b> e não alterá-lo, caso seja preciso alterar um <b>arquivo</b> ou até mesmo criá-lo através do programa é preciso utilizar a
  opção <code>w</code>.</p>

<p>É de suma importância que após a utilização do <b>arquivo</b> no programa você utilize o comando <code>variavel_que_contem_o_arquivo.close()</code> para fechá-lo, caso contrário haverão erros de compilação.</p>

<p>Para ler o <b>arquivo</b> todo e armazená-lo em uma única <code>string</code> é necessário utilizar o comando <code>variavel_que_contem_o_arquivo.read()</code> mas, se por alguma razão for preciso armazenar o texto do <b>arquivo</b> em uma
  lista cujos elementos sejam as linhas você deve utilizar o comando <code>variavel_que_contem_o_arquivo.readlines()</code>.</p>

<p>Contudo, você pode querer analisar cada palavra do texto individualmente, nesse caso você deve ler todo o texto do <b>arquivo</b> em uma <code>string</code> e depois utilizar o comando <code>string_com_texto_do_arquivo = string_com_texto_do_arquivo.split(' ')</code>, esse comando utiliza o caractere ' ' como separador e assim consegue pegar cada palavra e armazenar no <code>vetor</code>.</p>

<p>Então para finalizar falaremos do comando <code>string_com_texto_do_arquivo.writelines()</code>, ele é responsável por
  escrever no <b>arquivo</b> uma <code>string</code> e dessa forma fazer alterações no <b>arquivo</b>.</p>