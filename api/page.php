<?php
//获取分页，只有几页内容

$page=$_GET['page'];

if($page==1){
    $content = [];
    for ($i = 0; $i < 10; $i++) {
        $content[$i] = ['id' => $i, 'title' => "hello" . $i];
    }

    $data = ['error' => '0', 'data' => $content];
    echo json_encode($data);
}

if ($page == 2) {
    $content = [];
    for ($i = 10; $i < 20; $i++) {
        $content[$i] = ['id' => $i, 'title' => "hello" . $i];
    }
    $data= ['error' => '0', 'data' => $content];
    echo json_encode($data);
}

if ($page == 3) {
    $content = ['error'=>'1','data'=>''];
    echo json_encode($content);
}
