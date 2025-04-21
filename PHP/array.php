<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title></title>
</head>
<body>
<?php
    $range = range(0,100);
    shuffle($range);
    $array = array_slice($range, 0,5);
    
    $array = array_filter($array);
    $avg = array_sum($array)/count($array);

    //2.
    $arr2 = array();
    for($i=0; $i<10; $i++)
    {
        $arr2=rand(25,30);
    }
    // вывод повторений
    $lookup = array();
    foreach($array as $v) {
        if (!isset($lookup[$v]))
            $lookup[$v] = false;
        else if ($lookup[$v] == false) {
        echo "Duplicate $v\n";
        $lookup[$v] = true;
    }
}


    print_r($array);
    print_r("array sum = ".array_sum($array)."\n");
    print_r("array min = ".min($array)."\n");
    print_r("array min = ".max($array)."\n");
    echo '<hr>';

    print_r($arr2);
?>
</body>
</html>