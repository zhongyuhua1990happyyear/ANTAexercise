<?php
	header("content-type:text/html;charset=utf8");
	$db_hostname = "localhost";
	$db_username = "root";
	$db_pwd = "root";
	$db_name = "anta";

	$conn = new mysqli($db_hostname,$db_username,$db_pwd,$db_name);

	if($conn->connect_error){
		die ("fail to connect".$conn->connect_error);
	};

	$conn->query("set names utf8");



?>