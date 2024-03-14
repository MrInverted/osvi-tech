<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates */

$token = "6972726086:AAGESZiWI2qLnuewBqX06XrnUT8XNK0gshY";
$chat_id = "-4129460744";

$arr = array();
$arr["Ім'я: "] = $_POST['name'];
$arr["Телефон: "] = $_POST['tel'];
$arr["Предмет: "] = $_POST['course'];
$arr["Питання: "] = $_POST['question'];

// Sending message
$txt = '';

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo "Данные успешно получены и обработаны.";
} else {
  echo "Ошибка при обработке данных";
};

?>