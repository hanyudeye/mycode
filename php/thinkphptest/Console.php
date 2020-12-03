<?php

namespace think;

class Console
{

    public function __construct($app)
    {
        $this->app = $app;
        $this->initialize();
        $this->start();
    }

    /**
     * 初始化
     */
    protected function initialize()
    {
        if (!$this->app->initialize()) {
            $this->app->initialize();
        }
        $this->makeRequest();
    }

    /**
     * 构造request
     */
    protected function makeRequest()
    {
        $url = $this->app->config->get('app.url', 'http://localhost');
        $components = parse_url($url);

        $server = $_SERVER;
        if (isset($components['path'])) {
            $server = array_merge($server, [
                'SCRIPT_FILENAME' => $components['path'],
                'SCRIPT_NAME' => $components['path']
            ]);
        }
    }
}
