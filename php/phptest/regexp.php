<?php

$pattern="/^(http:\/\/)?([^\/]+)/i";

if(preg_grep($pattern,["http://www.php.net/index.html"],0)){
    echo "匹配";
}else{
    echo "不匹配";
}