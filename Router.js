import Historia from "properjs-historia";
import MatchRoute from "properjs-matchroute";
import Controller from "properjs-controller";



let triggerEl;
let activeEl;
const initDelay = 200;
const rHTTPs = /^http[s]?:\/\/.*?\//;
const rFiles = /\.(jpg|jpeg|png|gif|pdf|csv|txt|md|doc|docx|xls|xlsx|webm|mp4|mp3)$/gi;
const rDomain = new RegExp( document.domain );




export default class Router extends Controller {
    constructor ( options ) {
        super();

        this._options = {
            async: true,
            proxy: false,
            caching: true,
            handle404: true,
            handle500: true,
            historyOptions: {}
        };

        // Normalize usage options passed in
        options = (options || {});

        // Merge usage options with defaults
        for ( let i in options ) {
            this._options[ i ] = options[ i ];
        }

        this._matcher = new MatchRoute();
        this._history = new Historia( this._options.historyOptions );
        this._callbacks = [];
        this._responses = {};
        this._ready = false;
        this._isRouting = false;
    }


    bind () {
        // Ensure this first cache URL is clean as a whistle
        const url = window.location.href.replace( window.location.hash, "" );

        // Bind GET requests to links
        document.addEventListener( "click", ( e ) => {
            this._handleClick( e );

        }, false );

        // Bind popstate event for history
        this._history.on( "popstate", ( url, state ) => {
            this._handlePopstate( url, state );
        });

        // Fire first route
        // Async this in order to allow .get() to work after instantiation
        if ( this._options.async && this._options.handle404 ) {
            this._route( url, ( /*response, status*/ ) => {
                this._ready = true;
            });

        // Shim a little and bypass true XHR here if not handling 404s
        } else {
            setTimeout(() => {
                // https://developer.mozilla.org/en-US/docs/Web/API/XMLSerializer
                const doc = new XMLSerializer().serializeToString( document );
                const xhr = {
                    status: 200,
                    responseText: doc,
                };

                this._fire( url, xhr, xhr.status );
                this._cache( url, xhr );
                this._ready = true;

            }, initDelay );
        }
    }


    trigger ( url ) {
        if ( !triggerEl ) {
            triggerEl = document.createElement( "a" );
        }

        triggerEl.href = url;

        this._handleClick( triggerEl, {
            target: triggerEl,
        });
    }


    get ( route, callback ) {
        // Add route to matcher
        this._matcher.config( [route] );

        // Bind the route to the callback
        if ( callback._routerRoutes ) {
            callback._routerRoutes.push( route );

        } else {
            callback._routerRoutes = [route];
        }

        // When binding multiple routes to a single
        // callback, we need to make sure the callbacks
        // routes array is updated above but the callback
        // only gets added to the list once.
        if ( callback._routerRoutes.length === 1 ) {
            // this.on( "get", callback );
            this._callbacks.push( callback );
        }
    }


    getActiveEl () {
        return activeEl;
    }


    getRouteForUrl ( url ) {
        return this._matcher._cleanRoute( url );
    }


    getRouteDataForUrl ( url ) {
        return this._matcher.parse( url, this._matcher.getRoutes() ).params;
    }


    _preventDefault ( e ) {
        if ( e.preventDefault ) {
            e.preventDefault();

        } else {
            e.returnValue = false;
        }
    }


    _handleClick ( e ) {
        const el = e.target;
        const elem = (el.matches( "a" ) ? el : el.closest( "a" ));
        const isMatched = elem && this._matcher.test( elem.href );
        const isDomain = elem && rDomain.test( elem.href );
        const isProxy = elem && this._options.proxy && this._options.proxy.domain;
        const isHashed = elem && elem.href.indexOf( "#" ) !== -1;
        const isIgnore = elem && elem.className.indexOf( "js-router--ignore" ) !== -1;
        const isMetaKey = elem && e.metaKey;
        const isBlank = elem && elem.target === "_blank";
        const isFile = elem && isDomain && elem.href.match( rFiles );

        // 0.1 => Ensure url passes MatchRoute config
        // 0.2 => Ensure url is on the Document's Domain
        // 0.X => Allow proxy domain's to go through this checkpoint
        if ( (isMatched && isDomain) || isProxy ) {
            // 0.3 => Ensure url is not a #hash
            // 0.4 => Ensure the element does not contain a `js-router--ignore` className
            // 0.5 => Ensure the Event.metaKey is not TRUE - Command+click
            // 0.6 => Ensure the element target is not for a new tab
            // 0.7 => Ensure url is not a file link on the same document domain
            if ( !isHashed && !isIgnore && !isMetaKey && !isBlank && !isFile ) {
                activeEl = elem;

                this._preventDefault( e );

                if ( !this._isRouting ) {
                    this._route( elem.href );
                }
            }
        }
    }


