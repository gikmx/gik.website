'use strict';

module.exports = function(request, reply){

    const live    = process.env.NODE_ENV === 'production';
    const href    = 'http://s3-us-west-2.amazonaws.com/gik.mx/';
    const sources = [
        { type: 'image/gif'     , href: `${href}gik-intro.gif`        },
        { type: 'image/svg+xml' , href: `${href}gik-logo.svg?G=white` },
        { type: 'video/webm'    , href: `${href}gik-intro.webm`       },
        { type: 'video/mp4'     , href: `${href}gik-intro.mp4`        },
    ];

    reply.view('root/view.html', {
        TITLE : 'GIK - Innovación con tecnología.',
        LINKS : [
            {type:'image/png' , rel:'shortcut icon' , href:`${href}gik-logo.png`   },
            {type:'text/css'  , rel:'stylesheet'    , href:'/static/css/~root.css' }
        ],
        SCRIPTS : [
        ].concat(!live? [] : { type:'application/javascript',  href:'/static/js/ga.js'}),
        logo : sources.filter(source => source.type == 'image/svg+xml').shift(),
        video: {
            config  : {
                controls : false,
                autoplay : true,
                loop     : true
            },
            fallback: sources.filter(src => src.type == 'image/gif').shift(),
            sources : sources.filter(src => src.type.indexOf('video/') === 0)
        }
    });
}
