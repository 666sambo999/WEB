<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <?php $title="Introdution to PHP"?>
    <meta charset="utf-8" />
    <title><?php echo $title?></title>
</head>
<body>
    <h1 style="color: blue;text-align:center">
    <?php echo "Hello PHP on IIS Windows"?>
    </h1>
    <p> содержание файла </p>
    <h2><?php echo $title?></h2> 
    <p>Statements<p>
    <!--<p> $name = value(обявление переменной)<p>-->
    <h2>Function:</h2>

    <?php 
        echo 'var_dump()';
        echo var_dump(100); 
        echo NAME;
        echo '<br>';
        //die();//убирает выполнение скрипта
        //echo PI;
        echo 'NULL';
        echo '<p>';
        $variable = null;
        echo '<p>';
        echo $variable;
        unset($variable);
        echo '<p>';
        $variable = 123;
        echo '<p>';
        echo $variable;
        echo '<p>';
        echo 123 === '123';// сравнение типов данных
        for ($i=0; $i<10; $i++)
        {
            //echo '<p>';
                echo $i;
            //echo '<p>';
        }
        echo '<p>';
        if (true)
        {
            //const PI = 3.14; не можем объявить
            define ('PI', '3.14');
            echo PI;
        }
        echo '<br>';
        define(PREFIX . '_1', '1');
        define(PREFIX . '_2', '2');
        define(PREFIX . '_3', '3');
        echo OPTION_1;
        echo '<br>';
        $int = 1024;
         echo $int;
    ?>
    <?PHP print_value('Test value', 1024)?>
    <?PHP echo "5 != ", factorial(5)?>
    <require>
    <?php echo PHP_INT_SIZE; ?>

    <?php echo PHP_FLOAT_MAX; ?>
    <?php echo PHP_FLOAT_MIN; ?>

     string:  <?php echo strlen('Hello') ?>
    <?php echo '<p>'?>
    <?php echo '<hr>'?>
    
     <?php echo $heredoc_string; ?>
    <?php echo '<p>'?><?php echo '<hr>'?>
    <?php echo $nowdoc_string;?> 
    <?php 
        echo $escape_sequences;
    ?>
    <?PHP
    // составные присваивания: 
        $i=3;
        $j=2;
        $i=$j;
        echo $i;
        $i *=$i;
        echo $i;
        echo '<hr>';?>
        <li>Операторы сравнения: <code>==, !=, >, <, >=, <=, <b>===, !==</b></code>
            <li>Логические операторы: !, ||, &&</li>
            <li>Побитовые операторы:
            <code>
                <ul>
                    <li>~   NOT <?PHP echo ~5;?> </li>
                    <li>|    OR <?PHP echo 5 | 3;?></li>
                    <li>&   AND <?PHP echo 5 & 3?></li>
                    <li>^   XOR</li>
                    <li><<  Shift left</li>
                    <li>>>  Shift right</li>
                </ul>
            </code>
        </li>
    
</body>
</html>