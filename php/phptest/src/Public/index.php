<?php
require __DIR__."/../../vendor/autoload.php";

define('ROOT_PATH',__DIR__);
define('APP_PATH',__DIR__."/../");

//创建一个request 请求
$req= Symfony\Component\HttpFoundation\Request::createFromGlobals();


//获取该请求的方法类型
echo "Method:".$req->getMethod();

//获取 URI
echo $req->getRequestUri();

echo $req->get("a",'默认');
