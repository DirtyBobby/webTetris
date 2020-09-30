<?php
    if (isset($_GET['game']))
    {
        header("Location: game.php");
    }
    else if (isset($_GET['history']))
    {
        header("Location: history.php");
    }
    else if (isset($_GET['logout']))
    {
        header("Location: logout.php");
    }
?>

<div class="usercontent">
    <form class="profile">
        <h2>Profile</h2>
        <br>
        Username: <?= $_COOKIE['user_name']?>
        <br>    
        Games count: <?= $_COOKIE['user_gamescount']?>
        <br>
        Highscore: <?= $_COOKIE['user_highscore']?>
        <br>
    </form>
    <form class="buttonspanel" method="GET">
        <button type= "submit" class="playbutton" name="game">Play Tetris</button>
        <button type= "submit" class="gameshistorybutton" name="history">History</button>
        <button type= "submit" class="logoutbutton" name="logout">Log out</button>
    </form>
</div>