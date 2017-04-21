<?php
@$uName   = $_REQUEST['uName'] or die('error');
@$myEmail = $_REQUEST['myEmail'] or die('error');
@$myText  = $_REQUEST['myText'] or die('error');

header('Content-Type: application/json;charset=UTF-8');

$conn = mysqli_connect('127.0.0.1','root','','msg',3306);
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);
$output = [];
 $sql = "INSERT INTO t_msg VALUES (NULL,$uName,$myEmail,$myText)";
 mysqli_query($conn,$sql);
 $output['code'] = 1;
 echo json_encode($output);
?>