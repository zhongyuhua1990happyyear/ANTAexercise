<?php
	include "public.php";


	$phone = $_REQUEST["uphone"];

	

$sql = "SELECT * FROM `user` WHERE uphone = '$phone'";

$res = mysqli_query($conn,$sql);

$m = mysqli_num_rows($res);

if(!$m){
	echo json_encode(array(
			"status"=>0,
			"info"=>"fail"
		));
}else{
	echo json_encode(array(
				"status"=>1,
				"info"=>"succes"
			));
}

?>