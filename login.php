<?php
//Если нажата кнопка регистрации и все поля заполнены, то...
if (isset($_POST['register']) && isset($_POST['username']) && isset($_POST['password']))
{
    //Подключение к базе данных
    require_once("connection.php");

    $username = $_POST['username'];
    $password = $_POST['password'];

    $query = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
    $result = mysqli_query($connection, $query);

    if ($result)
    {
        $query = "SELECT * FROM users WHERE username='$username' and password='$password'";
        $result = mysqli_query($connection, $query) or die(mysqli_error($connection));
        $count = mysqli_num_rows($result);

        $user = mysqli_fetch_assoc($result);

        setcookie("user_id", $user['id']);
        setcookie("user_name", $user['username']);
        setcookie("user_gamescount", $user['gamescount']);
        setcookie("user_highscore", $user['highscore']);

        header("Location: index.php");

        $msg_success = "Registration completed successfully";
    }
    else
    {
        $msg_fail = "User with this username already exists";
        //echo "Пользователь с таким именем уже существует!\n";
    }
}
//Иначе если нажата кнопка входа в аккаунт, то...
else if (isset($_POST['signin']) && isset($_POST['username']) && isset($_POST['password']))
{
    //Подключение к базе данных
    require_once("connection.php");

    $username = $_POST['username'];
    $password = $_POST['password'];

    $query = "SELECT * FROM users WHERE username='$username' and password='$password'";
    $result = mysqli_query($connection, $query) or die(mysqli_error($connection));
    $count = mysqli_num_rows($result);

    if ($count == 1)
    {
        $msg_success = "Authorization was successful";

        $user = mysqli_fetch_assoc($result);

        setcookie("user_id", $user['id']);
        setcookie("user_name", $user['username']);
        setcookie("user_gamescount", $user['gamescount']);
        setcookie("user_highscore", $user['highscore']);

        header("Location: index.php");
    }
    else
    {
        $msg_fail = "Incorrect username or password";
        //echo "Неверное имя пользователя или пароль!";
    }
}
?>

<div class="usercontent">
    <form method="POST" action="index.php">
        <div class="authform">
            <h2>Authorization</h2>
            <input type="text" name="username" class="inputfield" placeholder="Username" required>
            <br>
            <input type="password" name="password" class="inputfield" placeholder="Password" required>
            <br>
            <div class="failed">
            <?=$msg_fail?>
            </div>
            <div class="success">
            <?=$msg_success?>
            </div>
            <div>
            <button type="submit" name="register" class="menubutton">Register</button>
            <button type="submit" name="signin" class="menubutton">Sign in</button>
            </div>
        </div>
    </form>
</div>