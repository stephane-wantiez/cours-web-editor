<?php
session_name('COURSWEB');
if(isset($_REQUEST['SID'])){
	session_id($_REQUEST['SID']);
}
session_start();