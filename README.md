Router
======

> Handles basic, asynchronous GET routing for the client-side.



## Installation
Router will build with its dependencies to `dist` when installed with `npm`.

```shell
# Dist located at node_modules/properjs-router/dist/
npm install properjs-router
```


## Usage
```javascript
// Router takes options for PushState
var router = new Router({
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