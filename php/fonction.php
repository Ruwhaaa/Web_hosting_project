<?php
function parser($parse) {
    if (isset($parse) && !empty($parse)) {
        $check = TRUE;
        return $check;
    } else {
        $check = FALSE;
        return $check;
    }
}
