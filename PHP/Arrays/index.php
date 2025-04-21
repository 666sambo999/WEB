<?php
$title = 'Array'; 

$array1 = array(1,3,5,8,12,17); // явный вызов конструктора
$array2 = [24,34,45,56.45]; // объявление массива через неявный вызов 
$array3 = [1,2,3,4,5,6,7];
$array0 = [];

//$distant_to_sun['Mercury'] = 4600000;
//$distant_to_sun['Venus'] = 108000000;
//$distant_to_sun['Earth'] = 149000000;

$distance_to_sun = 
[
	'Mercury'	=>	46000000,
	'Venus'		=>	108000000,
	'Earth'		=>	149000000,
	'Mars'		=>	249000000,
	'Jupiter'	=>	777000000,
	'Saturn'	=>	1430000000,
];


$array2D = [
	[1,2,3,4,5],
	[23,34,56],
	[45,7,8,9,789]
];

function print_array($array)
{
	echo '<pre>';
	//for($i=0;$i<count($array); $i++)
		//echo "$array[$i]\t";
	foreach($array as $iterator)
		echo "$iterator\t";
	echo '</pre>';
}
function print_array_pre($array)
{
	echo '<pre>';
	print_r($array);
	echo '</pre>';
}

require 'index.view.php';
//require 'array.php';
?>
