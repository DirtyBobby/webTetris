<?php
    session_start();

    if (isset($_COOKIE['user_id']) && isset($_COOKIE['user_name']))
    {
        //Загрузка личного кабинета
        require("profile.php");
        //Загрузка таблицы рекордов
        require("leaderboard.php");
    }
    else
    {
        //Загрузка блока авторизации
        require("login.php");
        
        //Загрузка игры
        //require("game.php")
        //Загрузка таблицы рекордов
        require("leaderboard.php");
    }
?>

<!DOCTYPE html>
<html lang = "en">
    <head>
        <meta charset = "UTF-8">
        <meta name = "viewport" content = "width = device - width, initial-scale = 1.0">
        <meta http-equiv = "X-UA-Compatible" content = "ie = edge">
        <title>WebTetris</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body class="space">
    </body>
</html>