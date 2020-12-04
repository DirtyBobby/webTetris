<?php
    if (isset($_POST['score']))
    {
        //Подключение к базе данных
        require_once("connection.php");

        $score = $_POST['score'];
        $user_id = $_COOKIE['user_id'];
        $highscore = $_COOKIE['user_highscore'];
        $gamescount = $_COOKIE['user_gamescount'];

        //gamescount увеличивается на 1, так как пользователь играл в игру
        $gamescount = $_COOKIE['user_gamescount'] + 1;
        setcookie('user_gamescount', $gamescount);

        //Если highscore < score, значит, что пользователь поставил новый рекорд и необходимо заменить значение переменной highscore на score
        if ($_COOKIE['user_highscore'] < $score)
        {
            setcookie('user_highscore', $score);
            //Изменение информации о пользователе (gamescount и highscore)
            $query = "UPDATE users SET gamescount='$gamescount', highscore='$score' WHERE id='$user_id'";
        }
        else 
        {
            //Изменение информации о пользователе (gamescount)
            $query = "UPDATE users SET gamescount='$gamescount' WHERE id='$user_id'";
        }

        $result = mysqli_query($connection, $query);
        
        if ($result)
        {
            $msg_access1 = "User information updated successfully";
        }
        else
        {
            $msg_failed1 = "Failed to update user information";
        }

        //Новая запись в базе данных всех игр
        $query = "INSERT INTO game_scores (score, id) VALUES ('$score', '$user_id')";
        $result = mysqli_query($connection, $query);

        //Удаление куки, хранящей счёт пользователя
        setcookie("score", "", time() - 3600);
        unset($score);

        
        $responce['score'] = $_POST['score'];
        if ($result)
            $responce['message'] = "Game information has been successfully written to the server";
        else
            $responce['message'] = "Failed to write game information to the server";
        return $responce;
    }
?>