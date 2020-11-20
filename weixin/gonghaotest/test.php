<?php

include_once("wechat.php");

$wc=new wechat();

// $wc->get_access_token();

// $wc->get_domain_ip();
print_r(file_get_contents('php://input'));die();

$msg = $_POST;
file_put_contents("msg.txt", $msg, FILE_APPEND);  
// $wc->get_putong_message();
