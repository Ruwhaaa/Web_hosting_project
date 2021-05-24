<?php
require("fonction.php");
require("../vendor/autoload.php");

$parse = $_POST['search'];

$check = parser($parse);
echo $parse;

$client = new Google_Client();
$client->setDeveloperKey('AIzaSyBHs1pw_wewYP1SkehcPcO_6HZgjOhxu7s');
$youtube = new Google_Service_YouTube($client);

$response = $youtube->search->listSearch('snippet',
    ['q' => 'oui']);
var_dump($response);

if ($check === TRUE) {
    echo "ça rentre";


}