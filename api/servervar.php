<?php 
// echo $_SERVER["DOCUMENT_ROOT"];

$protocol = stripos($_SERVER['SERVER_PROTOCOL'], 'https') === true ? 'https://' : 'http://';
echo  $protocol. $_SERVER['SERVER_NAME'];
