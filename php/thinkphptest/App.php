<?php

/**
 * Summary
 * Route $route
 * Config $config
 * Cache $cache
 * Request $request
 * Http $http
 * Console $console
 * Env $env
 * Event $event
 * Middleware $middleware
 * Log $log
 * Lang $lang
 * Db $db
 */

class App extends Container
{
    const VERSION = '5.9';

    //应用调试模式
    protected $appDebug = false;

    /**
     * 应用开始时间
     * @var float
     */
    protected $beginTime;

    /**
     * 应用结束时间
     * @var float
     */
    protected $endTime;


    /**
     * 应用内存初始占用
     */
    protected $beginMem;

    public function __construct(string $rootPath = '')
    {
        $this->thinkPath = dirname(__DIR__) . DIRECTORY_SEPARATOR;
        $this->rootPath = $rootPath ? rtrim($rootPath, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR : $this->getDefaultRootPath();
        $this->appPath=$this->rootPath.'app'.DIRECTORY_SEPARATOR;
    }


    public function getDefaultRootPath()
    {
    }
}
