<?php
    if(isset($_POST['submit'])){
        if(isset($_POST['username']) && isset($_POST['password'])){
            $userinput_username = $_POST['username'];
            $userinput_password = $_POST['password'];

            $actual_username = "reliance";
            $actual_passsword = "pass_ria";

            if($userinput_username == $actual_username){
                if($userinput_password == $actual_passsword){
                    session_start();
                    $_SESSION['username'] = $userinput_username;
                    header("Location: home.php");
                }
                else{
                    die("Invalid Password");
                }
            }
            else{
                die("Invalid Username");
            }
        }
        else{
            die("No username or password");
        }
    }

