<head>
<link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="board">
    <h2>Leaderboard</h2>
    <?php
    require_once("connection.php");

    $query = "SELECT * FROM users ORDER BY highscore DESC";
    $result = mysqli_query($connection, $query) or die(mysqli_error($connection));
    $count = mysqli_num_rows($result);
    
    $place = 1;

    echo "<table>
        <tr>
        <th>Username</th>
        <th>Highscore</th>
        </tr>";
    
    while ($row = mysqli_fetch_row($result)) {
        echo "<tr>
            <td>$place. $row[1]</td>
            <td>$row[4]</td>
            </tr>";
        $place++;
    }

    echo "</table>";

    ?>
    </div>
</body>