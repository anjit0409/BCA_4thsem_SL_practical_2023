<?php


if(isset($_POST['logout'])){
    session_start();
    session_destroy();
}


header("Location: login.php");


