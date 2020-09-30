<head>
<link rel="stylesheet" href="style.css">
</head>
<body class="space">
<div class="board">
<form action="index.php">
    <button class="menubutton">Back to profile</button>
</form>
<h1>History of your games</h1>
<?php
    require_once("connection.php");

    $user_id = $_COOKIE['user_id'];

    $query = "SELECT * FROM game_scores WHERE id='$user_id'";
    $result = mysqli_query($connection, $query) or die(mysqli_error($connection));
    $count = mysqli_num_rows($result);

    echo "<table>";

    while ($row = mysqli_fetch_row($result)) {
        echo "<tr>
            <td>$row[0]</td>
            <td>$row[2]</td>";
    }

    echo "</table>";

    ?>
</div>
</body>