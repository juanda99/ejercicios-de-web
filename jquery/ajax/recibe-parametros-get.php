<?php header('content-type: text/html; charset: utf-8');?>
Recibido el siguiente dato:
<br />
Nombre:
<?php echo $_GET["nombre"];?>
<br />
Edad:
<?php echo $_GET["edad"];?>

<?php /*Depuración: print_r($_GET);*/?>
