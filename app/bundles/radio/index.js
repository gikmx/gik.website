'use strict';

module.exports = function(request, reply){

    reply.view('radio/view.html', {
        TITLE: 'GIK Radio - A radio for geeks.',
        LINKS: [
            {type:'text/css'  , rel:'stylesheet'    , href:'/static/css/~radio.css' }
        ],
        SCRIPTS: [
            {type:'application/javascript', href:'/static/js/audiojs/audio.min.js'},
            {type:'application/javascript', href:'/static/js/radio.js'}
        ]
    })
}
