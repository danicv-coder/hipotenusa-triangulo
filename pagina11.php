<?php
header('Content-Type: text/html; charset=utf-8');
$cuadrado=$_REQUEST['numero']*$_REQUEST['numero2'];
$hipotenusa = sqrt(pow($_REQUEST['numero'], 2) + pow($_REQUEST['numero2'], 2));
echo $hipotenusa;
?>