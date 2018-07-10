<?php
	include "public.php";

	$name = $_REQUEST["uname"];
	$pwd = $_REQUEST["upwd"];
	$phone = $_REQUEST["uphone"];

	$sql = "INSERT INTO `user`( uname, upwd, uphone) VALUES ('$name','$pwd','$phone')";

	$rows = mysqli_query($conn,$sql);

	if($rows){
		echo json_encode(array(
			"status"=>1,
			"info"=>"success"
		));
	}else{
		echo json_encode(array(
			"status"=>0,
			"info"=>"fail"
		));
	}





?>