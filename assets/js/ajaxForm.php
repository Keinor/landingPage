<?php
$name = $_POST["name"];
$phone = $_POST["phone"];
$email=$_POST["email"];


     $errors=array();
if($_POST['name']== '')
    {
    $errors[]='Введите Имя!';
}
if($_POST['phone']== '')
    {
    $errors[]='Введите номер!';
}
if($_POST['email']== '')
    {
    $errors[]='Введите почту!';
}
    if(empty($errors))
        echo 'OK';
    else{
        echo '<div style="color: crimson;">'.array_shift($errors).'</div><hr>';

    }











