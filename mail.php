<?php

  $send = $_REQUEST['send'];
  $to = 'callback@hals-development.com';
  
  if (isset($send)) {
    $data = $_REQUEST['data'];
    include_once ('lib/mail.class.php');
    $mail = new mail('utf-8');
    $mail -> To($to);
    $mail -> Subject('Обратная связь с сайта Театральный дом');
    $mail -> Body('Имя: '.$data['name']."\n".'Телефон: '.$data['phone']."\n".'Удобное время: '.$data['period']);
    $mail -> Priority(3);
    $mail -> Send();
    echo $mail -> Get();
  }
  
  $mail -> Get();

?>