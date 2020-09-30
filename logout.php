<?php
    session_start();
    
    setcookie("user_id", "", time() - 1);
    setcookie("user_username", "", time() - 1);
    setcookie("user_gamescount", "", time() - 1);
    setcookie("user_highlight", "", time() - 1);

    unset($_SESSION['user']);

    header('Location: index.php');
    
    exit();
?>