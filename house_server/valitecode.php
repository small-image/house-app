<?php
	require_once "./connect.php";
	require_once './cross.php';
	
	$str = '';
	$count = 6;
	$i = 0;
	while($i++ < $count){
		$str .= mt_rand(0,9);

		
	}
	echo $str;
	
?>