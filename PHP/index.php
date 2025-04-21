<?php
	$title = "PHP function";

	function exchange(&$a, &$b)// передача параметров по ссылке
	{
		$buffer = $a;
		$a = $b;
		$b = $buffer; 
	}

	function print_values($a,$b,$delimert = ';')
	{

		echo '<pre>';
		echo "$a\t$b$delimert";
		echo '</pre>';
	}
	function sum(...$values)
	{
		$sum=0;
		for($i=0; $i<count($values); $i++)
		{
			$sum+=$values[$i];
		}
		return $sum;
	}


	require 'index.view.php';
?>