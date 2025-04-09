<?PHP

function fibanacci($n)
{
	$num1 = 0;
    $num2 = 1;
  
  	for ( $i = 0; $i < $n; $i++ ) {
        echo $num1 . ", ";
        $num3 = $num1 + $num2;
        $num1 = $num2;
        $num2 = $num3;
    }
	return $f;
}
function fib($n)
{
    if ($n == 0)
        return 0;    
    else if ($n == 1)
        return 1;    

    else
        return (fib($n - 1) 
              + fib($n - 2));

}
function decToHex($num)
{
    $hex = dechex($num);
    return $hex;
}

$num = 8906;
$hexVal = decToHex($num);

echo "Hexadecimal Value: " . strtoupper($hexVal);

?>
<!-- Десятичные-->
<?php

    $decNum = 42;

    $binNum = decbin($decNum);

    echo "Binary Number: " . $binNum;

?>
