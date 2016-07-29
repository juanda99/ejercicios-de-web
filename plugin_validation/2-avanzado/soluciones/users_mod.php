<?php
$request = trim(strtolower($_REQUEST['nombre']));
//sleep(2);
usleep(150000);
$users = array('asdf', 'Peter', 'Peter2', 'George');
$valid = 'true';
foreach($users as $user) {
	if( strtolower($user) == $request )
		$valid = '"Este usuario ya está en uso"';
}
echo $valid;
?>