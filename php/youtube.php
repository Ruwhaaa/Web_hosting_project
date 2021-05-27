<?php
require("vendor/autoload.php");

function youtube($search): Google_Service_YouTube_SearchListResponse {
    $key = 'AIzaSyBHs1pw_wewYP1SkehcPcO_6HZgjOhxu7s';
    $client = new Google_Client();
    $client->setApplicationName('zozotube');
    $client->setDeveloperKey($key);

    $service = new Google_Service_YouTube($client);
    $queryParams = [
        'maxResults' => 12,
        'q' => $search
    ];
    return $service->search->listSearch('snippet', $queryParams);
}