<!DOCTYPE html>

<html lang="ru">
<head>
    <meta encoding="UTF-8" />
    <title><?= $title; ?></title> 
</head>
<body>
    <h1> <?= $title; ?></h1>

    <?php
        echo "<hr>";
        for ($i=0; $i<count($array1);$i++)
        {
            echo "$array1[$i]\t";
        }
        echo "<hr>";
    ?>
    <pre><?=
        //var_dump($array1);
        //var_dump($array3);
        //print_r ($array3);
        //print_r ($array1);
        $array2[]=233;
        print_r ($array2);
        //unset($array2[2]);
        //print_r($array2);
        echo '<hr>';
        foreach($array3 as $iterator)
        {
            echo "$iterator\t"; 
        }
        echo '<hr>';
         foreach($array2 as $key =>$value)
        {
            echo "array2[$key]:\t$value;\n"; 
            // echo $iterator;
        }
        ?>
     </pre>
     <pre>
        <?= 
            $distant_to_sun['Earth'];
            print_r($distant_to_sun, true);
            echo '<hr>';
            //var_dump($array2D);
            //print_r($array2D);
            foreach($array2D as $iterator)
            {
                foreach($iterator as $iterator)
                {
                    echo "$iterator\t";
                }
                echo '<br>';
            }
            echo '<hr>';
        ?>
     </pre>

     <?php
        array_unshift($array1, 2);
		array_unshift($array1, 1);
		$array1[] = 340;
		array_push($array1, 550);
		print_array($array1);
		$keys = array_keys($array1);// массив ключей
		print_array($keys);
		echo array_key_exists(5, $array1);
		echo in_array(13.21, $array1);

        array_pop($array1);
		//array_pop($array1);
		array_shift($array1);
		array_shift($array1);
		print_array($array1);
		echo '<hr>';
        $array0 = array_merge($array1, $array2);
		print_array($array1);
		print_array($array2);
		print_array($array0);
		echo '<hr>';
     ?>

</body>
</html>