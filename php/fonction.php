<?php

function parser($parse) {
    if (isset($parse) && !empty($parse)) {
        return TRUE;
    } else {
        return FALSE;
    }
}

function db_connect() {
    $DB_HOSTNAME = "localhost:3306";
    $DB_BASENAME = "mycar_db";
    $DB_USERNAME = "root";
    $DB_PASSWORD = "";

    $connection = new PDO(
        "mysql:host=$DB_HOSTNAME;dbname=$DB_BASENAME;charset=UTF8",
        $DB_USERNAME,
        $DB_PASSWORD,
        [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
        ]
    );
    return ($connection);
}

function redirect() {
    header('Location: ../index.php');
}