    _handlePopstate ( url/*, state*/ ) {
        // Hook around browsers firing popstate on pageload
        if ( this._ready ) {
            let dat;

            for ( let i = this._callbacks.length; i--; ) {
                dat = this._matcher.parse( url, this._callbacks[ i ]._routerRoutes );

                if ( dat.matched ) {
                    break;
                }
            }

            const data = {
                route: this._matcher._cleanRoute( url ),
                response: this._responses[ url ],
                request: dat,
                status: this._responses[ url ].status,
            };

            this.fire( "popget", data );

        } else {
            this._ready = true;
        }
    }


    _route ( url, callback ) {
        const urls = {
            // For XHR
            request: url,

            // For history and cache
            original: url,
        };

        this._isRouting = true;

        this._matchUrl( urls.original );

        // Handle proxy first since we modify the request URL
        // Basically, just piece together a URL that swaps this domain with proxy domain
        if ( this._options.proxy && this._options.proxy.domain ) {
            // Use window.location.host so it includes port for localhost
            urls.request = (this._options.proxy.domain + "/" + urls.request.replace( rHTTPs, "" ));
        }

        this._getUrl( urls, ( response, status ) => {
            this._isRouting = false;

            // Push the URL to window History
            this._history.push( urls.original );

            // Fire event for routing
            this._fire( urls.original, response, status );

            if ( typeof callback === "function" ) {
                callback( response, status );
            }
        });
    }


    _matchUrl ( url ) {
        if ( !this._ready ) {
            return;
        }

        for ( let i = this._callbacks.length; i--; ) {
            const data = this._matcher.parse( url, this._callbacks[ i ]._routerRoutes );

            if ( data.matched ) {
                this.fire( "preget", data );
                break;
            }
        }
    }


    _getUrl ( urls, callback ) {
        const handler = ( res, stat ) => {
            // Cache if option enabled
            this._cache( urls.original, res );

            if ( typeof callback === "function" ) {
                callback( res, stat );
            }
        };
        let xhr = null;

        // Cached response ?
        if ( this._responses[ urls.original ] ) {
            handler( this._responses[ urls.original ], this._responses[ urls.original ].status );

        // Fresh request ?
        } else if ( this._options.async ) {
            xhr = new XMLHttpRequest();

            xhr.open( "GET", urls.request, true );

            xhr.onreadystatechange = () => {
                if ( xhr.readyState === 4 ) {
                    if ( xhr.status === 200 ) {
                        handler( xhr, 200 );

                    } else if ( xhr.status === 404 && this._options.handle404 ) {
                        handler( xhr, 404 );

                    } else if ( xhr.status === 500 && this._options.handle500 ) {
                        handler( xhr, 500 );
                    }
                }
            };

            xhr.send();

        } else {
            handler( { responseText: "" }, 200 );
        }
    }


    _cache ( url, res ) {
        // Caching is enabled, Not currently cached yet
        if ( this._options.caching && !this._responses[ url ] ) {
            this._responses[ url ] = res;
        }
    }


    _fire ( url, response, status ) {
        // GET events have routes and are special ;-P
        // This means we bypass the Controller event system for these handlers
        for ( let i = this._callbacks.length; i--; ) {
            const data = this._matcher.parse( url, this._callbacks[ i ]._routerRoutes );

            if ( data.matched ) {
                this._callbacks[ i ].call( this, {
                    route: this._matcher._cleanRoute( url ),
                    response: response,
                    request: data,
                    status: status,
                });
            }
        }
    }
}
