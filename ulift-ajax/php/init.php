<?php
/**
*此页面不应被客户端直接请求，需要被其它PHP页面包含
**/
header('Content-Type: application/json;charset=UTF-8');

$conn =mysqli_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS,SAE_MYSQL_DB);
$sql = "SET NAMES UTF8";
mysqli_query($conn, $sql);

$output = [];


