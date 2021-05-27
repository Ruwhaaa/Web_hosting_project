<?php

require("fonction.php");

session_start();

$parse = $_POST['search'];

$check = parser($parse);
if ($check === TRUE) {
    $_SESSION["check"] = 'CHECK';
    $_SESSION["search"] = $parse;
    redirect();
}