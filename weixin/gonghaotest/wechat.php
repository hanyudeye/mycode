<?php

class wechat{
    private $appid= "wx3b238e70544d300c";   
    private $appsecret= "08ad5c7a920832bcecae8f1e4f6c67d6";
    private $access_token= '39_HFC0MET5mxV44Bj8j8QD4BAzjwXokSAzUCPF8TbCRrBdyeXGfJ3OPpK_huXyXpbB5njLm1q9GM9PeoruK91D5CUgsmGhQ4tJgiJJWiq40Ww3teSmvhO-U4v5fHg7SvSO2iXMTkKizXip_pzFXLOcAGAOCF';
    
    public function get_access_token(){
        $url='https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='.$this->appid. '&secret='.$this->appsecret;

        $res=file_get_contents($url);
        print_r($res);
    }

    // 获取微信服务器IP地址
    public function get_domain_ip(){
        $url='https://api.weixin.qq.com/cgi-bin/get_api_domain_ip?access_token='.$this->access_token;
        echo  file_get_contents($url);
    }

    public function get_putong_message(){
        $msg=$_POST;
        file_put_contents("msg.txt",$msg, FILE_APPEND);  
    }


}
