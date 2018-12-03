<?php
$name = $_POST["name"];
$phone = $_POST["phone"];
$email=$_POST["email"];
$reg ='/^(8|\+7)\(?\d{3}\)?\d{3}[-]\d{4}/';
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
if (!filter_var($email, FILTER_VALIDATE_EMAIL))
{
    $errors[]='Неккоректный адрес почты!';
}
if (!preg_match( $reg,$phone))
{
    $errors[]='Неккоректный номер!';
}

    if(empty($errors))
        echo 'OK';
    else{
        echo '<div style="color: crimson;">'.array_shift($errors).'</div><hr>';

    }











