<?php
	$for = "Introduction to PHP"; // так же как include страивает содежимое файла в наш файл
	//закрывающая метка в *РНР - файле не обяз.
	define ('NAME','value');
	//const PI = 3.14;
	const PREFIX = 'OPTION';

	$int=1024;
	$heredoc_string = <<<HEREDOC_STRING
		"Heredoc"-string (RAW-строка)-это строка с форматированием.
		Такие строки игнорируется Esc - последовательности, и выводятся точно также как и задаются.
			<code>
				$name<<<NAME
					Содержимое строки...
									...
									...
				NAME
			</code>
			Heredoc-раскрывают переменные, т.е. поддерживат интерполяцию: <code> $int </code>
HEREDOC_STRING;
echo '<br';

$nowdoc_string = <<<'NOWDOC_STRING'
	"Nowdoc" -строка; Отличие от heredoc dв том, что не поддерживает интерполяцию: <code> $int </code>
NOWDOC_STRING;
	
	$escape_sequences = <<< ESCAPE_SEQUENCES
	<h3> Escape-последовательности: <h3>
	<strong> Escape-последовательности </string> &hyphen; это символы, эканированные символом '\'
	<strong> Backslash ('\') </string> &mdash; это символ отмены спец значения другого символа;
	<ul>
		<li><code>\"</code>&mdash; отменяет специальное значение двойных кавычек;</li>
		<li><code>\'</code>&mdash; отменяет специальное значение одинарных кавычек;</li>
		<li><code></code></li>
	</ul>
	Но, некоторым символам <code>'\'</code> наоборот, придает специальное значение, например:
	<ul>
		<li><code>'\n'</code> &mdash; переход в начало следующей строки;</li>
		<li><code>'\t'</code> &mdash; символ табуляции;</li>
	</ul>
ESCAPE_SEQUENCES;
	require 'function.php';
	require 'index.view.php';
?>