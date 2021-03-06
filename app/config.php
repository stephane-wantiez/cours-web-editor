<?php
/******* C:\workspace\cours-web-editor/app/config/01-define.php *******/

define('NL', "\n");
define('TAB', "\t");
define('CR', "\r");
define('BR', '<br/>');

define('ENCRYPT_ENABLED', false);

define('PROJECT_PATH', realpath(__DIR__.'/..').'/');

define('WEB_STATIC_PATH', PROJECT_PATH.'web-static/');
define('WEB_PATH', PROJECT_PATH.'web/');
define('VENDOR_PATH', PROJECT_PATH.'vendor/');
define('APP_PATH', PROJECT_PATH.'app/');

define('TEMPLATES_PATH', APP_PATH.'templates/');
define('SRC_PATH', APP_PATH.'src/');
define('CONFIG_PATH', APP_PATH.'config/');
define('TOOLS_PATH', APP_PATH.'tools/');

define('JS_VERSION', '');
define('CSS_VERSION', '');


/******* C:\workspace\cours-web-editor/app/config/10-declare-namespace.php *******/

include VENDOR_PATH.'Zend/Loader/StandardAutoloader.php';

$zendLoader = new \Zend\Loader\StandardAutoloader();
$zendLoader->register();

$zendLoader->registerNamespace('lib3dduo', VENDOR_PATH.'lib3dduo');

/******* C:\workspace\cours-web-editor/app/config/20-session.php *******/

session_name('COURSWEB');
if(isset($_REQUEST['SID'])){
	session_id($_REQUEST['SID']);
}
session_start();

/******* C:\workspace\cours-web-editor/app/config/dev/10-database.php *******/

define('DB_DRIVER', 'mysql');
define('DB_HOST', 'localhost');
define('DB_NAME', 'cours-web');
define('DB_USER', 'root');
define('DB_PASS', '');

define('DB_DSN', DB_DRIVER.':host='.DB_HOST.';dbname='.DB_NAME);


/******* C:\workspace\cours-web-editor/app/config/dev/10-uri.php *******/

define('WEB_STATIC_URI', '/cours-editor-static/');
