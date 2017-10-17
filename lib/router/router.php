<?php

namespace Router;

// Dictionary of supported filters and their patterns
const FILTERS = array(
    'c' => array(
        'title' => 'crop',
        'pattern' => '{w|int}x{h|int}[&{x|int},{y|int}]'
    ),
    'r' => array(
        'title' => 'resize',
        'pattern' => '{w}x{h}'
    ),
);

$uri = $_SERVER['REQUEST_URI'];

$dispatcher = new \Router\Dispatcher($uri, FILTERS);
$imageData = array(
    'id' => $dispatcher->id,
    'filters' => $dispatcher->parsedFilters
);


// Call image -> show($data);
