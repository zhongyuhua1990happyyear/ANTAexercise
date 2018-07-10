<?php
	include "public.php";

	$name = $_REQUEST["uname"];
	$pwd = $_REQUEST["upwd"];
	

	$sql = "SELECT * FROM `user` WHERE uname = '$name'";

	$res = mysqli_query($conn,$sql);

	$n = mysqli_num_rows($res);

	if(!$n){
		echo json_encode(array(
			"status"=>0,
			"info"=>"fail"
		));
	}else{
		$data = mysqli_fetch_assoc($res);

		if($data["upwd"] == $pwd){
			echo json_encode(array(
				"status"=>1,
				"info"=>"成功"
			));
		}else{
			echo json_encode(array(
				"status"=>2,
				"info"=>"密码错误"
			));
		}
	}

?>