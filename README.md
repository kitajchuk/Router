Router
======

> Handles basic, asynchronous GET routing for the client-side.



## Installation
```shell
npm install properjs-router --save-dev
```


## Usage
```javascript
// Router takes options for PushState
var Router = require( "properjs-router" ),
    router = new Router({
        async: true,
        caching: true,
        preventDefault: true
    });

// Bind router to page
router.bind();

// Some routes to match, same style as MatchRoute
var routes = [
    // Known route
    "some/route",
    
    // Unknown route
    "another/:slug",
    
    // Unknown route, enforce Number on last uri
    "also/:slug/:num!num"
];

// Apply the GET listener to routes
for ( var i = routes.length; i--; ) {
    router.get( routes[ i ], [onRouterGETHandler] );
}

// Bind to preget events
router.on( "preget", [onPreGetRequest] );
```


### Ignore Links
You can optionally add a `js-router--ignore` className to any link and Router will not pick it up.