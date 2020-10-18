<?php
	$values = file_get_contents('count.txt');
	$array = explode(',', $values);
	
	$date1 ="2018-02-02 15:59:43";
	
	$array[2] = date('Y-m-d H:i:s');
	$array[0] = $array[0]+1;
	$array[1] = $array[1]+1;
	
	$values = implode (", ", $array);
	file_put_contents('count.txt', $values);
	
	header('Content-Type: application/json');
	echo json_encode($array);	
?>