<!DOCTYPE html>

<html lang="ru" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title></title>
</head>
<body>
    <h1> 
    <?=$title?>
     <h1>
    <?php
        [$a,$b] = [2,3];
        print_values($a,$b,'.');
        exchange($a,$b);
        print_values($a,$b,'.');
        echo '<hr>';
        echo sum(3,4,5,6);
    ?>

   
</body>
</html>