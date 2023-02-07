<?php

$txt = '{ "name": "hein htet zan", "age": 28, "gender": "male", "status": false }';

var_dump(json_decode($txt)->name);
